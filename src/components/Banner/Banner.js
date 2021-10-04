import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='custom-bg'>
            <div className='container'>
            <div className ='custom-text-size text-start'>
                <h1>More than 5000+ courses<br/> for develop your skill</h1>
                <Link to='/courses'>
                <Button className ='mt-3' variant="warning">Start Trail now</Button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Banner;