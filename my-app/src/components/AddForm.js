import { useState } from 'react';

function AddForm({ handlerAddItem }) {
  const [item, setItem] = useState();
   
  const handlerID = (e) => {
    const form = {...item, name: e.target.value};
    setItem(form);
  }
  const handlerEnrol = (e) => {
    const form = {...item, quantity: e.target.value};
    setItem(form);
  }
  const handlerYear = (e) => {
    const form = {...item, price: e.target.value};
    setItem(form);
  }
  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerAddItem(item);
  }
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type='text' name='_id' placeholder='id' onChange={handlerID} />
        <input type='text' name='enrolment' placeholder='Enrolment' onChange={handlerEnrol} />
        <input type='text' name='year' placeholder='Year' onChange={handlerYear} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddForm