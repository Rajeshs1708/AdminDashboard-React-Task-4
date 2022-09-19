import { Link } from 'react-router-dom';



function UserCreate() {
  return (
    <>
      <div className="container-fluid">

        <h1 className="h3 mb-2 text-gray-800">Teacher Details</h1>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Click the 'Edit button' to edit the user</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="dataTable_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable" /></label></div></div></div><div className="row"><div className="col-sm-12"><table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info" style={{ width: "100%" }}>
                <thead>
                  <tr role="row"><th className="sorting sorting_asc" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label={{ Name: "activate to sort column descending" }} style={{ width: '87px' }}>Staff ID</th><th className="sorting" i="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label={{ Position: "activate to sort column ascending" }} style={{ width: '123px' }}>Name</th><th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label={{ Office: "activate to sort column ascending" }} style={{ width: '65px' }}>Campus</th><th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label={{ Age: "activate to sort column ascending" }} style={{ width: '31px' }}>Department</th><th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label={{ Startdate: "activate to sort column ascending" }} style={{ width: '72px' }}>Age</th><th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1" aria-label={{ Salary: "activate to sort column ascending" }} style={{ width: '67px' }}>Edit</th></tr>
                </thead>

                <tbody>

                  <tr className="odd">
                    <td className="sorting_1">500510</td>
                    <td>Ramya S</td>
                    <td>Main Campus</td>
                    <td>Mech</td>
                    <td>35</td>
                    <td><Link to="/Teachers/UserEdit"><button className="btn-primary">Edit</button></Link></td>
                  </tr><tr className="even">
                    <td className="sorting_1">500511</td>
                    <td>Gopal M</td>
                    <td>Library Building</td>
                    <td>Civil</td>
                    <td>40</td>
                    <td><Link to="/Teachers/UserEdit"><button className="btn-primary">Edit</button></Link></td>
                  </tr></tbody>
              </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabIndex="0" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" tabIndex="0" className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" tabIndex="0" className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" tabIndex="0" className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" tabIndex="0" className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="6" tabIndex="0" className="page-link">6</a></li><li className="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" tabIndex="0" className="page-link">Next</a></li></ul></div></div></div></div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default UserCreate;