import TeamActionTypes from './team.types'

export const addPlayer = (player) => ({
   type: TeamActionTypes.ADD_PLAYER,
   payload: player
})

export const fetchTeamStart = () => ({
   type: TeamActionTypes.FETCH_TEAM_START,
})

export const fetchTeamSuccess = playersMap => ({
   type: TeamActionTypes.FETCH_TEAM_SUCCESS,
   payload: playersMap
})

export const fetchTeamFailure = errorMessage => ({
   type: TeamActionTypes.FETCH_TEAM_FAIL,
   payload: errorMessage
})