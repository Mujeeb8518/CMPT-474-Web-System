// routes/post.js
const express = require('express');
const router = express.Router();

// POST /api/posts
router.post('/', async (req, res) => {
  try {
    // Logic to save the posted text to the database
    const { text } = req.body;
    // Insert text into the database
    // Example: save the text to a "posts" collection
    const result = await db.collection('posts').insertOne({ text });
    res.status(201).json({ message: 'Text posted successfully', postId: result.insertedId });
  } catch (error) {
    console.error('Error posting text:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
