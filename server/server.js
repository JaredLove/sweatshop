// server.js
require('dotenv').config(); // Import dotenv to allow access to environment variables
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors'); // Import the 'cors' middleware
const Guild = require('./models/Guild');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://jay-user1:Callofduty*2322@cluster0.kz0zdwo.mongodb.net/charData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  writeConcern: {
    j: true, // Wait for data to be written to the journal
    wtimeout: 10000, // Set a longer timeout (e.g., 10 seconds)
  },
});



app.post('/api/fetchAndSaveData', async (req, res) => {
  try {
    const response = await axios.get(process.env.BLIZZARD_API_URL);
    console.log('Response:', response.data);

    // Extract the faction name and ensure it's a string
    const factionName = response.data.guild.faction.name;

    // Iterate through members and extract and save ranks
    const membersWithRanks = response.data.members.map((member) => {
      // Extract the rank for each member
      const rank = member.rank;
      
      // Create a new object with the rank included
      return {
        ...member,
        character: {
          ...member.character,
          rank,
        },
      };
    });

    // Sort the members by rank in ascending order
    membersWithRanks.sort((a, b) => a.character.rank - b.character.rank);

    // Assume you have a single document for the guild's roster
    const existingData = await Guild.findOne({}); // Find the existing document

    if (existingData) {
      // Update the existing document with the new data
      existingData.members = membersWithRanks;
      existingData.guild.faction = factionName; // Set the faction name
      await existingData.save();
    } else {
      // Create a new document if it doesn't exist
      const newData = new Guild({
        ...response.data,
        guild: {
          ...response.data.guild,
          faction: factionName, // Set the faction name
        },
        members: membersWithRanks, // Include all members with ranks
      });
      await newData.save();
    }

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'An error occurred while fetching and saving data' });
  }
});


app.get('/api/data', async (req, res) => {
  try {
    const data = await Guild.find(); // Fetch data from MongoDB
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.get('/api/hi', async (req, res) => {
    res.send('Hello World');
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
