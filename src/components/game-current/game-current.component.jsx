import React from 'react'

import './game-current.styles.scss'
import useKeypress from 'react-use-keypress'

import { connect } from 'react-redux'

import { selectStarting, selectSelected } from '../../redux/game/game.selectors'
import { selectPlayer } from '../../redux/game/game.actions'

import PlayerList from '../player-list/player-list.component'

const GameCurrent = ({ starting, selectedPlayer, selectPlayer }) => {

   useKeypress(['1', '2', '3', '4', '5'], (event) => {
      if (event.key === '1') {
         selectPlayer(0)
      }
      if (event.key === '2') {
         selectPlayer(1)
      }
      if (event.key === '3') {
         selectPlayer(2)
      }
      if (event.key === '4') {
         selectPlayer(3)
      }
      if (event.key === '5') {
         selectPlayer(4)
      }
   })

   return (
      <div className="current">
         <h5>Current:</h5>
         <PlayerList players={starting} sub selectedPlayer={selectedPlayer} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   starting: selectStarting(state),
   selectedPlayer: selectSelected(state)
})

const mapDispatchToProps = (dispatch) => ({
   selectPlayer: (playerPos) => dispatch(selectPlayer(playerPos))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameCurrent)