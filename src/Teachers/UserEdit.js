import UserDelete from "./UserDelete";
import {useState} from "react"

function UserEdit() {
    const [deleteAll , setDeleteAll] = useState(true);

   const deleteUser=()=>{
    setDeleteAll();
   }
    return (
        <>

            <h1 className="display-5">Teacher Edit User</h1>
            <p>Click the delete button to delete all the Users</p><button onClick={deleteUser} className="btn btn-primary">Delete</button>

            {deleteAll ? <UserDelete />:<></>}

        </>
    );
}

export default UserEdit;