import React from 'react'

import './game-t-s-p.styles.scss'

import GameTime from '../game-time/game-time.component'
import GamePossession from '../game-possession/game-possession.component'
import GameScore from '../game-score/game-score.component'

const TimeScorePos = () => {

   return (
      <div className="time-score-pos">
         <div className='possession'>
            <GamePossession />
         </div>
         <div className="time">
            <GameTime />
         </div>
         <h3 className="score">
            <GameScore />
         </h3>
      </div>
   )
}

export default TimeScorePos