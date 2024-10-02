import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to view this page');
      window.location.href = '/admin/login';  // Redirect to login if no token
    }

    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/students', {
          headers: {
            Authorization: `Bearer ${token}`,  // Include token in request headers
          },
        });
        setStudents(response.data);
      } catch (error) {
        setError('Failed to fetch students');
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phoneNo}</td>
              <td>{student.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
