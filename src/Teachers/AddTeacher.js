import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { teacherList } from './TeacherList'
import { v4 as uuid } from 'uuid'

function AddTeacher () {
  const history = useNavigate()
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [age, setAge] = useState('')
  const [id, setId] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const ids = uuid()
    let uniqueId = ids.slice(0, 8)

    teacherList.push({
      id: uniqueId,
      name: name,
      department: department,
      age: age
    })
    setName('')
    setDepartment('')
    setAge('')
    history('/Teacher')
  }
  return (
    <>
      <h3>Create Teacher</h3>
      <form className='mb-3' onSubmit={handleSubmit}>
        <input
          onChange={e => setName(e.target.value)}
          name='name'
          type='text'
          placeholder='Name'
          style={{ margin: '3px 10px', padding: '4px 10px', outline: 'none' }}
        />
        <input
          onChange={e => setDepartment(e.target.value)}
          name='department'
          type='text'
          placeholder='Department'
          style={{ margin: '3px 10px', padding: '4px 10px', outline: 'none' }}
        />
        <input
          onChange={e => setAge(e.target.value)}
          name='age'
          type='number'
          placeholder='Age'
          style={{ margin: '3px 10px', padding: '4px 10px', outline: 'none' }}
        />
        <button
          type='submit'
          className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
          style={{ margin: '6px', padding: '8px 20px', outline: 'none' }}
        >
          <i className='fas fa-download fa-sm text-white-50'></i> Create User
        </button>
      </form>
    </>
  )
}

export default AddTeacher
