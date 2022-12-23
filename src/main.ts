
import * as http from 'http';
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 8000

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.write(JSON.stringify({ message: 'Hello, to Node.js' }))
	res.end()
})

server.listen(PORT, () => {
	console.log(`server listening on http://localhost:${PORT}`)
})