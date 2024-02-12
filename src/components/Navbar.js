import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TimesheetNavbar = () => {
    return (
        <Navbar bg="light" expand="lg"> {/* Customize colors as needed */}
            <Container>
                <Navbar.Brand as={Link} to="/">Timesheet App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto"> {/* Positions links to the right */}
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TimesheetNavbar;
