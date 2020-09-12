const app = require("../app")
const request = require("supertest")

beforeAll(function (done) {
  // Wait till appStarted is fired
  app.on("appStarted", done)
})

describe("Test trips API", () => {

  // This will add data to the database so don't use production environment
  it("should create a new trip", (done) => {
    request(app)
      .post("/trip")
      .send({
        name: "Touring the Alps",
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .end(done)
  })

  it("should have the trip inserted in the database", async () => {
    const res = await request(app).get("/trips")
    expect(res.statusCode).toEqual(200)
    expect(
      res.body.trips.filter((item) => item.name === "Touring the Alps").length >
        0
    ).toEqual(true)
  })
})

afterAll(() => {
  // Emit closeApp when the tests are finished
  app.emit("closeApp")
})