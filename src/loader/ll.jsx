import React, { useEffect } from 'react';
import './loader.css';

export default function Loader() {
  useEffect(() => {
    // Generate random position for remaining dots
    const dots = document.querySelectorAll('.dot:not(:nth-child(-n+2))');
    dots.forEach((dot) => {
      dot.style.setProperty('--rand-x', Math.random());
      dot.style.setProperty('--rand-y', Math.random());
    });
  }, []);

  return (
   <>
    <div className="loader-container">
      <div className="dot animate"></div>
      <div className="dot animate"></div>
      {/* Add more dots here */}
      {/* Example: */}
      {/* <div className="dot animate"></div> */}
    </div>

    <style>
    .loader-container {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #999;
}

@keyframes rain {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}

.dot.animate {
  animation: rain 1s linear infinite;
}

/* Create 50 dots */
.dot:nth-child(1) {
  top: 20%;
  left: 30%;
}

.dot:nth-child(2) {
  top: 50%;
  left: 60%;
}

/* Randomly position remaining dots */
.dot:not(:nth-child(-n+2)) {
  top: calc(100% * var(--rand-y));
  left: calc(100% * var(--rand-x));
}

    </style>
   </>
  );
}


