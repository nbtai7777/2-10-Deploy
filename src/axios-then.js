// Axois is a promise-based HTTP Client for node.js and the browser.
// HTTP mehtods: GET, POST, PUT, DELETE
// We use axios to connect and retrieve information from a backend server /API
// Creat the URL string where we want to connect to

const BASE_URL = 'https://62ba9b04573ca8f8328762ca.mockapi.io/';

const axios = require('axios');
const API = axios.create ({baseURL : BASE_URL});

//CRUD operations and HTTP methods
// Retrieve or Read Operation -> GET Method'
// Get all the entries in the database

    // Product is the combination of the BASE_UR: + /Product
    // ex. http://sony.com/products => sony.com is my BASE_URL, /Product is the endpoint that I want to access.
    // .then processes the promise after retrieve the data from product and the response in this case
    // is an object and we could get the information for the different keys of the object
function apiGet() {
        API.get('/product')
          .then((response) => {
            console.log('GET status:', response.status);
            console.log('GET data:', response.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }

// GET can also be sued to get single items in your database
function apiGetId(id) {
    API.get(`/product/${id}`)
    .then((response) => {
      console.log('GET status:', response.status);
      console.log('GET data:', response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// Create Operation -> used to create items in the database, use the POST method
function apiPost() {
    API.post(`/product`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// Update Operation -> updating entries in the database, need the id of the item to 
// update as well as the information that needs to be updated - > PUT method
// API.put(endpoint, information to update)

function apiPut(id) {
    API.put(`/product/${id}`, {
        name: '*** NEW PRODUCT ***',
        quantity: 8,
        price: '8.88',
      })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

// Delete operation removes entries from the database, we need to provide the id of 
// the item to be delete -> DELETE method

function apiDelete(id) {
    API.delete(`/product/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

// Test our API call ny doing node axios-then.js
// apiGet();
// apiGetId(15);
// apiPost();
// apiPut(15);
apiDelete(29);
