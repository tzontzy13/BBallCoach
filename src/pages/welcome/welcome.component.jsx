import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'

import { withRouter } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'

import './welcome.styles.scss'

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
            <h2>Please sign in</h2>
         </div>
      }
   </div>)
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(withRouter(WelcomePage))