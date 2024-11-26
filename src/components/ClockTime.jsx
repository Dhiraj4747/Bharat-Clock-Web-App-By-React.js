import { useEffect, useState } from "react";

function ClockTime(){
   const [time,setTime] = useState(new Date())
   useEffect(()=>{
      const intervalTd = setInterval(()=>{
         setTime(new Date())
      },1000)

      return ()=>{
         clearInterval(intervalTd)
      }
   },[])
   return<>
   <p className="lead">This is the current time :{time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
   </>
}
export default ClockTime;