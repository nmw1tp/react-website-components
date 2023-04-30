import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-light py-3">
            <Container >
                <Row>
                    <Col md={8}>
                            <p >CopyRight  |   Все права защищены 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
