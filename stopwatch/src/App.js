import { useState , useEffect } from "react";

const App =()=>{
  const[isRunning , setIsRunning]= useState(false);
  const[time , setTime]= useState(0);

  useEffect(()=>{
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval((t) =>{
        setTime((previoustime) => previoustime+1 )
      },1000)
    }
    else{
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);


  }, [isRunning])

  const handleStartStop= ()=>{
    // setIsRunning((previousvalue)=> !previousvalue);
    setIsRunning(!isRunning);
  };

  const handleReset= ()=>{
    setIsRunning(false);
    setTime(0);
    
  }

  const formatTime =()=>{
    // Minutes calculation
  const minutes = Math.floor(time/60);
  console.log(minutes)

  // Seconds calculation
  const seconds = Math.floor(time % 60);
  console.log(seconds)

  return `${minutes}:${seconds <10 ? 0 : ""}${seconds}`
  }

  return(
    <div>
    <h1>Stopwatch</h1>
    <p>Time: {formatTime()}</p>
    <button onClick={handleStartStop}>{isRunning ? "Stop": "Start"}</button>
    <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App;