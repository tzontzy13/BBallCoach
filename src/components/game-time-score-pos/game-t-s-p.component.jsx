import React from 'react'

import GameTime from '../game-time/game-time.component'

const TimeScorePos = ({ prop }) => {

   return (
      <div className="time-score-pos">
         <div className="possesion">Possesion: HOME</div>
         <div className="time">
            <GameTime prop={prop} />
         </div>
         <div className="score">HOME 107 - 103 AWAY</div>
      </div>
   )
}

export default TimeScorePos