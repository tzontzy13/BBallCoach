import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import './player-card.styles.scss'

import { subPlayers } from '../../redux/game/game.actions'

const PlayerCard = ({ player, sub, selected, bench, subPlayers, isClockPaused }) => {

   const handleClick = (benchP) => {
      subPlayers(player, benchP)
   }

   return (
      <div className={`${selected ? 'selected' : ''} player-card `}>
         <p className='player-card-data'>{player.playerName} - {player.playerNumber}</p>
         {
            sub
               ?
               <div className="btn-group dropend player-card-btn">
                  <button disabled={!isClockPaused} type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                     Sub
                        </button>
                  <ul className="dropdown-menu">
                     {bench.map(benchP =>
                        <button onClick={() => handleClick(benchP)} className="dropdown-item" type="button" key={benchP.playerNumber}>
                           {benchP.playerName}
                        </button>)}
                  </ul>
               </div>
               :
               null
         }
      </div>
   )
}

const mapStateToProps = state => ({
   bench: state.game.bench,
   isClockPaused: state.game.clockPaused
})

const mapDispatchToProps = dispatch => ({
   subPlayers: (playerOut, playerIn) => dispatch(subPlayers(playerOut, playerIn))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard)