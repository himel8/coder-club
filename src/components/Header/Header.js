import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navStyle ={color:'tomato', fontWeight: '600'}
    return (
        <div className='nav-items'>
           <Container>
               <Row className='align-items-center'>
                   <Col sm={12} xs={12} md={6}>
                       {/* header title  */}
                   <h2 className='text-light'>Coders Club</h2>
                   </Col>
                   <Col sm={12} xs={12} md={6}>
                       {/* header navigation */}
                    <NavLink to ='/home' activeStyle={navStyle}>Home</NavLink> 
                    <NavLink to ='/courses' activeStyle={navStyle}>Courses</NavLink> 
                    <NavLink to ='/about' activeStyle={navStyle}>About</NavLink> 
                    <NavLink to ='/contact' activeStyle={navStyle}>Contact</NavLink> 
                   
                   </Col>
               </Row>
           </Container>
             
        </div>
    );
};

export default Header;