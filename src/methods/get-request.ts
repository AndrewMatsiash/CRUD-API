import { IncomingMessage, ServerResponse } from "http";
import { IUser } from "../data/data.js";

export const getReq = (req: IncomingMessage, res: ServerResponse<IncomingMessage> & {
	req: IncomingMessage;
}, data: IUser[]) => {
	if (req.url === '/api/users') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(data));
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ title: 'Not Found', message: 'Route not found' }));
	}
};
