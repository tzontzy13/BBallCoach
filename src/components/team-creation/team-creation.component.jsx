import React, { useState } from 'react'

import './team-creation.styles.scss'

import { connect } from 'react-redux'
import { selectPlayers } from '../../redux/team/team.selectors'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import CreatePlayer from '../create-player/create-player.component'
import PlayerList from '../player-list/player-list.component'

import { addCollectionAndDocumentsToUser } from '../../firebase/firebase.utils'

const TeamCreation = ({ players }) => {

   const [teamName, setTeamName] = useState('')

   const handleChange = (event) => {
      const { value } = event.target

      setTeamName(value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // addCollectionAndDocumentsToUser('users', '01BUXwyoPfSC4iP6TEq7Z6RVur62', players, teamName)
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

            <CreatePlayer />

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

export default connect(mapStateToProps)(TeamCreation)