const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const { httpStatus, messages } = require('./httpStatusCodes');
const { sendResponse } = require('./responseUtils');
const { errorHandler } = require('./errorHandler');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    sendResponse(res, httpStatus.OK, null, 'Welcome to HackYourTemperature!');
});

app.post('/weather', async (req, res, next) => {
    const cityName = req.body.cityName;

    if (!cityName) {
        const error = new Error(messages.BAD_REQUEST);
        error.status = httpStatus.BAD_REQUEST;
        return next(error);
    }

    try {
        const API_KEY = process.env.API_KEY;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`
        );

        const data = await response.json();

        if (response.status === 404) {
            sendResponse(res, httpStatus.NOT_FOUND, null, 'City is not found!');
        } else if (response.ok) {
            sendResponse(res, httpStatus.OK, {
                cityName: data.name,
                temperature: data.main.temp,
            }, `The temperature in ${data.name} is ${data.main.temp}°C`);
        } else {
            throw new Error('Error fetching weather data');
        }
    } catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    const statusCode = err.status || httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || 'An unexpected error occurred';
    res.status(statusCode).json({
        status: 'error',
        message: message,
        error: { code: statusCode, message },
    });
});

module.exports = app;
