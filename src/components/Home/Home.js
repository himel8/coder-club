import { Col, Container, Row } from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import useCourse from '../../Hooks/useCourse';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import Events from '../Events/Events';
import From from '../From/From';
import './Home.css'

const Home = () => {
    const [courses] = useCourse();
    const courseItem = courses.filter(course => course.catagory === 'web');
    return (
        <div>
            <Banner></Banner>
            <Container>
            <Row className='align-items-center'>
                <Col sm={12} xs={12} md={6} className='py-3 px-5 text-start'>
                    <h1>Upcoming event</h1>
                    <Events></Events>
                </Col>
                <Col sm={12} xs={12} md={6}>
                    <From></From>
                </Col>
                
            </Row>
            <div className ='text-start'>
                <h5>Recent course</h5>
                <h1>Feautured course</h1>
                <Row className='align-items-center'>
                {
                
                    courseItem.map(course => <Course key={course.key} course={course}></Course>)  

                }
                </Row>
            </div>
        </Container>
        </div>
    );
};

export default Home;