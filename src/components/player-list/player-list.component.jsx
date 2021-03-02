import React from 'react'

import './player-list.styles.scss'

import { connect } from 'react-redux'

import PlayerCard from '../player-card/player-card.component'

const PlayerList = ({ players }) => {

   return (
      <div className='player-list'>
         {players.map(player => <PlayerCard key={player.playerNumber} player={player} />)}
      </div>
   )
}

export default connect()(PlayerList)