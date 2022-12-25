import request from "supertest";
import { server } from "../main.js";
import { users } from "../data/users.js";
import { v4 as uuid4 } from 'uuid';


afterAll(() => {
	server.close()
})

describe('REST api TEST', () => {
	it('should return a 200 status code and the data when the url is /api/users', async () => {
		await request(server).get('/api/users').expect(200, [])
	});



	it('should return a 404 status code and an error message when the url is not /api/user', async () => {
		await request(server).get('/api/dfdfdfdf').expect(404, { title: 'Not Found', message: 'Route not found' })
	});

	it('should return a 404 status code and an error message when the url is not /api/users and method POST', async () => {
		await request(server).post('/api/notValidRout').expect(404, { title: 'Not Found', message: 'Route not found' })
	});

	let user: any = null;

	it('should return a 201 status code and an error message when the url is  /api/users and method POST', async () => {
		const { body } = await request(server).post('/api/users').send({
			username: "Andrei",
			age: 28,
			hobbes: [''],
		},).expect(201)

		user = body

		expect(user).toEqual(
			{
				id: expect.any(String),
				username: "Andrei",
				age: 28,
				hobbes: [''],
			}
		)

		await request(server).get('/api/users').expect(200, [body])
	})

	it('should return a 200 status code and the data when the url is api/users/id', async () => {
		const { body } = await request(server).get(`/api/users/${user.id}`).expect(200)
		expect(body).toEqual(
			{
				id: expect.any(String),
				username: "Andrei",
				age: 28,
				hobbes: [''],
			}
		)

	})
});