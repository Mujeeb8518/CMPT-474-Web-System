// frontend/src/components/Register.js

import React from 'react';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Register form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
