import React from 'react';
import "../components/CSS/cominSoon.css";
import { useSpring, animated } from "react-spring";

const CommingSoon = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });
  return (
      <>
           <div className="coming-soon-container">
            <animated.div style={fadeIn} className="content-container">
              <h1>Coming Soon</h1>
              <p>Exciting things are on the way! Stay tuned for updates.</p>
            </animated.div>
          </div>
      </>
  )
}

export default CommingSoon