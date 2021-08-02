import {useEffect, useState} from "react";

interface Time{
    min:number
    sec:number
}

export default function useTimer(onTimeEnd?:()=>void): Time{
    const [{min, sec}, setTime] = useState({min: 3, sec: 0});

    useEffect(() => {
        const timer: NodeJS.Timeout = setInterval(() => {
            if (min === 0 && sec === 0) return clearInterval(timer);
            if (min !== 0 && sec === 0) return setTime(prevTime => ({...prevTime, min: prevTime.min - 1, sec: 59}));
            if (sec !== 0) return setTime(prevTime => ({...prevTime, sec: prevTime.sec - 1}));
        }, 1000);

        return () => clearInterval(timer);
    }, [min, sec]);

    return {min, sec}
}

