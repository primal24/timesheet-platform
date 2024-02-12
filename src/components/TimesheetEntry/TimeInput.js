import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const TimeInput = ({ name, label, value, onChange }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type="time" 
        name={name} 
        value={value} 
        onChange={onChange} 
        required // Consider adding validation
      />
    </Form.Group>
  );
};

export default TimeInput;
