import axios from 'axios';

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api/workouts`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual("This action returns all workouts");
  });
});
