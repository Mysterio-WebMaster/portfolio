import React from 'react'
import './style.css'
import {Container, Row, Col} from 'react-bootstrap'

function contact() {
    return (
        <div className='contact'>
            <Container>
                <div className="header">
                    <p className="headertext">Get in Touch</p>
                </div>
                <hr />
                <Row>
                    <Col md={4}>
                        <h4>Location:</h4>
                        <p>Pimple Saudagar</p>
                    </Col>
                    <Col md={4}>
                        <h4>Phone</h4>
                        <p>+91-8657607325</p>
                    </Col>
                    <Col md={4}>
                        <h4>Email</h4>
                        <p><a href="mailto:chinmaylimje3500@gmail.com">chinmaylimje3500@gmail.com</a></p>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default contact
