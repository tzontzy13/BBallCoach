import React, { useState } from 'react'
import { connect } from 'react-redux'

import './create-player.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import { addPlayer } from '../../redux/team/team.actions'
import { selectPlayers } from '../../redux/team/team.selectors'

const CreatePlayer = ({ addPlayer, players }) => {

   const [player, setPlayer] = useState({
      playerName: '',
      playerNumber: '',
   })

   const { playerName, playerNumber } = player

   const handleChange = event => {
      const { name, value } = event.target

      setPlayer({ ...player, [name]: value })
   }

   const handleSubmit = e => {
      e.preventDefault()


      const existingPlayer = players ? players.find(player => player.playerNumber === playerNumber) : undefined
      console.log(existingPlayer)

      if (existingPlayer) {
         alert('Player number taken')
      } else {
         addPlayer({ playerName, playerNumber })
         setPlayer({
            playerName: '',
            playerNumber: '',
         })
      }
   }

   return (
      <div className='create-player'>
         <form onSubmit={handleSubmit}>
            <FormInput
               type='text'
               name='playerName'
               value={playerName}
               onChange={handleChange}
               label='Player Name'
               required
            />
            <FormInput
               type='number'
               name='playerNumber'
               value={playerNumber}
               onChange={handleChange}
               label='Player Number'
               required
            />

            <CustomButton type='submit' id='addPlayerBtn'>add player</CustomButton>
         </form>
      </div>
   )
}

const mapStateToProps = state => ({
   players: selectPlayers(state)
})

const mapDispatchToProps = (dispatch) => ({
   addPlayer: player => dispatch(addPlayer(player))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayer)