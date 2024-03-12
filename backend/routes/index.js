const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello from EduHub backend route!');
});

module.exports = router;
