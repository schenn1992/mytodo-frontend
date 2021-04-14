import React, { Fragment, useState, useEffect}from 'react'
  
export default function ListTodos() {
  const [todos, setTodos] = useState([]) 

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonResponse = await response.json();
      setTodos(jsonResponse);
    } catch(err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Desription</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

