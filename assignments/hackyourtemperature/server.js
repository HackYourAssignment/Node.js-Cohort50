import express from 'express';

const app = express(); 


app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});


app.post('/weather', (req, res) => {

  const { cityName} = req.body;


  if (cityName) {
    res.send(`City name received: ${cityName}`);
  } else {
    res.status(400).send('City name is required!');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
