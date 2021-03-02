import React from 'react'

import './player-card.styles.scss'

const PlayerCard = ({ player }) => {

   return (
      <div className='player-card'>
         <span>{player.playerName} - {player.playerNumber}</span>
      </div>
   )
}

export default PlayerCard