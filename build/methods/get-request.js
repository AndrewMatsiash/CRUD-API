export const getReq = (req, res, data) => {
    if (req.url === '/api/users') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ title: 'Not Found', message: 'Route not found' }));
    }
};
//# sourceMappingURL=get-request.js.map