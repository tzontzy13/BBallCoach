import { createSelector } from 'reselect'

const selectTeam = state => state.team

export const selectPlayers = createSelector(
   [selectTeam],
   team => team.players
)

export const selectIsTeamFetching = createSelector(
   [selectTeam],
   team => team.isFetching
)

export const selectIsTeamLoaded = createSelector(
   [selectTeam],
   team => !!team.players
)