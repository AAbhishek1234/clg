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
      return;
    }

    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://collegeserverone.onrender.com/admin/students', {
          headers: {
            Authorization: `Bearer ${token}`,  // Include token in request headers
          },
        });
        setStudents(response.data);
      } catch (error) {
        // Improved error handling for network errors
        if (error.response) {
          // Server responded with a status code other than 2xx
          setError(`Error: ${error.response.status} - ${error.response.data.message || 'Server Error'}`);
        } else if (error.request) {
          // Request was made but no response received
          setError('No response from server. Please check your network or server.');
        } else {
          // Error in setting up the request
          setError('Request setup error: ' + error.message);
        }
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {students.length === 0 && !error ? (
        <p>No students available</p>
      ) : (
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
      )}
    </div>
  );
};

export default AdminDashboard;
