import express from "express";
import { keys } from "./sources/keys.js";
import fetch from "node-fetch";
import { engine } from "express-handlebars";

const app = express();

app.use(express.json())

app.post('/weather', async (req, res) => {
  const cityName = req.body.cityName;

  if(!cityName) {
    return res.status(400).json({weatherText: "City is not found!" })
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}&units=metric`);
    if (!response.ok) {
      return res.status(response.status).json({error: "API error"});
    }
    const data = await response.json();
    return res.status(200).send(`It is ${data.main.temp}°C in ${cityName}`)
  } 
  catch {
    console.error("Error fetching data");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default app;
