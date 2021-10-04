import useEvent from '../../Hooks/useEvent';
import Event from '../Event/Event';

const Events = () => {
    const [events] = useEvent();
    return (
        <div className='mt-3'>
            {/* data mapping  */}
            {
                events.map(event => <Event event = {event}></Event>)
            }
            
        </div>
    );
};

export default Events;