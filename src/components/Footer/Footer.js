import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-items'>
            <Container className='footer-items'>
            <Row className='justify-content-between align-items-center'>
                <Col sm={12} xs={12} md={6}>
                <p>Copyright @ 2021 reserved by Coder Club</p>
                </Col>
                <Col sm={12} xs={12} md={6}>
                <p className='custom-footer-icon'>
                    <Link to ='/contact'>
                    <i className="fab custom-icon fa-facebook"/>
                    </Link>
                    <Link to ='/contact'>
                        <i className="ms-3 custom-icon fab fa-instagram"/>
                    </Link>
                    
                </p>
                </Col>
            
            
            </Row>
            </Container>
        </div>
        
    );
};

export default Footer;