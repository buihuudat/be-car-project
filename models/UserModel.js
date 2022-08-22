const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  email: {
    type: String,
    default: ''
  },
  address: String,
}, {timestamps: true})

module.exports = mongoose.model('user', UserModel);