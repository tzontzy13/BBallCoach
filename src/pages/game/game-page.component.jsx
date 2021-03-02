import React, { useRef } from 'react'
import useKeypress from 'react-use-keypress'

import './game-page.styles.scss'

import TimeScorePos from '../../components/game-time-score-pos/game-t-s-p.component'
import GameOpponent from '../../components/game-opponent/game-opponent.component'
import CourtBtnO from '../../components/court-btn-o/court-btn-o.component'
import CourtBtnD from '../../components/court-btn-d/court-btn-d.component'

const GamePage = () => {

   const testtt = useRef()

   useKeypress(['ArrowLeft', 'ArrowRight', ' '], (event) => {
      if (event.key === ' ') {
         //   moveLeft();
         testtt.current.start()
      } else {
         //   moveRight();
         testtt.current.pause()
      }
   })

   return (
      <div className="grid-container">
         <div className="current">current</div>
         <div className="bench">bench</div>
         <TimeScorePos prop={testtt} />
         <GameOpponent />
         <div className="logoo">logo</div>
         <div className="court">
            <div className="p3L">p3L</div>
            <div className="p3R">p3R</div>
            <div className="p3C">p3C</div>
            <div className="p3CL">p3CL</div>
            <div className="p3CR">p3CR</div>
            <div className="FT">FT</div>
            <div className="p2C">
               <CourtBtnD />
            </div>
            <div className="p2CL">p2CL</div>
            <div className="p2L">p2L</div>
            <div className="p2R">p2R</div>
            <div className="p2CR">p2CR</div>
            <div className="dunk">
               <CourtBtnO />
            </div>
         </div>
      </div>
   )
}

export default GamePage