import TeamActionTypes from './team.types'

import { addPlayerToTeam, removePlayerFromTeam } from './team.utils'

const INITIAL_STATE = {
   teamName: '',
   players: [],
   history: [],
   isFetching: false,
   errorMessage: undefined,
   wasChecked: false
}

const teamReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {

      case TeamActionTypes.RESET_TEAM:
         return INITIAL_STATE

      case TeamActionTypes.ADD_PLAYER:
         return {
            ...state,
            players: addPlayerToTeam(state.players, action.payload)
         }

      case TeamActionTypes.REMOVE_PLAYER:
         return {
            ...state,
            players: removePlayerFromTeam(state.players, action.payload)
         }

      // case TeamActionTypes.FETCH_TEAM_START:
      //    return {
      //       ...state,
      //       isFetching: true
      //    }

      case 'TEAM_CHECKED':
         return {
            ...state,
            wasChecked: action.payload
         }

      case TeamActionTypes.FETCH_TEAM_SUCCESS:
         return {
            ...state,
            isFetching: false,
            teamName: action.payload.teamName,
            players: action.payload.players,
            history: action.payload.history,
            mlStats: action.payload.mlStats
         }

      case TeamActionTypes.FETCH_TEAM_FAIL:
         return {
            ...state,
            isFetching: false,
            errorMessage: action.payload
         }

      default:
         return state
   }
}

export default teamReducer