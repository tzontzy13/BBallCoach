import React from 'react'
import './team-edit.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addCollectionAndDocumentsToUser2, auth } from '../../firebase/firebase.utils'

import PlayerAdd from '../create-player/create-player.component'
import PlayerList from '../player-list/player-list.component'
import PlayerRemove from '../player-remove/player-remove.component'
import CustomButton from '../custom-button/custom-button.component'

const TeamEdit = ({ players, teamName, history }) => {

   const handleEdit = (e) => {
      e.preventDefault()

      if (players.length !== 12 || teamName === '') {
         alert("You need 12 players and a name")
      } else {
         addCollectionAndDocumentsToUser2('users', auth.currentUser.uid, players, teamName)
            .then(
               history.push('/')
            )
            .catch(
               err => console.log(err)
            )
      }
   }

   return (
      <div className='team-edit'>
         <PlayerList players={players} />
         <PlayerAdd />
         <PlayerRemove />
         <CustomButton onClick={handleEdit}>Submit changes</CustomButton>
      </div>
   )
}

const mapStateToProps = (state) => ({
   players: state.team.players,
   teamName: state.team.teamName
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TeamEdit))