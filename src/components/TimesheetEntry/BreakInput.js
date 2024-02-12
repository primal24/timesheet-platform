import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const BreakInput = ({ name, label, value, onChange }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type="number" // Or "time" if you want a time-picker interface
        name={name} 
        value={value} 
        onChange={onChange} 
        min="0"
      />
    </Form.Group>
  );
};

export default BreakInput;
