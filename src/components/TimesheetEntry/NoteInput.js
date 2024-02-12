import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const NoteInput = ({ name, label, value, onChange }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        as="textarea" 
        rows={3} 
        name={name} 
        value={value} 
        onChange={onChange} 
      />
    </Form.Group>
  );
};

export default NoteInput;
