import React, { useState } from 'react'

import './team-creation.styles.scss'

import { connect } from 'react-redux'
import { selectPlayers } from '../../redux/team/team.selectors'

import { withRouter } from 'react-router-dom'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import PlayerAdd from '../create-player/create-player.component'
import PlayerList from '../player-list/player-list.component'

import { addCollectionAndDocumentsToUser, auth } from '../../firebase/firebase.utils'

const TeamCreation = ({ players, history }) => {

   const [teamName, setTeamName] = useState('')

   const handleChange = (event) => {
      const { value } = event.target

      setTeamName(value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (players.length !== 12 || teamName === '') {
         alert("You need 12 players and a name")
      } else {
         addCollectionAndDocumentsToUser('users', auth.currentUser.uid, players, teamName)
            .then(
               () => {
                  history.push('/team')
               })
            .catch(err => console.log(err))
      }
   }

   return (
      <div className='team-creation'>
         <h3 className='team-creation-title'>You do not have a team, please create one</h3>
         <div className='team-creation-body'>
            <FormInput
               type='text'
               name='teamName'
               value={teamName}
               onChange={handleChange}
               label='Team name'
               required
            />

            <PlayerAdd />

            <div className='player-list-container'>
               <PlayerList players={players} />
            </div>
         </div>

         <CustomButton type='button' onClick={handleSubmit}>create team</CustomButton>

      </div>
   )
}

const mapStateToProps = (state) => ({
   players: selectPlayers(state)
})

export default connect(mapStateToProps)(withRouter(TeamCreation))