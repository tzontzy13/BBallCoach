import React from 'react'

import './game-opponent.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

const GameOpponent = () => {

   return (
      <div className="opponent">
         <CustomButton inverted>+1</CustomButton>
         <CustomButton inverted>+2</CustomButton>
         <CustomButton inverted>+3</CustomButton>
      </div>
   )
}

export default GameOpponent