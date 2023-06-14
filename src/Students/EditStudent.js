import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { studentList } from './StudentList'

function EditStudent () {
  const history = useNavigate()
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [age, setAge] = useState('')
  const [id, setId] = useState('')

  var index = studentList
    .map(function (e) {
      return e.id
    })
    .indexOf(id)

  const handleSubmit = e => {
    e.preventDefault()
    let a = studentList[index]
    a.name = name
    a.department = department
    a.age = age
    history('/Student')
  }

  useEffect(() => {
    setName(localStorage.getItem('name'))
    setDepartment(localStorage.getItem('department'))
    setAge(localStorage.getItem('age'))
    setId(localStorage.getItem('id'))
  }, [])
  return (
    <>
      <h3>Edit Student</h3>
      <form className='mb-3'>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          name='name'
          type='text'
          placeholder='Name'
          style={{ margin: '3px 10px', padding: '4px 10px', outline: 'none' }}
        />
        <input
          value={department}
          onChange={e => setDepartment(e.target.value)}
          name='department'
          type='text'
          placeholder='Department'
          style={{ margin: '3px 10px', padding: '4px 10px', outline: 'none' }}
        />
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          name='age'
          type='number'
          placeholder='Age'
          style={{ margin: '3px 10px', padding: '4px 10px', outline: 'none' }}
        />
        <button
          onClick={e => {
            handleSubmit(e)
          }}
          type='submit'
          className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'
          style={{ margin: '6px', padding: '8px 20px', outline: 'none' }}
        >
          Update User
        </button>
      </form>
    </>
  )
}

export default EditStudent
