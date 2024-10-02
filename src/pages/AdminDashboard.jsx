// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('You must be logged in to view this page');
//       window.location.href = '/admin/login';  // Redirect to login if no token
//       return;
//     }

//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get('https://collegeserverone.onrender.com/admin/students', {
//           headers: {
//             Authorization: `Bearer ${token}`,  // Include token in request headers
//           },
//         });
//         setStudents(response.data);
//       } catch (error) {
//         // Improved error handling for network errors
//         if (error.response) {
//           // Server responded with a status code other than 2xx
//           setError(`Error: ${error.response.status} - ${error.response.data.message || 'Server Error'}`);
//         } else if (error.request) {
//           // Request was made but no response received
//           setError('No response from server. Please check your network or server.');
//         } else {
//           // Error in setting up the request
//           setError('Request setup error: ' + error.message);
//         }
//       }
//     };

//     fetchStudents();
//   }, []);

//   return (
//     <div>
//       <h2>Student List</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {students.length === 0 && !error ? (
//         <p>No students available</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone Number</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student._id}>
//                 <td>{student.name}</td>
//                 <td>{student.email}</td>
//                 <td>{student.phoneno}</td>
//                 <td>{student.location}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Table, Alert, Card, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    // if (!token) {
    //   alert('You must be logged in to view this page');
    //   window.location.href = '/admin/login'; // Redirect to login if no token
    //   return;
    // }
    if(!token){
      navigate('/login')
    }

    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://collegeserverone.onrender.com/admin/students', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
          },
        });
        setStudents(response.data);
      } catch (error) {
        if (error.response) {
          setError(`Error: ${error.response.status} - ${error.response.data.message || 'Server Error'}`);
        } else if (error.request) {
          setError('No response from server. Please check your network or server.');
        } else {
          setError('Request setup error: ' + error.message);
        }
      }
    };

    fetchStudents();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <Container fluid className="my-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          {/* Logout Button */}
          <Button variant="danger" onClick={handleLogout} className="mb-3">
            Logout
          </Button>

          {/* Card with Table */}
          <Card className="shadow-lg">
            <Card.Header className="bg-primary text-white">
              <h3>Student List</h3>
            </Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              {students.length === 0 && !error ? (
                <Alert variant="info">No students available.</Alert>
              ) : (
                <Table striped bordered hover responsive variant="light">
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
                        <td>{student.phoneno}</td>
                        <td>{student.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
