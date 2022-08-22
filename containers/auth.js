const UserModel = require('../models/UserModel')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

module.exports = {
  verifyToken: (req, res) => {
    co(function*() {
      const user = req.user
      return user
    })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
  },

  signin: async (req, res) => {
    const { username, password } = req.body
    try {
      const user = await UserModel.findOne({username})
      if (!user) {
        return res.status(401).json({
          errors: [{
            param: 'username',
            msg: 'Invalid username or password'
          }]
        })
      }

      const decryptedPass = CryptoJS.AES.decrypt(
        user.username,
        process.env.PASSWORD_SECRET_KEY
      ).toString(CryptoJS.enc.Utf8)
      
      if (password !== decryptedPass) {
        return res.status(401).json({
          errors: [{
            param: 'username',
            msg: 'Invalid username or password'
          }]
        })
      }
      user.password = undefined

      const token = jwt.sign(
        { id: user._id },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: '24h' }
      )

      res.status(200).json({ user, token })
    } catch (error) {
      res.status(500).json(error)
    }
  },

  signup: async (req, res) => {
    const { password } = req.body
    try {
      req.body.password = CryptoJS.AES.encrypt(
        password,
        process.env.PASSWORD_SECRET_KEY
      )

      const user = UserModel.create(req.body)
      const token = jwt.sign(
        { id: user._id },
        process.env.TOKEN_SECRET_KEY,
        { expiresIn: '24h' }
      )

      res.status(200).json({ user, token })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}