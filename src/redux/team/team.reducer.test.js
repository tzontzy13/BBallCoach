import teamReducer from './team.reducer'

describe('User reducer tests', () => {

   const INITIAL_STATE = {
      teamName: '',
      players: [{ playerNumber: 1 }, { playerNumber: 2 }],
      history: [{ game: 'game' }],
      isFetching: false,
      errorMessage: undefined,
   }

   it('should return initial state', () => {
      expect(teamReducer(INITIAL_STATE, {
         type: null,
         payload: null,
      })).toEqual({ ...INITIAL_STATE })
   })

   it('should add player to team', () => {
      expect(teamReducer(INITIAL_STATE, {
         type: 'ADD_PLAYER',
         payload: { playerNumber: 3 }
      })).toEqual({ ...INITIAL_STATE, players: [...INITIAL_STATE.players, { playerNumber: 3 }] })
   })

   it('should remove player from team', () => {
      expect(teamReducer(INITIAL_STATE, {
         type: 'REMOVE_PLAYER',
         payload: 2
      })).toEqual({ ...INITIAL_STATE, players: [{ playerNumber: 1 }] })
   })

   it('should set isFetching', () => {
      expect(teamReducer(INITIAL_STATE, {
         type: 'FETCH_TEAM_START',
      })).toEqual({ ...INITIAL_STATE, isFetching: true })
   })

   it('should create an action for team fetch success', () => {
      expect(teamReducer(INITIAL_STATE, {
         type: 'FETCH_TEAM_SUCCESS',
         payload: { teamName: 'teamName', players: [], history: [] }
      })).toEqual({ ...INITIAL_STATE, isFetching: false, teamName: 'teamName', players: [], history: [] })
   })

   it('should create an action for team fetch fail', () => {
      expect(teamReducer(INITIAL_STATE, {
         type: 'FETCH_TEAM_FAIL',
         payload: 'err'
      })).toEqual({ ...INITIAL_STATE, isFetching: false, errorMessage: 'err' })
   })
})