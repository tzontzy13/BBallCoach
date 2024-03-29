// copied code from
// https://github.com/ZhangMYihua/lesson-30/blob/master/src/redux/user/user.actions.js

import UserActionTypes from './user.types'

export const checkUserSession = () => ({
   type: UserActionTypes.CHECK_USER_SESSION
})

export const googleSignInStart = () => ({
   type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
   type: UserActionTypes.EMAIL_SIGN_IN_START,
   payload: emailAndPassword
})

export const signInSuccess = (user) => ({
   type: UserActionTypes.SIGN_IN_SUCCESS,
   payload: user
})

export const signInFailure = error => ({
   type: UserActionTypes.SIGN_IN_FAILURE,
   payload: error
})

export const signOutStart = () => ({
   type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
   type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
   type: UserActionTypes.SIGN_OUT_FAILURE,
   payload: error
})

export const signUpStart = (userCredentials) => ({
   type: UserActionTypes.SIGN_UP_START,
   payload: userCredentials
})

export const signUpSuccess = ({ user, additionalData }) => ({
   type: UserActionTypes.SIGN_UP_SUCCESS,
   payload: { user, additionalData }
})

export const signUpFailure = (error) => ({
   type: UserActionTypes.SIGN_UP_FAILURE,
   payload: error
})

export const setChecked = (bool) => ({
   type: UserActionTypes.USER_CHECKED,
   payload: bool
})