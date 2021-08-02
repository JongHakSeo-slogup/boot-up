interface Time{
    min:number
    sec:number
}

export default function useTimer(onTimeEnd?:()=>void): Time{
    const min = 0
    const sec = 0


    return { min, sec}
}

