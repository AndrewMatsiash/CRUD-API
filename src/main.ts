import * as http from 'http';
import dotenv from 'dotenv';
import { getReq } from './methods/get-request.js';
import { users } from './data/users.js';
import { postReq } from './methods/post-request.js';
import { deleteReq } from './methods/delete-request.js';
import { putReq } from './methods/put-request.js';
dotenv.config()

const PORT = process.env.PORT || 8000

export const server = http.createServer((req, res) => {
	switch (req.method) {
		case 'GET':
			getReq(req, res, users)
			break;
		case 'POST':
			postReq(req, res, users)
			break;
		case 'PUT':
			putReq(req, res,users)
			break;
		case 'DELETE':
			deleteReq(req, res, users)
			break;

		default:
			res.statusCode = 404
			res.setHeader('Content-Type', 'application/json')
			res.write(JSON.stringify({ title: 'Not Found', message: 'Route not found' }))
			res.end()
			break;
	}

})

server.listen(PORT, () => {
	console.log(`server listening on http://localhost:${PORT}`)
})