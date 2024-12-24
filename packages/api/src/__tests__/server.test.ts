import { faker } from "@faker-js/faker";
import supertest from "supertest";
import { createServer } from "../server";

describe("Server", () => {
  it("health check returns 200", async () => {
    await supertest(createServer())
      .get("/status")
      .expect(200)
      .then((res) => {
        expect(res.ok).toBeTrue();
      });
  });

  it("message endpoint says hello", async () => {
    const username = faker.person.firstName;
    await supertest(createServer())
      .get(`/message/${username}`)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({ message: `hello ${username}` });
      });
  });
});
