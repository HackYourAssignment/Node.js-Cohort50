import express from 'express';
import { httpStatus, messages } from './httpStatusCodes.js';
import { sendResponse } from './responseUtils.js';
import { errorHandler } from './errorHandler.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    sendResponse(res, httpStatus.OK, null, 'hello from backend to frontend!');
});

app.post('/weather', (req, res, next) => {
    const cityName = req.body.cityName;
    
    if (!cityName) {
        const error = new Error(messages.BAD_REQUEST);
        error.status = httpStatus.BAD_REQUEST;
        return next(error);
    }

    sendResponse(res, httpStatus.OK, { cityName }, `You submitted: ${cityName}`);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});