

import router from "../app.js";
import app from "../server.js";
import supertest from "supertest";

const request = supertest(app);



describe('Post/weather', () => {



    it('should respond to the /weather endpoint', async () => {
        const response = await request.post("/weather").send({ cityName: "London" });
        expect(response.status).toBe(200); 
        expect(response.body.weatherText).toContain("The current temperature in London");
      });
      

 
    it("should return a 400 error if city name is missing", async() => {
        const response = await request.post("/weather").send({}); 
    
        expect(response.status).toBe(400); 
        expect(response.text).toBe("the city name is required "); 
  });

  it("should return a 404 error for an invalid city name", async () => {
    const invalidCity = "invalid";
    const response = await request.post("/weather").send({ cityName: invalidCity });

    expect(response.status).toBe(404); 
    expect(response.body.weatherText).toBe("City is not found!");
  });
  


});



