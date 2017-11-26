const db = require('../models');

exports.getMessages = (req, res) => {
  db.Message.find()
    .then((messages) => {
      res.json(messages);
    })
    .catch((e) => {
      res.send(e);
    })
}

exports.postMessage = (req, res) => {
  let newMessage = {
    message: req.body.message,
    author: req.body.author
  }
  db.Message.create(newMessage)
    .then((message) => {
      res.json(message);
    })
    .catch((e) => {
      res.send(e);
    });
}

exports.getMessage = (req, res) => {
  db.Message.findById(req.params.messageId)
    .then((message) => {
      res.json(message);
    })
    .catch((e) => {
      res.send(e);
    })
}

exports.updateMessage = (req, res) => {
  // Updating is forbidden by design - but placeholder code to implement is below.
  // db.Message.findOneAndUpdate({_id: req.params.messageId}, req.body)
  //   .then((message) => {
  //     res.json(message);
  //   })
  //   .catch((e) => {
  //     res.send(e);
  //   });
    res.send('Cannot update');
}

exports.deleteMessage = (req, res) => {
  db.Message.remove({_id: req.params.messageId})
    .then((message) => {
      res.json({message: 'Message deleted.'});
    })
    .catch((e) => {
      res.send(e);
    });
}

module.exports = exports;
