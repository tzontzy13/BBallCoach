import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { resetGame } from '../../redux/game/game.actions'
import { Redirect } from 'react-router-dom'

import './game-page.styles.scss'

import TimeScorePos from '../../components/game-time-score-pos/game-t-s-p.component'
import GameOpponent from '../../components/game-opponent/game-opponent.component'
import Court from '../../components/court/court.component'
import GameCurrent from '../../components/game-current/game-current.component'
import GameBench from '../../components/game-bench/game-bench.component'
import Logo from '../../components/logo/logo.component'


const GamePage = ({ resetGame, hasGameStarted }) => {

   useEffect(() => {
      return function cleanup() {
         resetGame()
      }
   })

   return (
      <div>
         {hasGameStarted
            ?
            <div className="grid-container">
               <GameCurrent />
               <GameBench />
               <TimeScorePos />
               <GameOpponent />
               <Logo />
               <Court />
            </div>
            :
            <Redirect to='/team/select' />
         }
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   resetGame: () => dispatch(resetGame())
})

const mapStateToProps = (state) => ({
   hasGameStarted: state.game.hasStarted
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)