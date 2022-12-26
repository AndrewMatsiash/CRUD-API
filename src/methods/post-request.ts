import { v4 as uuid4 } from 'uuid';
import { IncomingMessage, ServerResponse } from 'http';
import { IUser } from '../data/data.js';
import { requestBodyParser } from '../util/body-parser.js';
import { hasPropertiesObj } from '../util/hasPropertiesObj.js';

export const postReq = async (
	req: IncomingMessage,
	res: ServerResponse<IncomingMessage> & {
		req: IncomingMessage;
	},
	data: IUser[],
) => {
	if (req.url === '/api/users') {
		try {
			const body = await requestBodyParser(req);
			const isBodyValid = hasPropertiesObj(body);
			if (isBodyValid) {
				body.id = uuid4();
				data.push(body);
				res.writeHead(201, { 'Content-type': 'application/json' });
				res.end(JSON.stringify(body));
			} else {
				res.writeHead(400, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify({ title: 'Validation failed', message: 'Request body is not valid' }));
			}
		} catch (error) {
			res.writeHead(400, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ title: 'Validation failed', message: 'Request body is not valid' }));
		}
	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'application/json');
		res.write(JSON.stringify({ title: 'Not Found', message: 'Route not found' }));
		res.end();
	}
};
