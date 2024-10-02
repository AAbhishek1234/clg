// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [token, setToken] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Change axios.get to axios.post to send a POST request
//       const response = await axios.post('https://collegeserverone.onrender.com/admin/login', {
//         email,
//         password,
//       });

//       setToken(response.data.token);
//       localStorage.setItem('token', response.data.token);  // Store token in localStorage for persistence
//       setError('');
//       alert('Login successful!');
//       // Redirect to the dashboard or student details page
//       window.location.href = '/admin/dashboard';  // Example of redirecting to the admin dashboard
//     } catch (error) {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;



import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://collegeserverone.onrender.com/admin/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);  // Store token in localStorage for persistence
      setError('');
      //alert('Login successful!');
      window.location.href = '/admin/dashboard';  // Redirect to the admin dashboard
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4} className="p-4 border rounded shadow-lg bg-light">
          <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Admin Login</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
