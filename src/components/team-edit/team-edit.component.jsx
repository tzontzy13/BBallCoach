import React from 'react'
import './team-edit.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addCollectionAndDocumentsToUser, auth } from '../../firebase/firebase.utils'

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
         addCollectionAndDocumentsToUser('users', auth.currentUser.uid, players, teamName)
            .then(
               history.push('/team')
            )
            .catch(
               err => console.log(err)
            )
      }
   }

   return (
      <div className='team-edit'>
         <h2 className='team-edit-title'>Edit your team, add or remove players, then press submit!</h2>
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

export default connect(mapStateToProps)(withRouter(TeamEdit))