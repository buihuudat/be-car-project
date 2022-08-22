const router = require('express').Router();
const { body } = require('express-validator')
const tokenHandler = require('../handlers/tokenHandler')
const authController = require('../containers/auth');
const userModel = require('../models/UserModel');

router.post(
  '/verify-token',
  tokenHandler.verifyToken,
  authController.verifyToken
)

router.post(
  '/signin',
  tokenHandler.verifyToken,
  authController.signin
)

router.post(
  '/signup',
  body('phone').trim().isLength({ min: 10, max: 11 }).isNumeric().withMessage(
    'Invalid phone'
  ),
  body('username').trim().isLength({ min: 8 }).withMessage(
    'Username must be at least 8 characters'
  ),
  body('password').trim().isLength({ min: 8 }).withMessage(
    'Password must be at least 8 characters'
  ),
  body('confirmPassword').trim().isLength({ min: 8 }).withMessage(
    'ConfirmPassword must be at least 8 characters'
  ),
  body('username').custom(value => {
    return userModel.findOne({ username: value }).then(user => {
      if (user) {
        return Promise.reject('Username already used')
      }
    })
  }),
  body('phone').custom(value => {
    return userModel.findOne({ phone: value }).then(user => {
      if (user) {
        return Promise.reject('Phone already used')
      }
    })
  }),
  body('confirmPassword').custom((value, {req}) => {
    if (value !== req.body.password) {
      return Promise.reject('Password confirmation does not match password') 
    }
    return true
  }),
  tokenHandler.verifyToken,
  authController.signup
)

module.exports = router;