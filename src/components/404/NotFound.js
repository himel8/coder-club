import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const image = 'https://media.istockphoto.com/vectors/concept-404-error-page-flat-cartoon-style-vector-illustration-vector-id1149316411?k=20&m=1149316411&s=612x612&w=0&h=wzSCBQVVh76LWzeEQP01DDEhpm983Y6_tsqlZ46goZ0='
    return (
        <div>
           <img className='img-fluid' src={image} alt="" />
           <div className='mb-5'>
               <Link to='/home'>
                <Button className='custom-btn'>RETURN HOME</Button>
               </Link> 
               <Link to='/contact'>
               <Button className='ms-3 custom-btn'>CONTACT US</Button>
               </Link>
               
           </div>
            
        </div>
    );
};

export default NotFound;