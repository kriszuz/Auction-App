import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'

const Countdown = (props: {category: { name: string; items: string[]; description: string; }}) => {
  const { category } = props
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  const minutes = ("0" + Math.floor(timeLeft / 60)).slice(-2);
  const seconds = ("0" + timeLeft % 60).slice(-2);

  if (timeLeft === 0) {
    setIsRunning(false);
    setTimeLeft(60)
    setIsEnded(true)
    setTimeout(() => setIsEnded(false), 3000);
  }

  useEffect(() => {
    setIsRunning(false)
    setTimeLeft(60)
}, [category])

  return (
    <div className="timer-container">
            <div className="formated-time-container">
            {isEnded ? <span className='no-time-left'>KONIEC CZASU</span> : <span>{minutes}:{seconds}</span>}
            </div>
            <div className="timer-controls">
            <FaPlay className='control-icon' onClick={() => setIsRunning(true)}/>
            <FaPause className='control-icon' onClick={() => setIsRunning(false)}/>
            <FaRedo className='control-icon' onClick={() => setTimeLeft(60)}/>
            </div>
          </div>
  );
};

export default Countdown;