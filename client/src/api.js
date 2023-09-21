
const BASE_URL = "http://localhost:3001/links";


export async function getLinks() {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('An error occurred while fetching data from the API');
    }
  }