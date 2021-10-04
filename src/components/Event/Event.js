import { faCalendar, faClock, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Event = (props) => {
    const {date, title} = props.event
    return (
        <div>
            <p>
                <FontAwesomeIcon className='custom-color custom-icon' icon ={faCalendar}/>
                <span className='ms-2'>{date}</span>
            </p>
            <h4 className='custom-color'>{title}</h4>
            <div className='d-flex justify-content-start'>
            <p className='me-3'>
                <FontAwesomeIcon className='custom-color custom-icon' icon ={faClock}/>
                <span className='ms-2'>10:00 am - 3:00 pm</span>
            </p>
            <p>
                <FontAwesomeIcon className='custom-color custom-icon' icon ={faMapMarkedAlt}/>
                <span className='ms-2'>Rc Auditorium</span>
            </p>
            </div>
            <hr />
        </div>
    );
};

export default Event;