// copied and adapted code from
// https://github.com/ZhangMYihua/lesson-30/blob/master/src/redux/user/user.reducer.js

import UserActionTypes from './user.types'

const INITIAL_STATE = {
   currentUser: null,
   error: null,
   wasChecked: false
}

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {

      case UserActionTypes.SIGN_IN_SUCCESS:
         return {
            ...state,
            currentUser: action.payload,
            error: null,
            wasChecked: true
         }

      case UserActionTypes.SIGN_OUT_SUCCESS:
         return {
            ...state,
            currentUser: null,
            error: null,
         }

      case UserActionTypes.SIGN_IN_FAILURE:
      case UserActionTypes.SIGN_OUT_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
         return {
            ...state,
            error: action.payload
         }

      case UserActionTypes.USER_CHECKED:
         return {
            ...state,
            wasChecked: action.payload
         }

      default:
         return state
   }
}

export default userReducer