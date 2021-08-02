import React from 'react';

export interface Time{
    min:number
    sec:number
}



export default function useTimer(end?:boolean): Time{

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
        if (end){
            return clearInterval(id);
        }
        return () => clearInterval(id);
    },[end, min, sec]);





    return { min, sec }
}

