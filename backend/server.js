// Import required modules
const express = require('express');
const { MongoClient } = require('mongodb');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Atlas connection URI
const uri = 'mongodb+srv://admin:SeFMpKGL9P3RhAQX@cluster0.sjck0va.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());

// Routes
app.post('/register', async (req, res) => {
  try {
    const db = client.db('test'); // Replace <database-name> with your database name
    const result = await db.collection('users').insertOne(req.body); // Insert user data into the 'users' collection
    res.status(201).json({ message: 'User registered successfully', userId: result.insertedId });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const db = client.db('test'); // Replace <database-name> with your database name
    const user = await db.collection('users').findOne({ email: req.body.email }); // Find user by email
    if (!user || user.password !== req.body.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Other routes...

// Start the server
async function startServer() {
  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1); // Exit the process if unable to connect to MongoDB Atlas
  }
}

// Call the startServer function to start the server
startServer();
