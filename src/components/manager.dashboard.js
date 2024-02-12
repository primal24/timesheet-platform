import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import './css/styles.css'; // If you have additional custom styles

function ManagerDashboard() {
    return (
        <Container>
            <Row>
                <Col><h1>Manager Dashboard</h1></Col>
            </Row>
            <Row>
                <Col md={8}>
                    <h2>Timesheet Approvals</h2>
                    <Table striped bordered hover>
                        {/* Populate with timesheet data */}
                    </Table>
                </Col>
                <Col md={4}>
                    <h2>Employees</h2>
                    {/* Populate with employee list */}
                    <div id="chatbox">
                        {/* Chat component  */}
                    </div>  
                </Col>
            </Row>
        </Container>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ManagerDashboard />);
