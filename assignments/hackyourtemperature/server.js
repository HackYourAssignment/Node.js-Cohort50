import express from "express";

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// GET request for /
app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

// POST request for /weather
app.post("/weather", (req, res) => {
  const { cityName = "Amsterdam" } = req.body; // Extract cityName from request body
  if (!cityName) {
    return res.status(400).send("City name is required.");
  }
  res.json({ message: `You submitted: ${cityName}` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});