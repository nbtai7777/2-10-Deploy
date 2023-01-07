import { useState, useEffect } from 'react';
import Table from './components/Table';
import AddForm from './components/AddForm';
 
import './App.css';
import mockAPI from './api/mockapi';

function App() {
  const [products, setProducts] = useState([]);

  const apiGet = async () => {
    try {
      const response = await mockAPI.get(``);
      console.log(response.data.result.records);
      setProducts(response.data.result.records);    
    } catch (error) {
      console.log(error.message);
    }
  }
  const apiPost = async (newProduct) => {
    try {
      const response = await mockAPI.post(``, newProduct)
      console.log(response.data);
      apiGet();
    } catch(error) {
      console.log(error.message);
    };
  }
  
  useEffect(() => {
    apiGet();
  }, [])

  return (
    <div className="App">
      <h1>Enrolment</h1>
      <button onClick={apiGet}>MOE Kindergardens</button>
      <Table list={products} />
      {/* <AddForm handlerAddItem={apiPost} /> */}
    </div>
  );
}

export default App;
