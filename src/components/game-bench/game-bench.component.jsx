import React from 'react'

import './game-bench.styles.scss'

import { connect } from 'react-redux'

import { selectBench } from '../../redux/game/game.selectors'

import PlayerList from '../player-list/player-list.component'

const GameCurrent = ({ bench }) => {

   return (
      <div className="bench">
         <PlayerList players={bench} />
      </div>
   )
}

const mapStateToProps = (state) => ({
   bench: selectBench(state)
})

export default connect(mapStateToProps)(GameCurrent)