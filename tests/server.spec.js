const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("GET /cafes", async () => {
        const res = await request(server).get("/cafes").send();
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
    })
    it("DELETE /cafes/:id", async () => {
        const jwt = "token"
        const res = await request(server).delete("/cafes/10").
        set('Authorization',jwt).send();
        expect(res.statusCode).toEqual(404);
    })
    it("POST /cafes", async () => {
        const res = await request(server).post("/cafes").send({
            nombre: "Cafe de prueba",
            id: 10,
        });
        expect(res.statusCode).toEqual(201);
    })
    it("PUT /cafes/:id", async () => {
        const res = await request(server).put("/cafes/2").send({
            nombre: "Cafe de prueba",
            id: 3,
        });
        expect(res.statusCode).toEqual(400);
    })
});
