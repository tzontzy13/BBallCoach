import React from 'react'
import './welcome.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'

import { withRouter } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'

// Welcome Page is rendered at path='/'
// If there is a user present, "welcome" and allow him to navigate to his Team Page
// If not, instruct user to either sign in or sign up

const WelcomePage = ({ currentUser, history }) => {
   return (<div className='welcome-page'>
      <h1 className='welcome-title'>BBall Coach</h1>
      {currentUser
         ?
         <div className='welcome-content'>
            <h3>Welcome back, {currentUser.displayName}!</h3>
            <CustomButton type='button' onClick={() => history.push('/team')}>Go to team</CustomButton>
         </div>
         :
         <div>
            <h2>Please sign in or up</h2>
         </div>
      }
   </div>)
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(withRouter(WelcomePage))