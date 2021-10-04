import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutSection = (props) => {
    const customStyle=`align-items-center mb-5 ${props?.display}`;
    return (
        <div>
            <Row className={customStyle}>
                {/* column  */}
                    <Col sm={12} xs={12} md={6} className='text-start'>
                    {/* about title  */}
                    <h1 className='custom-color'>{props.children}</h1>
                    {/* about description  */}
                    <p>Weddings and any opinions suitable smallest nay. My he houses or months settle remove ladies appear. Engrossed suffering supposing he recommend.</p>
                    <p>Uneasy barton seeing remark happen hi has. Am possible offering contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence. Exeter talked in agreed spirit no he unable do. Betrayed shutters in vicinity it unpacked in.</p>
                    </Col>
                    <Col sm={12} xs={12} md={6}>
                        {/* about image */}
                    <img className='img-fluid' src={props.img} alt="" />
                    </Col>
                </Row>
        </div>
    );
};

export default AboutSection;