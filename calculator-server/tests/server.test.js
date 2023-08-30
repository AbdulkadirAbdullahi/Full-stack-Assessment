const request = require('supertest');
const app = require('../index'); // Import your Express app

describe('API endpoints', () => {
  test('GET /api/history returns a list of calculation history', async () => {
    const response = await request(app).get('/api/history');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/calculate calculates and returns the result', async () => {
    const calculationData = { num1: 5, num2: 3, operation: 'add' };
    const response = await request(app)
      .post('/api/calculate')
      .send(calculationData);

    expect(response.status).toBe(200);
    expect(response.body.result).toBe(8); // Adjust this based on your expected calculation result
  });
});
