import React from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'
// data structuring 
const Course = (props) => {
    const {name, img, oldPrice, presenPrice, rating, totalRating} = props.course
    return (
        
            <Col sm={12} xs={12} md={4} className = 'my-3'>
            <CardGroup>
                <Card className='custom-height'>
                    {/* course img  */}
                    <Card.Img className='custom-img img-fluid' variant="top" src={img} />
                    <Card.Body className='text-start'>
                        <div>
                        <p>
                            {/* course price  */}
                            <span className='fw-bold me-3'>${presenPrice} 
                            </span>
                            <small>
                                <del>${oldPrice}</del>
                            </small>
                        </p>
                        {/* course rating  */}
                        <p>
                        <small>
                        <span className='custom-color fw-bold me-2'>{rating} 
                        </span>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly/>
                        <span className='ms-2'>({totalRating})</span>    
                        </small>
                        </p>
                        </div>
                        {/* course name */}
                        <Card.Title>{name}</Card.Title>
                        {/* course title  */}
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* course button s */}
                        <Button className='custom-btn'> See Details</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            </Col>
        
    );
};

export default Course;