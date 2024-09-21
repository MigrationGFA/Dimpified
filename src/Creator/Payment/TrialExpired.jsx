import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const TrialExpired = () => {
    return (
        <Container className="text-center my-5">
            <Row>
                <Col>
                    <img 
                        src="https://via.placeholder.com/150"  
                        alt="Rocket"
                        className="img-fluid mb-4"
                    />
                </Col>
            </Row>
            <h1>Your 30-day Free Trial has expired.</h1>
            <h5>Upgrade now for endless possibilities!</h5>
            <p>
                Your trial period has come to an end, marking the beginning of an exciting journey into the world of entrepreneurship. 
                Upgrade today and share your knowledge with the world.
            </p>
            <Button variant="primary" size="lg">Upgrade now!</Button>
        </Container>
    );
};

export default TrialExpired;