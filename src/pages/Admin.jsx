import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);  // Holds the fetched student data
  const [error, setError] = useState('');        // Holds any error message
  const [loading, setLoading] = useState(true);  // Track if data is still loading

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    
    // If no token, redirect to the login page
    if (!token) {
      alert('You must be logged in to view this page');
      window.location.href = '/admin/login';  // Redirect to login
      return;  // Stop further execution
    }

    // Function to fetch student data
    const fetchStudents = async () => {
      try {
        // Set loading to true before making the request
        setLoading(true);

        // Make API request to fetch students, including the token in headers
        const response = await axios.get('https://collegeserverone.onrender.com/admin/students', {
          headers: {
            Authorization: `Bearer ${token}`,  // Pass token as Authorization header
          },
        });

        // If successful, update students state with the fetched data
        setStudents(response.data);
        setLoading(false);  // Data fetched, set loading to false
      } catch (error) {
        console.error('Error fetching students:', error.response ? error.response.data : error.message);
        setError('Failed to fetch students');  // Display error to user
        setLoading(false);  // Stop loading since the request failed
      }
    };

    // Fetch students when the component mounts
    fetchStudents();
  }, []);

  // Display a loading indicator while the data is being fetched
  if (loading) {
    return <div>Loading students...</div>;
  }

  return (
    <div>
      <h2>Student List</h2>

      {/* Show error message if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* If there are no students and no error, display a message */}
      {!error && students.length === 0 && <p>No students found</p>}

      {/* Display students in a table if data is available */}
      {students.length > 0 && (
        <table border="1" cellPadding="10" cellSpacing="0">
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
