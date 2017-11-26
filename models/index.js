const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://admin:ddrmax@ds121456.mlab.com:21456/message-in-a-bottle');
