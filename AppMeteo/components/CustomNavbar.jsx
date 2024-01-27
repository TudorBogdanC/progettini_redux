import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = ({ location, setLocation, handleSearch }) => {
    return (
        <>
            <Navbar sticky="top" expand="lg" style={{ backgroundColor: "#4D5061" }}>
                <Container fluid>
                    <Navbar.Brand style={{ color: "#48A9A6" }} href="#">Meteo</Navbar.Brand>
                    <Form inline>
                        <Row className="d-flex align-items-center g-2">
                            <Col xs="9">
                                <Form.Control
                                    value={location}
                                    onChange={(e) => { setLocation(e.target.value) }}
                                    placeholder='Inserisci la tua città'
                                    type="text"
                                />
                            </Col>
                            <Col xs="3">
                                <Button variant="dark" size="sm" onClick={handleSearch}>Cerca</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar;