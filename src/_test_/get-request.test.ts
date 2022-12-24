import request from "supertest";
import { server } from "../main.js";


afterAll(() => {
	server.close()
})

describe('getReq', () => {
	it('should return a 200 status code and the data when the url is /api/users', async () => {
		await request(server).get('/api/users').expect(200, [{
			id: 'f33439bd-4057-4c0c-86f3-5c7ab5340459',
			username: 'Andrei',
			age: 28,
			hobbes: ['']
		}])

		// const req = { url: '/api/users' };
		// const res = {
		// 	statusCode: 0,
		// 	setHeader: jest.fn(),
		// 	end: jest.fn()
		// };
		// const data = [{ name: 'John' }, { name: 'Jane' }];
		// getReq(req, res, data);
		// expect(res.statusCode).toBe(200);
		// expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
		// expect(res.end).toHaveBeenCalledWith(JSON.stringify(data));
	});

	// it('should return a 404 status code and an error message when the url is not /api/users', () => {
	// 	const req = { url: '/' };
	// 	const res = {
	// 		writeHead: jest.fn(),
	// 		end: jest.fn()
	// 	};
	// 	const data = [];
	// 	getReq(req, res, data);
	// 	expect(res.writeHead).toHaveBeenCalledWith(404, { 'Content-Type': 'application/json' });
	// 	expect(res.end).toHaveBeenCalledWith(
	// 		JSON.stringify({ title: 'Not Found', message: 'Route not found' })
	// 	);
	// });
});