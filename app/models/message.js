// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var messageSchema = mongoose.Schema({

    name: String,
    msg: String,
    thumbUp: Number

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Message', messageSchema);
