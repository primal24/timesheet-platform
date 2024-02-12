import React from 'react';
import { Table } from 'react-bootstrap';

const TimesheetTable = ({ timesheetData }) => { // Assuming you pass data as a prop

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Break</th>
          <th>Description</th>
          {/* Add more columns if needed */}
        </tr>
      </thead>
      <tbody>
        {timesheetData.map((entry) => (
          <tr key={entry.id}> {/* Make sure your data has a unique 'id' */}
            <td>{entry.date}</td>
            <td>{entry.start}</td>
            {/* Add more table cells (<td>) for each data field */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TimesheetTable;
