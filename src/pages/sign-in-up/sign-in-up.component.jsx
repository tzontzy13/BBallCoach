import React from 'react';

import './sign-in-up.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

// Component rendered at path='/signin'
// Renders both Sign in and Sign up components

const SignInUp = () => (
   <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
   </div>
)

export default SignInUp