
const express = require('express');
const { authenticateToken } = require('./auth');
const router = express.Router();

router.get('/secure-data', authenticateToken, (req, res) => {
  res.json({ message: 'This is secure data' });
});

module.exports = router;
