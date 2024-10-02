import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission (GET request)

    try {
      const response = await axios.post('http://localhost:5000/admin/login', {
        email,
        password,
      });

      // Save the token and set success/error message
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);  // Store token in localStorage for persistence
      setError('');
      alert('Login successful!');

      // Redirect to the dashboard or student details page
      window.location.href = '/admin/dashboard';  // Example of redirecting to the admin dashboard
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
