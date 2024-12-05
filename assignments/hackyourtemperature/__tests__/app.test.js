const request = require('supertest');
const app = require('../app');

describe('POST /weather', () => {
    it('should return temperature for valid city', async () => {
        const response = await request(app).post('/weather').send({ cityName: 'Amsterdam' });
        expect(response.status).toBe(200);
        expect(response.body.message).toContain('The temperature in Amsterdam is');
    });

    it('should return error for invalid city', async () => {
        const response = await request(app).post('/weather').send({ cityName: 'InvalidCity' });
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('City is not found!');
    });

    it('should return error for missing cityName', async () => {
        const response = await request(app).post('/weather').send({});
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Bad Request');
    });
});
