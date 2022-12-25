import { IncomingMessage, ServerResponse } from "http";
import { IUser } from "../data/data.js";

export const deleteReq = (
	req: IncomingMessage,
	res: ServerResponse<IncomingMessage> & {
		req: IncomingMessage;
	},
	data: IUser[],
) => {
	const baseUrl = req.url?.substring(0, req.url.lastIndexOf('/') + 1);
	const id = req.url?.split('/')[3] || '';
	const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

	if (id !== '' && !regexV4.test(id)) {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ title: 'Validation failed', message: 'UUID is not valid' }));
	} else if (baseUrl === '/api/users/' && regexV4.test(id)) {
		res.setHeader('Content-Type', 'application/json');
		const isUser = data.find(el => el.id === id)
		if (isUser) {
			const filterUserById = data.filter((el) => el.id !== id);
			res.statusCode = 200;
			res.end(JSON.stringify(filterUserById));
		} else {
			res.statusCode = 404;
			res.end(JSON.stringify({ title: 'Not Found', message: 'user not found' }));
		}
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ title: 'Not Found', message: 'Route not found' }));
	}
};
