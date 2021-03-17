import TeamActionTypes from './team.types'

import { addPlayerToTeam, removePlayerFromTeam } from './team.utils'

const INITIAL_STATE = {
   teamName: '',
   players: [],
   isFetching: false,
   errorMessage: undefined
}

const teamReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {

      case TeamActionTypes.ADD_PLAYER:
         return {
            ...state,
            players: addPlayerToTeam(state.players, action.payload)
         }

      case TeamActionTypes.REMOVE_PLAYER:
         const updatedTeam = removePlayerFromTeam(state.players, action.payload)
         return {
            ...state,
            players: updatedTeam
         }

      case TeamActionTypes.FETCH_TEAM_START:
         return {
            ...state,
            isFetching: true
         }

      case TeamActionTypes.FETCH_TEAM_SUCCESS:
         return {
            ...state,
            isFetching: false,
            teamName: action.payload.teamName,
            players: action.payload.players
         }

      case TeamActionTypes.FETCH_TEAM_FAIL:
         return {
            ...state,
            isFetching: false,
            errorMessage: action.payload
         }

      default:
         // console.log(action.type)
         // console.log(TeamActionTypes)
         return state
   }
}

export default teamReducer