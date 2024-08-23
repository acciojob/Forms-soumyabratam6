// src/components/Card.js
import React from 'react';
import '../styles/Card.css';// Assuming you want to add some custom styling

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
