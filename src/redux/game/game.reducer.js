import GameActionTypes from './game.types'

import { addPlayerTo5 } from './game.utils'

const INITIAL_STATE = {
   starting: [],
   bench: []
}

const gameReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {

      case GameActionTypes.ADD_PLAYER_TO_5:

         const newState = addPlayerTo5(state, action.payload)
         return newState

      case GameActionTypes.SET_BENCH:
         return {
            ...state,
            bench: action.payload
         }

      default:
         return state
   }
}

export default gameReducer