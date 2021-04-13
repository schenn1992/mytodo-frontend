import React, { Fragment }from 'react'


export default function ListTodos() {
  return (
    <Fragment>
      <table class="table mt-5 tet-center">
        <thead>
          <tr>
            <th>Desription</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  )
}

