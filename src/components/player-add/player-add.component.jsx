import React, { useState } from 'react';

import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import PlayerList from '../player-list/player-list.component'

import { selectStarting } from '../../redux/game/game.selectors'

import { addPlayerTo5 } from '../../redux/game/game.actions'

const PlayerAdd = ({ starting, addPlayerTo5 }) => {

   const [number, setNumber] = useState('')

   const handleChange = (event) => {
      const { value } = event.target

      setNumber(value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()

      addPlayerTo5(number)

      setNumber('')
   }

   return (
      <div className='team-select-add'>
         <form onSubmit={handleSubmit}>
            <FormInput
               type='number'
               name='playerNumber'
               value={number}
               onChange={handleChange}
               label='Player number'
               required
            />

            <CustomButton type='submit'>Add player</CustomButton>
         </form>
         <h3>Currently selected players:</h3>
         <div>
            <PlayerList players={starting} />
            {/* {starting.map(p => <p>{p.playerNumber}</p>)} */}
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   starting: selectStarting(state),
})

const mapDispatchToProps = (dispatch) => ({
   addPlayerTo5: (nr) => dispatch(addPlayerTo5(nr))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAdd)