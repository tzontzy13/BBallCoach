import userReducer from './user.reducer'
import * as actions from './user.actions'

describe('User reducer tests', () => {

   const INITIAL_STATE = {
      currentUser: null,
      error: null,
      wasChecked: false
   }

   it('should return initial state', () => {
      expect(userReducer(INITIAL_STATE, {
         type: null,
         payload: null,
      })).toEqual({ ...INITIAL_STATE })
   })

   it('user sign in success', () => {
      expect(userReducer(INITIAL_STATE, {
         type: 'SIGN_IN_SUCCESS',
         payload: 'happyUser'
      })).toEqual({ ...INITIAL_STATE, currentUser: 'happyUser', wasChecked: true })
   })

   it('user sign in failure', () => {
      expect(userReducer(INITIAL_STATE, {
         type: 'SIGN_IN_FAILURE',
         payload: 'error',
      })).toEqual({ ...INITIAL_STATE, error: 'error' })
   })

   it('user sign out success', () => {
      expect(userReducer(INITIAL_STATE, {
         type: 'SIGN_OUT_SUCCESS',
         payload: null,
      })).toEqual({ ...INITIAL_STATE, currentUser: null, error: null })
   })

   it('user sign out failure', () => {
      expect(userReducer(INITIAL_STATE, {
         type: 'SIGN_OUT_FAILURE',
         payload: 'error',
      })).toEqual({ ...INITIAL_STATE, error: 'error' })
   })

   it('user was checked', () => {
      expect(userReducer(INITIAL_STATE, {
         type: 'USER_CHECKED',
         payload: true,
      })).toEqual({ ...INITIAL_STATE, wasChecked: true })
   })

   it('user sign up failure', () => {
      expect(userReducer(INITIAL_STATE, {
         type: 'SIGN_UP_FAILURE',
         payload: 'error',
      })).toEqual({ ...INITIAL_STATE, error: 'error' })
   })
})