import request from "supertest";
import { server } from "../main.js";



afterAll(() => {
	server.close()
})

describe('REST api TESTS', () => {
	it('should return a 200 status code and the data when the url is /api/users and method GET', async () => {
		await request(server).get('/api/users').expect(200, [])
	});


	it('should return a 404 status code and an error message when the url is not /api/users and method GET', async () => {
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

	it('should return a 200 status code and the data when the url is api/users/id method GET', async () => {
		const { body } = await request(server).get(`/api/users/${user.id}`).expect(200)
		expect(body).toEqual(
			{
				id: user.id,
				username: "Andrei",
				age: 28,
				hobbes: [''],
			}
		)

	})

	it('should return a 200 status code and the data when the url is api/users/id method DELETE', async () => {
		await request(server).delete(`/api/users/${user.id}`).expect(200)
	})

	it('should return a 200 status code and the data when the url is api/users/id method PUT', async () => {
		await request(server).put(`/api/users/${user.id}`).send({
			username: "Alex",
			age: 30,
			hobbes: [''],
		}).expect(200, {
			id: user.id,
			username: "Alex",
			age: 30,
			hobbes: [''],
		})
	})

});
