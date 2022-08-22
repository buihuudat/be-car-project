const jwt = require('jsonwebtoken')
const User = require ('../models/UserModel')

const tokenDecode = (req) => {
  const bearerHeader = req.headers['authorization']
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')[1]
    try {
      const tokenDecoded = jwt.verify(
        bearer,
        process.env.TOKEN_SECRET_KEY
      )
      return tokenDecoded
    } catch (error) {
      return false
    }
  } else {
    return false
  }
}

exports.verifyToken = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req)
  if (tokenDecoded) {
    const user = await User.findById(tokenDecode.id)
    if (!user) return res.status(401).json('Unathorized')
    res.user = user
    next()
  } else {
    res.status(401).json('Unathorized')
  }
}