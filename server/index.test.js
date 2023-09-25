const server = require('./index');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Testing Linktree Server Endpoints', () => {
  
    it('should return the server information', async () => {
      const response = await requestWithSupertest.get('/');
      expect(response.status).toBe(200);
      expect(response.body.info).toBe('Linktree Server using postgres and express')
    });
  
    it("GET /links should return all links", async () => {
        const res = await requestWithSupertest.get("/links");
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0); 
    });

  });