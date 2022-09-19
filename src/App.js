import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Teacher from './Teacher';
import Student from './Student';
import UserCreate from './Teachers/UserCreate';
import UserEdit from './Teachers/UserEdit';
import StudentUserCreate from './Students/StudentUserCreate';
import StudentUserEdit from './Students/StudentUserEdit';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Dashboard from './Dashboard';




function App() {
  return (
    <BrowserRouter>

      <div id='wrapper'>
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            <div className="container-fluid">
              <Routes>

                <Route path="/" element={<Dashboard />} exact={true} />
                <Route path="/Teacher" element={<Teacher />} exact={true} />
                <Route path="/Student" element={<Student />} exact={true} />

                <Route path="/Students/UserCreate" element={<StudentUserCreate />} exact={true} />
                <Route path="/Students/UserEdit" element={<StudentUserEdit />} exact={true} />

                <Route path="/Teachers/UserCreate" element={<UserCreate />} exact={true} />
                <Route path="/Teachers/UserEdit" element={<UserEdit />} exact={true} />

              </Routes>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
