// frontend/src/components/Login.js

import React from 'react';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Login form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
