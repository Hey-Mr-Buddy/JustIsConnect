const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/connection');
const { checkAuth } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password, account_type } = req.body;
  if (!username || !email || !password || !account_type)
    return res.status(400).json({ message: 'All fields are required' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [existing] = await db.execute('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) return res.status(409).json({ message: 'User already exists' });

    await db.execute(
      'INSERT INTO users (username, email, password, account_type) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, account_type]
    );

    res.status(201).json({ message: 'User created successfully', success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Signup error' });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'All fields are required' });

  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '1h' }
    );

    
    res.status(200).json({
      message: 'Login successful',
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        account_type: user.account_type
      },
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login error' });
  }
});

module.exports = router;