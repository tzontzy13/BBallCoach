import React, { useRef } from 'react'

import Countdown from 'react-countdown'

const GameTime = (props) => {

   return (
      <div>
         <Countdown
            date={Date.now() + 600000}
            // 720000
            renderer={renderer}
            autoStart={false}
            intervalDelay={0}
            precision={1}
            // controlled={true}
            ref={props.prop}
         />
      </div>
   )
}

const renderer = ({ hours, minutes, seconds, milliseconds, completed }) => {
   if (completed) {
      // Render a completed state
      return <div>end</div>
   } else {
      // Render a countdown
      return <span>Q1: {minutes}:{seconds}:{milliseconds / 100}</span>;
   }
};

export default GameTime