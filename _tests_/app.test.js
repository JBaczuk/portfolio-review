process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");

describe("GET /", function() {
    test("Render homepage", async function() {
      const response = await request(app).get(`/`);
      expect(response.statusCode).toEqual(200);
  });
});

describe("GET /hip-hop", function() {
    test("Render hip-hop page", async function() {
      const response = await request(app).get(`/hip-hop`);
      expect(response.statusCode).toEqual(200);
  });
});

describe("GET /r&b", function() {
    test("Render r&b page", async function() {
      const response = await request(app).get(`/r&b`);
      expect(response.statusCode).toEqual(200);
  });
});

describe("GET /pop", function() {
    test("Render pop page", async function() {
      const response = await request(app).get(`/pop`);
      expect(response.statusCode).toEqual(200);
  });
});

describe("GET /blues", function() {
  test("Render blues page", async function() {
    const response = await request(app).get(`/blues`);
    expect(response.statusCode).toEqual(200);
});
});

describe("GET /jazz", function() {
  test("Render jazz page", async function() {
    const response = await request(app).get(`/jazz`);
    expect(response.statusCode).toEqual(200);
});
});

describe("GET /rock", function() {
  test("Render rock page", async function() {
    const response = await request(app).get(`/rock`);
    expect(response.statusCode).toEqual(200);
});
});

describe("GET /country", function() {
  test("Render country page", async function() {
    const response = await request(app).get(`/country`);
    expect(response.statusCode).toEqual(200);
});
});


describe("GET /artists", function() {
  test("Render artists page", async function() {
    const response = await request(app).get(`/artists`);
    expect(response.statusCode).toEqual(200);
});
});

describe("GET /songs", function() {
  test("Render songs page", async function() {
    const response = await request(app).get(`/songs`);
    expect(response.statusCode).toEqual(200);
});
});

describe("GET /documentaries", function() {
  test("Render documentaries page", async function() {
    const response = await request(app).get(`/documentaries`);
    expect(response.statusCode).toEqual(200);
});
});

describe("GET /charts", function() {
  test("Render charts page", async function() {
    const response = await request(app).get(`/charts`);
    expect(response.statusCode).toEqual(200);
});
});

describe("GET /events", function() {
test("Render events page", async function() {
  const response = await request(app).get(`/events`);
  expect(response.statusCode).toEqual(200);
});
});

describe("GET /news", function() {
test("Render news page", async function() {
  const response = await request(app).get(`/news`);
  expect(response.statusCode).toEqual(200);
});
});
