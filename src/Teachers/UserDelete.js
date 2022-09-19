function UserDelete() {
    return (
        <>
            <div className="container mt-5" style={{ display: "flex" }}>
                <div className="card me-5" style={{ width: "15rem" }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Ramya S</h5>
                        <p className="card-text">Good teacher </p>
                        <a href="#" className="btn btn-primary">More Details</a>
                    </div>
                </div>

                <div className="card" style={{ width: "15rem" }}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Gopal M</h5>
                        <p className="card-text">Good teacher </p>
                        <a href="#" className="btn btn-primary">More Details</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserDelete;