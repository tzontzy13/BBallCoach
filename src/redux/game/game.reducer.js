import GameActionTypes from './game.types'

import { addPlayerTo5 } from './game.utils'

const INITIAL_STATE = {
   starting: [],
   bench: [],
   player: {
      mp: 0,
      fg: 0,
      fga: 0,
      fgp: 0,
      p3: 0,
      p3a: 0,
      p3p: 0,
      ft: 0,
      fta: 0,
      ftp: 0,
      orb: 0,
      drb: 0,
      trb: 0,
      ast: 0,
      stl: 0,
      blk: 0,
      tov: 0,
      pf: 0,
      pts: 0,
      plusMinus: 0,
   },
   homeScore: {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0
   },
   awayScore: {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0
   },
   selected: 0,
   possession: 0,
   timeRunning: true
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

      case GameActionTypes.TOGGLE_TIME_RUNNING:
         return {
            ...state,
            timeRunning: !state.timeRunning
         }

      case GameActionTypes.TOGGLE_POSSESSION:
         return {
            ...state,
            possession: !state.possession
         }

      default:
         return state
   }
}

export default gameReducer