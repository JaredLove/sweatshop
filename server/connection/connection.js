require('dotenv').config();
const mongoose = require('mongoose');


// Connect to your MongoDB database
mongoose.connect(process.env.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = mongoose.connection;