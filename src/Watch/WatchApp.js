import React, {useEffect,useState} from 'react';

const WatchApp = () => {
    const [date,setDate] = useState({time:new Date()});
    useEffect( () => {
        //Component mount
        console.log('mounting');
        const timer = setInterval( () => {
            setDate({time:new Date()});
        },1000);

        //Component unmount
        return () => {
            console.log('unmounting');
            clearInterval(timer);
        }
    },[]);



    return (
        <div className='watch'>
            {date.time.toTimeString()}
        </div>
    );
}

export default WatchApp;