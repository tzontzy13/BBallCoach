import React from 'react'

import { withRouter } from 'react-router-dom'

import './team-menu.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

const TeamMenu = ({ history, match }) => {
   return (
      <div className='team-menu'>
         <h3 className='team-menu-title'>Welcome to your team</h3>
         <div className='team-menu-elements'>
            <CustomButton type='button' onClick={() => history.push(`${match.path}/select`)}>
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

export default withRouter(TeamMenu)