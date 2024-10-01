import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    const correctPassword = 'college';
  
    if (password === correctPassword) {
      localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag
      history.push('/admin-dashboard');
    } else {
      setError('Incorrect password, please try again.');
    }
  };
  return (
    <div>
      <h1>Admin Login</h1>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter Password" 
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
