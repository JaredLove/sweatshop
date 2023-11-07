const mongoose = require('mongoose');


// Connect to your MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/char-data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = mongoose.connection;