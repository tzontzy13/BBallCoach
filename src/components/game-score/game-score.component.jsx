import React from 'react'
import './game-score.styles.scss'

import { connect } from 'react-redux'

const GameScore = ({ awayScore, homeScore }) => {

   return (
      <div>
         HOME {homeScore} - {awayScore} AWAY
      </div>
   )
}

const mapStateToProps = (state) => ({
   awayScore: state.game.awayScore.total,
   homeScore: state.game.homeScore.total
})

export default connect(mapStateToProps)(GameScore)