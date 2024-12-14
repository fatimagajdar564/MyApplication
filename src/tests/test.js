const request = require('supertest');
const app = require('../app');  // Assurez-vous que le chemin correspond à votre fichier app.js

describe('GET /', () => {
  it('should return a 200 status and Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
