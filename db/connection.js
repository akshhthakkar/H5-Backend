const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vedantb658:191020@cluster0.hzehkah.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose.connection;