import {useState,useEffect} from 'react'
import './LiveClock.css'

const LiveClock = () => {
    const [time,setTime] = useState(new Date());
    const [year,setYear] = useState(new Date().getFullYear());
    const [month,setMonth] = useState(new Date().getMonth());
    const [day,setDay] = useState(new Date().getDate());


    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())
            setYear(new Date().getFullYear())
            setMonth(new Date().getMonth())
            setDay(new Date().getDate())
        }, 1000)
        console.log(interval)
        return () => clearInterval(interval)
    },[])

    const hh = time.getHours();
    const mm = time.getMinutes();
    const ss = time.getSeconds();

  return (
    <div className='liveClock'>
      <h1>Current Time</h1>
      <p className='timeMain'>{time.toLocaleTimeString()}</p>
      <p className='meta'>Year: {year}-{month}-{day}</p>
      <p className='meta'>Time: {hh}:{mm}:{ss}</p>
    </div>
  )
}

export default LiveClock