import React from 'react'
import './team-menu.styles.scss'

import { connect } from 'react-redux'


import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'

const TeamMenu = ({ history, match, setBench }) => {

   const handleNewGame = () => {
      history.push(`${match.path}/select`)
   }

   return (
      <div className='team-menu'>
         <h3 className='team-menu-title'>Welcome to your team</h3>
         <div className='team-menu-elements'>
            <CustomButton type='button' onClick={() => handleNewGame()}>
               New game
            </CustomButton>
            <CustomButton type='button'>
               Edit team
            </CustomButton>
            <CustomButton type='button'>
               Game history
            </CustomButton>
         </div>
      </div>
   )
}

export default connect()(withRouter(TeamMenu))