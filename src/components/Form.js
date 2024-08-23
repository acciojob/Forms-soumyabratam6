// src/components/Form.js
import React from 'react';
import Card from '../components/Card'

const Form = () => {
  return (
    <Card>
      <h2>Form Section 1: Layout Only</h2>
      <form id="info-form">
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" name="password_confirmation" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
