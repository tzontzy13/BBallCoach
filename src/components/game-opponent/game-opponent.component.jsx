import React from 'react'

import './game-opponent.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

const GameOpponent = () => {

   return (
      <div className="opponent">
         <CustomButton>+1</CustomButton>
         <CustomButton>+2</CustomButton>
         <CustomButton>+3</CustomButton>
      </div>
   )
}

export default GameOpponent