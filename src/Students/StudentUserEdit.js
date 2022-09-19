import StudentUserDelete from "./StudentUserDelete";
import { useState } from "react"

function StudentUserEdit() {
    const [deleteAll, setDeleteAll] = useState(true);

    const deleteUser = () => {
        setDeleteAll();
    }
    return (
        <>
            <h1 className="display-5">Student Edit User</h1>
            <p>Click the delete button to delete all the Users</p><button onClick={deleteUser} className="btn btn-primary">Delete</button>

            {deleteAll ? <StudentUserDelete /> : <></>}

        </>
    );
}

export default StudentUserEdit;