import * as actions from './user.actions'

it('should create an action to check user session', () => {

   const expectedAction = {
      type: 'CHECK_USER_SESSION',
   }

   expect(actions.checkUserSession()).toEqual(expectedAction)
})

it('should create an action to start google sign in', () => {

   const expectedAction = {
      type: 'GOOGLE_SIGN_IN_START',
   }

   expect(actions.googleSignInStart()).toEqual(expectedAction)
})

it('should create an action to start email sign in', () => {
   const emailAndPassword = 'emailAndPassword'

   const expectedAction = {
      type: 'EMAIL_SIGN_IN_START',
      payload: emailAndPassword
   }

   expect(actions.emailSignInStart(emailAndPassword)).toEqual(expectedAction)
})

it('should create an action to set user after sign in success', () => {
   const user = 'happyUser'

   const expectedAction = {
      type: 'SIGN_IN_SUCCESS',
      payload: user
   }

   expect(actions.signInSuccess(user)).toEqual(expectedAction)
})

it('should create an action to set user after sign in failure', () => {
   const error = 'error'

   const expectedAction = {
      type: 'SIGN_IN_FAILURE',
      payload: error
   }

   expect(actions.signInFailure(error)).toEqual(expectedAction)
})

it('should create an action to start sign out', () => {

   const expectedAction = {
      type: 'SIGN_OUT_START',
   }

   expect(actions.signOutStart()).toEqual(expectedAction)
})

it('should create an action to set user after sign out success', () => {

   const expectedAction = {
      type: 'SIGN_OUT_SUCCESS',
   }

   expect(actions.signOutSuccess()).toEqual(expectedAction)
})

it('should create an action to set error after sign out failure', () => {
   const error = 'error'

   const expectedAction = {
      type: 'SIGN_OUT_FAILURE',
      payload: error
   }

   expect(actions.signOutFailure(error)).toEqual(expectedAction)
})

it('should create an action with payload after sign up start', () => {
   const userCredentials = 'userCredentials'

   const expectedAction = {
      type: 'SIGN_UP_START',
      payload: userCredentials
   }

   expect(actions.signUpStart(userCredentials)).toEqual(expectedAction)
})

it('should create an action with payload after sign up success', () => {
   const user = 'user'
   const additionalData = 'additionalData'

   const expectedAction = {
      type: 'SIGN_UP_SUCCESS',
      payload: { user, additionalData }
   }

   expect(actions.signUpSuccess({ user, additionalData })).toEqual(expectedAction)
})

it('should create an action to set error after sign up failure', () => {
   const error = 'error'

   const expectedAction = {
      type: 'SIGN_UP_FAILURE',
      payload: error
   }

   expect(actions.signUpFailure(error)).toEqual(expectedAction)
})

it('should create an action to set user as checked', () => {
   const bool = 'bool'

   const expectedAction = {
      type: 'USER_CHECKED',
      payload: bool
   }

   expect(actions.setChecked(bool)).toEqual(expectedAction)
})