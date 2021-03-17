import React, { useState } from 'react';

import { connect } from 'react-redux';
import { removePlayer } from '../../redux/team/team.actions'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

const PlayerRemove = ({ removePlayer }) => {

   const [number, setNumber] = useState('')

   const handleChange = (event) => {
      const { value } = event.target

      setNumber(value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()

      removePlayer(number)

      setNumber('')
   }

   return (
      <div className='remove-player'>
         <form onSubmit={handleSubmit}>
            <FormInput
               type='text'
               name='playerNumber'
               value={number}
               onChange={handleChange}
               label='Player number'
               required
            />

            <CustomButton type='submit'>Remove player</CustomButton>
         </form>
      </div>
   )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
   removePlayer: (player) => dispatch(removePlayer(player))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerRemove)