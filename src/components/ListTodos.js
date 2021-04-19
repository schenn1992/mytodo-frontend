import React, { Fragment, useState, useEffect } from 'react';
import EditTodo from "./EditTodo";
  
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

  //delete a todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE'
      });
      const filteredTodos = todos.filter((todo) => todo.id !== id); 
      setTodos(filteredTodos);
    } catch(err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Desription</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo}/></td>
              <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

