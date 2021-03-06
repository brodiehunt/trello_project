const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  boards: [{
    board_ID: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }]
  
})

User.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('User', User);