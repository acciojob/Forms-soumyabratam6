// src/components/FormState.js
import React, { useState } from 'react';
import Card from '../components/Card';

const FormState = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data using useState:', formData);
  };

  return (
    <Card>
      <h2>Form Section 3: useState Handling</h2>
      <form id="info-form " onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" name="fullName" value={formData.fullName} onChange={handleChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
