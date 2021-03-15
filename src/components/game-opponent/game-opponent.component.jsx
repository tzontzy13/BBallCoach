import React from 'react'
import './game-opponent.styles.scss'

import { connect } from 'react-redux'
import { opponentScore } from '../../redux/game/game.actions'

import CustomButton from '../custom-button/custom-button.component'

const GameOpponent = ({ opponentScore }) => {

   return (
      <div className="opponent">
         <CustomButton inverted onClick={() => opponentScore(1)}>
            +1
         </CustomButton>
         <CustomButton inverted onClick={() => opponentScore(2)}>
            +2
         </CustomButton>
         <CustomButton inverted onClick={() => opponentScore(3)}>
            +3
         </CustomButton>
      </div>
   )
}

const mapDispatchToProps = dispatch => ({
   opponentScore: (points) => dispatch(opponentScore(points))
})

export default connect(null, mapDispatchToProps)(GameOpponent)