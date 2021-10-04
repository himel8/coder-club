import { useEffect, useState } from "react";

const useEvent = () =>{
    const [events, setEvents] = useState([]);
    useEffect( () =>{
        fetch('./fakeEvent.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, []);

    return [events];
}
export default useEvent
