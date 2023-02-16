const jwt = require('jsonwebtoken');
const Users = require('../models/usersModel');

const SecretKey = 'CLGPROJECT3';

function authorization(req, res, next) {
  const authHeader = req.get('Authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    res.json({ authStatus: false, user: null, err: 'There is no token' });
    return;
  }

  jwt.verify(token, SecretKey, async (err, user) => {
    if (err) {
      res.json({ authStatus: false, user: null, err: err.message });
      return;
    }
    const userData = await Users
      .findOne({ email: user.email })
      .populate('posts')
    req.authData = { authStatus: true, user: userData, err: null };
    next();
  });
}

module.exports = authorization
