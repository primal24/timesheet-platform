import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './css/styles.css'; // If you have additional custom styles
import { Row, Col, Button, Form, Navbar, Nav, Sidebar } from 'react-bootstrap';
import './css/styles.css'; // If you have additional custom styles
import { Container } from 'react-bootstrap';

function EmployeeDashboard() {
    return;
    function EmployeeDashboard() {
        return (
            <Container fluid>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Your Company</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <Nav.Link href="#settings">Settings</Nav.Link>
                    </Nav>
                </Navbar>
                <Row>
                    <Col sm={3}>
                        <Sidebar>
                            {/* Sidebar content */}
                        </Sidebar>
                    </Col>
                    <Col sm={9}>
                        {/* Main content */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); // Adjust ID if needed 
root.render(<EmployeeDashboard />);
