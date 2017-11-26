const mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
