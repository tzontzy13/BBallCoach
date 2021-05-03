import React, { useState } from 'react'
import { connect } from 'react-redux'

import './sign-in.styles.scss'

import { auth } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

   const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

   const { email, password } = userCredentials

   const handleSubmit = async event => {
      event.preventDefault()

      emailSignInStart(email, password)
   }

   const handleChange = event => {
      const { value, name } = event.target

      setUserCredentials({ ...userCredentials, [name]: value })
   }

   const handlePasswordReset = (event) => {
      event.preventDefault()

      auth.sendPasswordResetEmail(email).catch(error => {
         alert(error.message)
      })
      setUserCredentials({ ...userCredentials, email: '' })
   }


   return (
      <div className='sign-in'>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>

         <form onSubmit={handleSubmit}>
            <FormInput
               name='email'
               type='email'
               value={email}
               handleChange={handleChange}
               label='Email'
               required
            />

            <FormInput
               name='password'
               type='password'
               value={password}
               handleChange={handleChange}
               label='Password'
               required
            />

            <div className='buttons'>
               <CustomButton type='submit'>Sign in</CustomButton>
               <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
            </div>
         </form>
         <div><strong>Forgot your password?</strong></div>
         <div><strong>Type in your email and click below:</strong></div>
         <CustomButton onClick={handlePasswordReset}>Reset Password - link in email</CustomButton>
      </div>
   )
}

const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)