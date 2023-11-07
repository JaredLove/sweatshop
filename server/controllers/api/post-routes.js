// backend-api/routes/data.js
const express = require('express');
const router = express.Router();
const Data = require('../../models/Member'); // Define a Data model

// Save data to MongoDB
router.post('/', async (req, res) => {
  try {
    const newData = new Data(req.body);
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while saving data.' });
  }
});

// Retrieve data from MongoDB
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = router;