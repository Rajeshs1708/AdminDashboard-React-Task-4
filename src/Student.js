import { Link } from "react-router-dom";



function Student() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Student</h1>
                <Link to="/Students/UserCreate" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>

            <div>
                <h3 className="display-6">All the students Details are below only !
                </h3>
                <h3 className="display-6">Click the Create User to create a new user.
                </h3>
            </div>

        </>
    )
}

export default Student;