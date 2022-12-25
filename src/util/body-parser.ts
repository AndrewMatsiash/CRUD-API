import { IncomingMessage, ServerResponse } from "http"
import { IUser } from "../data/data.js"

export const requestBodyParser = async (request: IncomingMessage) => {
	return new Promise<IUser>((resolve, reject) => {
		try {
			let body = ''
			request.on('data', (chunk) => { body += chunk })
			request.on('end', () => { resolve(JSON.parse(body)) })
		} catch (error) {
			console.log(error);
			reject(error)
		}
	})

}