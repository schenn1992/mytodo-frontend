import React, { Fragment, useState } from 'react';
// import axios from "axios"; 


function InputTodo() {
  const [ description, setDescription ] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();
    
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(body)
      })
      console.log(response)
    } catch (err) {
      console.error(err.message);
    }
    
    
    

    
    // axios.post('http://localhost:5000/todos', description)
    // .then(function (res) {
    //   console.log(res);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
  
  return (
    <Fragment>
      <h1 className="text-center mt-5">
        Todo List
      </h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input 
          type="text" 
          className="form-control" 
          value={description} 
          onChange={(event) => setDescription(event.target.value)}>
        </input>
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
    
  )
}

export default InputTodo
