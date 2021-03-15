import React from 'react'

import './player-list.styles.scss'

import { connect } from 'react-redux'

import PlayerCard from '../player-card/player-card.component'

const PlayerList = ({ players, sub, selectedPlayer }) => {

   return (
      <div className='player-list-row'>
         {players
            ?
            players.map(player =>
               <PlayerCard key={player.playerNumber} player={player} sub={sub} selected={selectedPlayer === player.playerNumber} />
            )
            :
            null
         }
      </div>
   )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(PlayerList)