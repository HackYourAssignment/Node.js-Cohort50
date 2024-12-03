import { app } from '../app.js';
import supertest from 'supertest';

const request = supertest(app);

describe('POST /weather', () => {
    it('should get 400 if cityName is empty', async () => {
        const response = await request.post('/weather').send({});
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            weatherText: 'City name is required!'
        });
    });

    it('should get 404 if cityName is gibberish', async () => {
        const response = await request
            .post('/weather')
            .send({ cityName: 'nonesence123' });
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ weatherText: 'City is not found!' });
    });

    it('should get 200 if correct cityName is sent', async () => {
        const response = await request
            .post('/weather')
            .send({ cityName: 'Amsterdam' });

        expect(response.status).toBe(200);
        expect(response.body.weatherText).toContain('Amsterdam');
    });
});