import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    name: '',
    email: ''
  });

  const navigate = useNavigate(); 
  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`) 
      .then((res) => setInputData(res.data))
      .catch((err) => console.error('Error fetching user data:', err));
  }, [id]); 
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3030/users/${id}`, inputData); 
      alert('Data Updated Successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update data. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 offset-md-3">
          <div className="border bg-secondary text-white p-4 rounded">
            <h2 className="text-center mb-4">Update User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label">
                  ID:
                </label>
                <input
                  type="number"
                  name="id"
                  className="form-control"
                  value={inputData.id}
                  disabled 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={inputData.name}
                  onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={inputData.email}
                  onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-info w-100">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
