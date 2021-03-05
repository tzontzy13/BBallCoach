import React from 'react'

import { connect } from 'react-redux'

import './game-page.styles.scss'

import TimeScorePos from '../../components/game-time-score-pos/game-t-s-p.component'
import GameOpponent from '../../components/game-opponent/game-opponent.component'
import Court from '../../components/court/court.component'
import GameCurrent from '../../components/game-current/game-current.component'
import GameBench from '../../components/game-bench/game-bench.component'
import Logo from '../../components/logo/logo.component'


const GamePage = () => {

   return (
      <div className="grid-container">
         <GameCurrent />
         <GameBench />
         <TimeScorePos />
         <GameOpponent />
         <Logo />
         {/* {possession
            ?
            <CourtD />
            :
            <CourtO />
         } */}
         <Court />
      </div>
   )
}

export default connect()(GamePage)