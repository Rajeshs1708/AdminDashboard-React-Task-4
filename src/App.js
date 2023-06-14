import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Teacher from './Teachers/Teacher'
import Student from './Students/Student'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import AddTeacher from './Teachers/AddTeacher'
import EditTeacher from './Teachers/EditTeacher'
import AddStudent from './Students/AddStudent'
import EditStudent from './Students/EditStudent'

function App () {
  return (
    <BrowserRouter>
      <div id='wrapper'>
        <Sidebar />

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Topbar />

            <div className='container-fluid'>
              <Routes>
                <Route path='/' element={<Dashboard />} exact={true} />
                <Route path='/Teacher' element={<Teacher />} exact={true} />
                <Route
                  path='/AddTeacher'
                  element={<AddTeacher />}
                  exact={true}
                />
                <Route
                  path='/EditTeacher'
                  element={<EditTeacher />}
                  exact={true}
                />
                <Route path='/Student' element={<Student />} exact={true} />
                <Route
                  path='/AddStudent'
                  element={<AddStudent />}
                  exact={true}
                />
                <Route
                  path='/EditStudent'
                  element={<EditStudent />}
                  exact={true}
                />
              </Routes>
            </div>
          </div>

          <footer className='sticky-footer bg-white'>
            <div className='container my-auto'>
              <div className='copyright text-center my-auto'>
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
