
import express from 'express';
import fetch from 'node-fetch'; 
import keys from './sources/keys.js'; 

const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hello from backend to frontend!');
});

router.post('/weather', async (req, res) => {
 const { cityName } = req.body; 
  

  if (!cityName) {
    return res.status(400).send('the city name is required ');
  }

  try {
   
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${keys}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ weatherText: "City is not found!" });
      } else {
        return res.status(response.status).json({ weatherText: "An error occurred while fetching weather data." });
      }
     
      
    } else{
  const weatherData = await response.json(); 
    console.log(weatherData)
    const temperature = weatherData.main.temp; 

   
    res.json({
      weatherText: `The current temperature in ${cityName} is ${temperature}°C.`
    });

    }

  
  } catch (error) {
   
    console.error('Error:', error);
    res.status(500).json({ weatherText: "Server error. Please try again later." });
  }
});

export default router;
