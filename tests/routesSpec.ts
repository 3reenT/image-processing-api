import request from 'supertest';
import app from '../src/server';

describe('Test endpoint responses', (): void => {
  it('gets the home route', async (): Promise<void> => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('returns 200 for valid image request', async (): Promise<void> => {
    const response = await request(app).get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('returns 400 for missing filename', async (): Promise<void> => {
    const response = await request(app).get('/api/images?width=200&height=200');
    expect(response.status).toBe(400);
  });

  it('returns 400 for missing width or height', async (): Promise<void> => {
    const response = await request(app).get(
      '/api/images?filename=fjord&width=200'
    );
    expect(response.status).toBe(400);
  });

  it('returns 400 for invalid width/height', async (): Promise<void> => {
    const response = await request(app).get(
      '/api/images?filename=fjord&width=-1&height=0'
    );
    expect(response.status).toBe(400);
  });

  it('returns 404 for missing image file', async (): Promise<void> => {
    const response = await request(app).get(
      '/api/images?filename=unknown&width=200&height=200'
    );
    expect(response.status).toBe(404);
  });
});
