
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
import fetch from 'node-fetch';

async function makeReservation() {
  try{
    const url = "https://reservation100-sandbox.mxapps.io/rest-doc/api";
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("URL: Not found");
    }
const data = await response.json();
if(!data){
  throw new Error("Data: Not found");

}
console.log(data);
  }catch(error){
    console.log(error);

  }
  // YOUR CODE GOES IN HERE

}

makeReservation();