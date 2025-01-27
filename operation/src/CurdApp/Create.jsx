import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [inputData, setInputData] = useState({
    name: '',
    email: ''
  });

  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3030/users', inputData);
      alert('Data Posted Successfully!');
      navigate('/'); 
    } catch (error) {
      console.error('Error posting data:', error);
      alert('Failed to post data. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-info text-white text-center rounded-top">
              <h3>Create User</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
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
                    placeholder="Enter user name"
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
                    placeholder="Enter user email"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-info w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;

