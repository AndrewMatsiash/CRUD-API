import request from "supertest";
import { server } from "../main.js";
import { users } from "../data/users.js";


afterAll(() => {
	server.close()
})

describe('getReq', () => {
	it('should return a 200 status code and the data when the url is /api/users', async () => {
		await request(server).get('/api/users').expect(200, users)

	});

	it('should return a 404 status code and an error message when the url is not /api/error', async () => {
		await request(server).get('/api/dfdfdfdf').expect(404, { title: 'Not Found', message: 'Route not found' })
	});
});