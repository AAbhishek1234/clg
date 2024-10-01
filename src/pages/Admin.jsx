import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const CONSTANT_PASSWORD = "college"; // Define your constant password here

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // Check if the entered password is correct
    if (password !== CONSTANT_PASSWORD) {
      setError('Incorrect password. Please try again.');
      return;
    }

    try {
      const response = await fetch('https://collegeserverone.onrender.com/student/data'); // Update with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }
      const data = await response.json();
      setStudents(data);
      setMessage('Student data retrieved successfully!');
    } catch (error) {
      setError('Failed to retrieve student data. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Access</h2>
      <Form onSubmit={handleSubmit} className="p-4">
        <Form.Group controlId="formPassword">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter constant password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>

      {message && <Alert variant="success" className="mt-3">{message}</Alert>}
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

      {students.length > 0 && (
        <div className="mt-4">
          <h3>Student Details</h3>
          <ul>
            {students.map((student) => (
              <li key={student._id}>
                {student.name} - {student.email} - {student.phoneno} - {student.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default AdminPage;
