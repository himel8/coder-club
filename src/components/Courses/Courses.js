import { Row, Container } from 'react-bootstrap';
import useCourse from '../../Hooks/useCourse';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses] = useCourse();
    return (
        <div className='container'>
            <h1 className ='my-3 custom-header-text'>Our Courses</h1>
            <Container>
            <Row className=' align-items-center'>
                {/* araay mapping  */}
            {
                courses.map(course => <Course course={course} key ={course.key}></Course>)
            }
            </Row>
            </Container>
            
            
        </div>
    );
};

export default Courses;