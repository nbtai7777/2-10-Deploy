// copy the URL string where we want to connect to
const BASE_URL = 'https://62ba9b04573ca8f8328762ca.mockapi.io';

// Require axios and create the connection to the base URL
const axios = require('axios');
const API = axios.create({ baseURL: BASE_URL }); 

// Async await as an alternative in handling asynchronous promises
// using IIFE (Immediately invoked function expressions)

function apiGet() {
    (async () => {
      const response = await API.get('/product')
      console.log('GET status:', response.status);
      console.log('GET data:', response.data);
    }) ()
  }

// Notice that it looks messy. So alternate way is use arrow function, with try...
// catch as error handling

const apiGetId = async (id) => {
    try {
      const response = await API(`/product/${id}`);
        console.log(response.data);    
    } catch (error) {
      console.log(error.message);
    }
  }

const apiPost = async (id) => {
    try {
      const response = await API(`/product`);
        console.log(response.data);    
    } catch (error) {
      console.log(error.message);
    }
  }

const apiPut = async (id) => {
    try {
        const response = await API.put(`/product/${id}`, {
        name: '*** NEW PRODUCT ***',
        quantity: 8,
        price: '8.88',
    });
        console.log(response.data);    
    } catch (error) {
        console.log(error.message);
    }
}

const apiDelete = async (id) => {
    try {
      const response = await API.delete(`/product/${id}`);
        console.log(response.data);    
    } catch (error) {
      console.log(error.message);
    }
  }

// Test the function
// apiGet();
// apiGetId(15);
// apiPost();
// apiPut(10);
apiDelete(10);
