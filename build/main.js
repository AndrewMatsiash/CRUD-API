import * as http from 'http';
const server = http.createServer((req, res) => {
    console.log(req);
    console.log('server request');
});
server.listen(3000, () => {
    console.log('server listening on http://localhost:3000');
});
//# sourceMappingURL=main.js.map