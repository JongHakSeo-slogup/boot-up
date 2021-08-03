import React from 'react';

export interface Time{
    min:number
    sec:number
}



export default function useTimer(end:boolean, reset = false): Time{

    const [min, setMin] = React.useState(0);
    const [sec, setSec] = React.useState(0);


    React.useEffect(() => {
        function timer() {
            if (sec < 59) {
                setSec(sec + 1);
            }
            if (sec === 59) {
                setSec(0);
                setMin(min + 1);
            }
        }
        let id = setInterval(timer, 1000);
        if(reset){
            setSec(0);
            setMin(0);
            return clearInterval(id);
        }
        if (end){
            return clearInterval(id);
        }
        return () => clearInterval(id);
    },[reset, end, min, sec]);





    return { min, sec }
}

