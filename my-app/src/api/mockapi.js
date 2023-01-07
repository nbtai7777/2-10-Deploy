import axios from 'axios';
 
/*
  Base URL of the backend server will be provided/updated during class
*/
const BASE_URL = 'https://data.gov.sg/api/action/datastore_search?resource_id=4ad866a7-c43a-4645-87fd-fc961c9de78a&limit=9';
const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI
