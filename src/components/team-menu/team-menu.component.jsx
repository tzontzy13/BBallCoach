import React from 'react'
import './team-menu.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'

const TeamMenu = ({ history, match }) => {

   return (
      <div className='team-menu'>
         <h3 className='team-menu-title'>Welcome to your team</h3>
         <div className='team-menu-elements'>
            <CustomButton type='button' onClick={() => history.push(`${match.path}/edit`)}>
               Edit team
            </CustomButton>
            <CustomButton type='button' onClick={() => history.push(`${match.path}/history`)}>
               Game history
            </CustomButton>
            <CustomButton type='button' onClick={() => history.push(`${match.path}/select`)}>
               New game
            </CustomButton>
            <CustomButton type='button' onClick={() => history.push(`${match.path}/analysis`)}>
               Analysis
            </CustomButton>
            <CustomButton type='button' onClick={() => history.push(`${match.path}/howto`)}>
               Controls
            </CustomButton>
         </div>
      </div>
   )
}

export default connect()(withRouter(TeamMenu))