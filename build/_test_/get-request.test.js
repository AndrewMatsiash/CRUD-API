import request from "supertest";
import { server } from "../main.js";
afterAll(() => {
    server.close();
});
describe('getReq', () => {
    it('should return a 200 status code and the data when the url is /api/users', async () => {
        await request(server).get('/api/users').expect(200, [{
                id: 'f33439bd-4057-4c0c-86f3-5c7ab5340459',
                username: 'Andrei',
                age: 28,
                hobbes: ['']
            }]);
    });
});
//# sourceMappingURL=get-request.test.js.map