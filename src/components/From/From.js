import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './From.css'

const From = () => {
    return (
        <div className = 'signup-box'>
            <div className = 'box-text'>
                <h3>Get 50 courses free!</h3>
                <p>sign up now</p>
            </div>
            <div>
            <Form className = 'input-box'>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Your email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Your phone" />
                </Form.Group>
                <Button className='custom-btn' variant="primary" type="submit">
                    Get It Now
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default From;