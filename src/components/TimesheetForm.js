import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { format, addHours, isBefore } from 'date-fns'; 
import TimeInput from '../TimesheetEntry/TimeInput';
import BreakInput from '../TimesheetEntry/BreakInput';
import NoteInput from '../TimesheetEntry/NoteInput'; 

const TimesheetForm = () => {

  const [timeEntry, setTimeEntry] = useState({
    date: new Date().toISOString().slice(0, 10), // Set initial date to today
    start: '',
    end: '',
    break: '',
    description: ''  
  });

  const handleChange = (event) => {
    setTimeEntry({ ...timeEntry, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, API calls, and data validation here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control 
                type="date" 
                name="date" 
                value={timeEntry.date} 
                onChange={handleChange}
             />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <TimeInput 
              name="start" 
              label="Start Time" 
              value={timeEntry.start} 
              onChange={handleChange} 
          />
        </Col>
        <Col md={4}> 
          <TimeInput 
              name="end" 
              label="End Time" 
              value={timeEntry.end} 
              onChange={handleChange} 
          />
        </Col>
        <Col md={4}>
          <BreakInput 
              name="break" 
              label="Break (minutes)" 
              value={timeEntry.break} 
              onChange={handleChange} 
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <NoteInput 
              name="description" 
              label="Description" 
              value={timeEntry.description} 
              onChange={handleChange} 
          />
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit Timesheet
      </Button>
    </Form>
  );
};

export default TimesheetForm;
