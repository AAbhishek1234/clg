import React, { useState } from 'react';
import { Container, Form, Button, Alert, Table } from 'react-bootstrap';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const CONSTANT_PASSWORD = "college"; // Set your constant password here

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // Check if the password entered is correct
    if (password !== CONSTANT_PASSWORD) {
      setError('Incorrect password. Please try again.');
      return;
    }

    // If the password is correct, fetch student data
    try {
      const response = await fetch('https://collegeserverone.onrender.com/student/data');
      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }
      const data = await response.json();
      setStudents(data);
      setFilteredStudents(data);
      setIsAuthenticated(true); // User is authenticated now
      setMessage('Student data retrieved successfully!');
    } catch (error) {
      setError('Failed to retrieve student data. Please try again.');
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(term) || student.email.toLowerCase().includes(term)
    );
    setFilteredStudents(filtered);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Access</h2>

      {/* Render password input form if not authenticated */}
      {!isAuthenticated ? (
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
      ) : (
        <div>
          {message && <Alert variant="success" className="mt-3">{message}</Alert>}
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

          {students.length > 0 && (
            <div className="mt-4">
              <h3>Student Details</h3>
              <Form.Control
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={handleSearch}
                className="mb-3"
              />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student._id}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phoneno}</td>
                      <td>{student.location}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default AdminPage;
