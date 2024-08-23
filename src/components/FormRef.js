// src/components/FormRef.js
import React, { useRef } from 'react';
import Card from '../components/Card';

const FormRef = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    };
    console.log('Form data using useRef:', formData);
  };

  return (
    <Card>
      <h2>Form Section 2: useRef Handling</h2>
      <form id="form-ref-link" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" ref={fullNameRef} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />
        <br />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" ref={passwordConfirmationRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
