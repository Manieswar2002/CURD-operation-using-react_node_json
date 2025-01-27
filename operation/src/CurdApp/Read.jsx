import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [data, setData] = useState({}); 

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`) 
      .then((res) => setData(res.data))
      .catch((err) => console.error('Error fetching user data:', err));
  }, [id]);

  return (
    <div className="container mt-5">
      <h2>User Details</h2>
      <div className="card p-4 shadow-sm">
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <Link to="/" className="btn btn-primary mt-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
