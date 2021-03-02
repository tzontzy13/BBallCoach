import React from 'react'
import './team-select.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import PlayerList from '../player-list/player-list.component'
import CustomButton from '../custom-button/custom-button.component'
import PlayerAdd from '../player-add/player-add.component'

const TeamSelect = ({ players, history }) => {

   return (
      <div className='team-select'>
         <div className='team-select-list'>
            <h3>Select the starting 5 from the following players:</h3>
            <PlayerList players={players} />
         </div>
         <PlayerAdd />
         <CustomButton onClick={() => history.push('/team/game')}>Start game</CustomButton>
      </div>
   )
}

const mapStateToProps = (state) => ({
   players: state.team.players
})

export default withRouter(connect(mapStateToProps)(TeamSelect))