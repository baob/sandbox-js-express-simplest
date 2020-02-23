import request from 'supertest';
import app from '../app';

describe('app routes', () => {
    describe('GET /users', () => {
        it('shows home page', async () => {
            const res = await request(app)
                .get('/users/')
                .send({
                    userId: 1,
                    title: 'test is cool',
                });

            // console.log('res:', JSON.stringify(res));
            // console.log('res.body:', JSON.stringify(res.body));
            // console.log('res.headers:', JSON.stringify(res.headers));
            // console.log('res.request:', JSON.stringify(res.request));

            expect(res.statusCode).toEqual(200);
            expect(res.headers).toHaveProperty(
                'content-type',
                'text/html; charset=utf-8'
            );
            expect(res).toHaveProperty('text', 'respond with a resource');
        });
    });
});
