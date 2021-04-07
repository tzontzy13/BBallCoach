import * as actions from './team.actions'

it('should create an action to start team fetch', () => {

   const expectedAction = {
      type: 'FETCH_TEAM_START',
   }

   expect(actions.fetchTeamStart()).toEqual(expectedAction)
})

it('should create an action to set team', () => {
   const teamAndHistory = 'teamAndHistory'

   const expectedAction = {
      type: 'FETCH_TEAM_SUCCESS',
      payload: teamAndHistory
   }

   expect(actions.fetchTeamSuccess(teamAndHistory)).toEqual(expectedAction)
})

it('should create an action to set error on team fetch', () => {
   const err = 'err'

   const expectedAction = {
      type: 'FETCH_TEAM_FAIL',
      payload: err
   }

   expect(actions.fetchTeamFailure(err)).toEqual(expectedAction)
})

it('should create an action to add player', () => {
   const player = 'player'

   const expectedAction = {
      type: 'ADD_PLAYER',
      payload: player
   }

   expect(actions.addPlayer(player)).toEqual(expectedAction)
})

it('should create an action to remove player', () => {
   const player = 'player'

   const expectedAction = {
      type: 'REMOVE_PLAYER',
      payload: player
   }

   expect(actions.removePlayer(player)).toEqual(expectedAction)
})