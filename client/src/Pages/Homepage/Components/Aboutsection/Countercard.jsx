import React, { useState, useEffect } from 'react';
import './Countercard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Countercard({ iconSpec, count, description }) {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    
    const duration = 3000; 
    const incrementTime = duration / count;

    const interval = setInterval(() => {
      setCurrentCount((prevCount) => {
        if (prevCount < count) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, incrementTime);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className='overall-counter-card card'>
      <div className="left-side-card">
        <h1 className='icon-spec'>{iconSpec}</h1>
      </div>
      <div className="right-side-card">
        <h1 className=' count-text'>{currentCount + " +"}</h1>
        <p className=' desc-text'>{description}</p>
      </div>
    </div>
  );
}

export default Countercard;
