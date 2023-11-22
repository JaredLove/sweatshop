require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const Guild = require('./models/Guild');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: {
    j: true,
    wtimeout: 10000,
  },
});

const apiUrl = process.env.BLIZZARD_API_URL; // Replace this with your actual API endpoint
const requestQueue = [];
let isProcessingQueue = false;

async function makeApiCall(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error making API call:', error.message);
    throw error;
  }
}

async function processRequestQueue() {
  if (isProcessingQueue) return;

  isProcessingQueue = true;

  while (requestQueue.length > 0) {
    const { url, resolve, reject, delay } = requestQueue.shift();

    try {
      const responseData = await makeApiCall(url);
      resolve(responseData);
    } catch (error) {
      reject(error);
    }

    await new Promise(resolve => setTimeout(resolve, delay));
  }

  isProcessingQueue = false;
}

function enqueueRequest(url, delay) {
  return new Promise((resolve, reject) => {
    requestQueue.push({ url, resolve, reject, delay });
    processRequestQueue();
  });
}



app.post('/api/fetchAndSaveData', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    console.log('Response:', response.data);

    const factionName = response.data.guild.faction.name;

    const membersWithRanks = await Promise.all(response.data.members.map(async (member) => {
      const rank = member.rank;

      try {
        const additionalDataResponse = await enqueueRequest(
          `https://us.api.blizzard.com/profile/wow/character/${member.character.realm.slug.toLowerCase()}/${member.character.name.toLowerCase()}?namespace=profile-us&locale=en_US&access_token=USU8We6hIolyqWhX65nFalDvpvrKsbEcR8`,
          1000 // Adjust delay as needed
        );

        const additionalData = additionalDataResponse;
        if (!additionalData) {
          // Additional data is undefined, handle it as needed (e.g., log and skip)
          console.error('Additional data is undefined for:', member);
          return null; // or another suitable value
        }

        // Make a third API call
        const thirdApiResponse = await enqueueRequest(
          `https://us.api.blizzard.com/profile/wow/character/${member.character.realm.slug.toLowerCase()}/${member.character.name.toLowerCase()}/character-media?namespace=profile-us&locale=en_US&access_token=USU8We6hIolyqWhX65nFalDvpvrKsbEcR8`,
          1000 // Adjust delay as needed
        );

        // Extract only the assets key value
        const assets = thirdApiResponse.assets;

        const extractedData = {
          gender: additionalData.gender?.type, // Use optional chaining to handle potential undefined properties
          faction: additionalData.faction?.type,
          activeSpec: additionalData.active_spec?.name,
          assets: assets, // Add the assets key value
        };

        return {
          ...member,
          character: {
            ...member.character,
            rank,
            additionalData: extractedData,
          },
        };
      } catch (additionalDataError) {
        console.error('Error fetching additional data:', additionalDataError);
        return null; // or another suitable value
      }
    }));

    // Filter out members with additionalData set to null
    const filteredMembers = membersWithRanks.filter((member) => member !== null);

    filteredMembers.sort((a, b) => a.character.rank - b.character.rank);

    const existingData = await Guild.findOne({});

    if (existingData) {
      existingData.members = filteredMembers;
      existingData.guild.faction = factionName;
      await existingData.save();
    } else {
      const newData = new Guild({
        ...response.data,
        guild: {
          ...response.data.guild,
          faction: factionName,
        },
        members: filteredMembers,
      });
      await newData.save();
    }

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error making API call:', error);
    console.error('Response body:', error.response ? error.response.data : 'No response body');
    res.status(500).json({ error: 'An error occurred while fetching and saving data' });
  }
});


app.get('/api/data', async (req, res) => {
  try {
    const data = await Guild.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
