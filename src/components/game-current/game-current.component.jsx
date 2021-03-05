import React from 'react'

import './game-current.styles.scss'

import { connect } from 'react-redux'

import { selectStarting } from '../../redux/game/game.selectors'

import PlayerList from '../player-list/player-list.component'

const GameCurrent = ({ starting }) => {

   return (
      <div className="current">
         <h5>Current:</h5>
         <PlayerList players={starting} sub />
      </div>
   )
}

const mapStateToProps = (state) => ({
   starting: selectStarting(state)
})

export default connect(mapStateToProps)(GameCurrent)