
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Secret key for JWT
const SECRET_KEY = process.env.SECRET_KEY;

// Function to generate JWT token
function generateToken(user) {
  return jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
}

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
}

module.exports = { generateToken, authenticateToken };
