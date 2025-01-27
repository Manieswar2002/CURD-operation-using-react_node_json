import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete this record?");
    if (confirm) {
      axios
        .delete(`http://localhost:3030/users/${id}`)
        .then((res) => {
          alert("Record has been deleted.");
          setData(data.filter((item) => item.id !== id));
        })
        .catch((err) => console.error("Error deleting the record:", err));
    }
  };

  return (
    <div
      className="container-fluid bg-dark text-white min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,code')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container bg-dark bg-opacity-75 p-4 rounded">
        <h2 className="text-center mb-4">CRUD App with JSON Server</h2>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Users List</h4>
          <Link to="/create" className="btn btn-success">
            Create +
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-dark table-hover text-center">
            <thead className="table-light text-dark">
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      <Link
                        className="btn btn-sm btn-success me-2"
                        to={`/update/${data.id}`}
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </button>
                      <Link
                        className="btn btn-sm btn-primary"
                        to={`/read/${data.id}`}
                      >
                        Read
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No users available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
