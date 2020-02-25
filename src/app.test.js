import request from 'supertest';
import app from './app';

describe('app routes', () => {
    describe('GET /', () => {
        it('shows home page', async () => {
            const res = await request(app)
                .get('/')
                .send();

            expect(res.statusCode).toEqual(200);
            expect(res.headers).toHaveProperty(
                'content-type',
                'text/html; charset=utf-8'
            );
            expect(res).toHaveProperty('text');
            expect(res.text).toMatch(/Welcome to Express/);
        });
    });

    describe('GET /users', () => {
        it('shows user response', async () => {
            const res = await request(app)
                .get('/users')
                .send({
                    userId: 1,
                    title: 'test is cool',
                });

            // console.log('res:', JSON.stringify(res));
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
    describe('GET /foobar', () => {
        it('gives 404', async () => {
            const res = await request(app)
                .get('/foobar')
                .send();

            expect(res.statusCode).toEqual(404);
            expect(res.headers).toHaveProperty(
                'content-type',
                'text/html; charset=utf-8'
            );
            expect(res).toHaveProperty('text');
            expect(res.text).toMatch(/Not found/i);
        });
    });
});
