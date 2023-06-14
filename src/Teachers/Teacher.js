import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { teacherList } from './TeacherList'

function Teacher () {
  const history = useNavigate()

  const handleEdit = (id, name, department, age) => {
    localStorage.setItem('name', name)
    localStorage.setItem('department', department)
    localStorage.setItem('age', age)
    localStorage.setItem('id', id)
  }

  const handleDelete = id => {
    var index = teacherList
      .map(function (e) {
        return e.id
      })
      .indexOf(id)
    teacherList.splice(index, 1)
    history('/Teacher')
  }

  return (
    <>
      <div className='d-sm-flex align-items-center justify-content-between mb-4'>
        <h1 className='h3 mb-0 text-gray-800'>Teacher</h1>
        <Link
          to={'/AddTeacher'}
          type='submit'
          className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
          style={{ margin: '6px', padding: '8px 20px', outline: 'none' }}
        >
          <i className='fas fa-download fa-sm text-white-50'></i> Create User
        </Link>
      </div>

      <div className='table-responsive'>
        <table class='table'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Department</th>
              <th scope='col'>Age</th>
              <th scope='col'>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {teacherList && teacherList.length > 0
              ? teacherList.map(li => (
                  <tr>
                    <td scope='row'>{li.name}</td>
                    <td>{li.department}</td>
                    <td>{li.age}</td>
                    <td>
                      <Link
                        to={'/EditTeacher'}
                        onClick={() =>
                          handleEdit(li.id, li.name, li.department, li.age)
                        }
                        style={{
                          textDecoration: 'none',
                          padding: '5px 10px',
                          border: 'none',
                          outline: 'none',
                          color: 'white',
                          backgroundColor: 'green',
                          borderRadius: '6px'
                        }}
                      >
                        Edit
                      </Link>{' '}
                      &nbsp;
                      <button
                        onClick={() => handleDelete(li.id)}
                        style={{
                          padding: '5px 10px',
                          border: 'none',
                          outline: 'none',
                          color: 'white',
                          backgroundColor: 'red',
                          borderRadius: '6px'
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : 'No Data Available'}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Teacher
