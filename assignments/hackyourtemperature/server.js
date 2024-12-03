// Import necessary modules
import express from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON data in POST requests
app.use(express.json());

// GET route for '/'
app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

// POST route for '/weather'
app.post('/weather', (req, res) => {
  const { cityName } = req.body; // Extract cityName from request body
  res.send(`You submitted: ${cityName}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});