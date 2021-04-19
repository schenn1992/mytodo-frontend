import React, { Fragment, useState } from 'react';

export default function EditTodo({todo}) {
  const [ description, setDescription ] = useState(todo.description)
  
  return (
    <Fragment>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${todo.id}`}>
        Edit
      </button>
      <div className="modal show" id={`id${todo.id}`} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control" value={ description } onChange={(event) => setDescription(event.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Edit</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

