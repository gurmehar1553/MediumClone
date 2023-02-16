const authRouter = require('express').Router()
const Users = require('../models/usersModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authorization =require('../utils/middleware')

authRouter.get('/', authorization, async (req, res) => {
    const { authData } = req;
    const { user, authStatus } = authData;
    res.json({ authStatus, user });
});

authRouter.post('/', async (req, res) => {
    const incommingData = req.body;
    console.log(incommingData)
    const tempUser = await Users.findOne({ email: incommingData.email }).populate('posts')
    if (!tempUser) {
      res.send({
        status: false,
        message: 'This account does not exist...',
        token: null,
        user: null,
      });
      return;
    }
    const matchPass = await bcrypt.compare(incommingData.password, tempUser.password);
    if (matchPass) {
      const token = jwt.sign(incommingData, "CLGPROJECT3", { expiresIn: incommingData.rememberMe ? '9999d' : '1h' });
      res.send({
        status: true,
        message: 'Logging in',
        token,
        user: tempUser,
      });
      return;
    }
    res.send({
      status: false,
      message: 'Wrong Password',
    });
});

authRouter.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username,email,password)
    const userResults = await Users.find({ $or: [{ username }, { email }] }).populate('posts');
    if (userResults.length) {
      res.json({
        status: false,
        message: 'User with the provided email already exists',
      });
      return;
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new Users({
      username,
      email,
      password: passwordHash,
    });
    await newUser.save();
    res.send({
      status: true,
      message: 'User created Successfully',
    });
    return;
  } catch (e) {
    res.send({
      status: false,
      message: `Unable to create User due to: ${e.message}`,
    });
  }
});

module.exports = authRouter