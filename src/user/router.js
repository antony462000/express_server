const signupController = require('./controllers/signupController');
const userRouter = require('express').Router();

userRouter.post('/signup',signupController)

module.exports=userRouter