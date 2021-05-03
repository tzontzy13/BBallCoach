import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './sign-in-up.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

// Component rendered at path='/signin'
// Renders both Sign in and Sign up components

const SignInUp = ({ error }) => {

   useEffect(() => {
      if (error) {
         alert(error.message)
      }
   })

   return (
      <div className='sign-in-and-sign-up'>
         <SignIn />
         <SignUp />
      </div>
   )
}

const mapStateToProps = state => ({
   error: state.user.error
})

export default connect(mapStateToProps)(SignInUp)