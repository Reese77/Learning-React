import './App.css';
import SimpleComponent from './components/SimpleComponent';//This is a component I created in the components folder
import ParameterComponent from './components/ParameterComponent';
import PrintArray from './components/PrintArray';

//This is a hook
import React, { useState, useEffect } from "react";

let lastReset = 0;
let lastLap = 0;
// let timeToDisplayTotal = 0;
// let timeToDisplayLap = 0;
let laps = [];
//let timerStarted = 0;
const timerText = ["Start", "Stop"];
const resetText = ["Reset", "Lap"];

function App() {//start component with CAPTIAL LETTER

  const [lapCount, setLapCount] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(0);
  const [timeDisplayTotal, setTimeDisplayTotal] = useState(0);
  const [timeDisplayLap, setTimeDisplayLap] = useState(0);
  //updating time
  
  

 
  
  //every 2ish seconds, console.log info
  useEffect( () => {
    const interval = setInterval( () => {
      // console.log("Last Reset:", lastReset);
      // console.log("Last Lap: ", lastLap);
      // console.log("Total time:", timeToDisplayTotal);
      // console.log("Lap time:", timeToDisplayLap);
      // console.log("Timer started?:", timerStarted);
      console.log(timerText[timerStarted]);
    }, 2011);
    return () => clearInterval(interval);
  }, [timerStarted]);

  //update timer every 100ms
  useEffect( () => {
    const interval = setInterval( () => {
      setSeconds((s) => s + 1*timerStarted );

    }, 100);//This causes it to trigger every 100 ms 

    return () => clearInterval(interval); //This is a cleanup function

  }, [timerStarted, seconds]);//the [] is a list of variables? it depends on

  //update timer variables every 10ms
  useEffect( () => {
    const interval = setInterval( () => {

      setTimeDisplayLap( () => (seconds - lastLap) / 10);
      setTimeDisplayTotal( () => (seconds - lastReset) / 10 );

    }, 10);//This causes it to trigger every 10 ms 

    return () => clearInterval(interval); //This is a cleanup function

  }, [seconds]);

  



  //returns single values only so you need to wrap things together to return them all
  return (
    <>
      <h1>Hello world</h1>
      <SimpleComponent/>
      <ParameterComponent itemOne="custom first item"/>
      <p>This is my very first website and I am playing around with learning React <br></br> I am going to make a stopwatch feature</p>

      {/* This is how you need to comment within return clause*/ }
      {/* This state isn't stored. It is local to the browser and will disappear when refreshing */}
      <button onClick = { () =>
        {
          setTimerStarted( 1 - timerStarted)
          //timerStarted = 1 - timerStarted;
          
        }
      }>{timerText[timerStarted]} </button>



      <button onClick = { () => 
        { 
          if (timerStarted === 0) {//if the timer hasn't been started, the button should reset the time
            lastReset = seconds;
            lastLap = seconds;
            setLapCount(1);
            laps = [];
          }
          else if (timerStarted === 1){// if it has started, we should add a lap
            lastLap = seconds;
            
            laps.push([lapCount, timeDisplayLap]);
            setLapCount( lapCount + 1 );
          }
          else {
            console.log("error");
          }
          
        }}> {resetText[timerStarted]} </button>

      {/* Display time since start, how many times the lap button has hit, and time since last lap */ }
      <p>Timer: {timeDisplayTotal}</p>  
      <p>Current lap: {lapCount}</p>
      <p>Lap time: {timeDisplayLap}</p>


      <PrintArray 
        text={"Previous Laps"} 
        array={laps} 
      />
    </>
  );
}

export default App;
