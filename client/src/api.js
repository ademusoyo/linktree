
const BASE_URL = "http://localhost:3001/links/";


export async function getLinks() {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('An error occurred while fetching data from the API');
    }
  }

  export async function updateLink(id, params) {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    }
    try {
        const response = await fetch(BASE_URL + id, options);
        await response.json();
    } catch(error) {
        throw new Error('An error occured while fetching data from the API')
    }

  }

  export async function deleteLink(id) {
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        const response = await fetch(BASE_URL + id, options);
        await response.json();
    } catch(error) {
        throw new Error('An error occured while fetching data from the API')
    }

  }

  export async function createLink(params) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    }
    try {
        const response = await fetch(BASE_URL, options);
        await response.json();
    } catch(error) {
        throw new Error('An error occured while fetching data from the API')
    }

  }

 