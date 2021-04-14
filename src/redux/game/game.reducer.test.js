import gameReducer from './game.reducer'

describe('User reducer tests', () => {

   const INITIAL_STATE = {
      hasStarted: false,
      starting: [{
         "playerName": "Razvan",
         "playerNumber": "13",
         "stats": {
            "mp": 0,
            "fg": 0,
            "fga": 0,
            "fgp": 0,
            "p3": 0,
            "p3a": 0,
            "p3p": 0,
            "ft": 0,
            "fta": 0,
            "ftp": 0,
            "orb": 0,
            "drb": 0,
            "trb": 0,
            "ast": 0,
            "stl": 0,
            "blk": 0,
            "tov": 0,
            "pf": 0,
            "pts": 0,
            "plusMinus": 0,
            "subIn": 10000
         }
      },
      {
         "playerNumber": "1",
         "playerName": "Dragos",
         "stats": {
            "mp": 0,
            "fg": 0,
            "fga": 0,
            "fgp": 0,
            "p3": 0,
            "p3a": 0,
            "p3p": 0,
            "ft": 0,
            "fta": 0,
            "ftp": 0,
            "orb": 0,
            "drb": 0,
            "trb": 0,
            "ast": 0,
            "stl": 0,
            "blk": 0,
            "tov": 0,
            "pf": 0,
            "pts": 0,
            "plusMinus": 0,
            "subIn": 10000
         }
      },],
      bench: [
         {
            "playerName": "Coco",
            "playerNumber": "2",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerNumber": "3",
            "playerName": "Odea",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerName": "Filip",
            "playerNumber": "4",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerName": "6",
            "playerNumber": "6",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerNumber": "7",
            "playerName": "7",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerName": "8",
            "playerNumber": "8",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerNumber": "9",
            "playerName": "9",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerNumber": "11",
            "playerName": "11",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerNumber": "12",
            "playerName": "12",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         },
         {
            "playerName": "Paul",
            "playerNumber": "5",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 0
            }
         }
      ],
      homeScore: {
         total: 0,
         q1: 0,
         q2: 0,
         q3: 0,
         q4: 0
      },
      awayScore: {
         total: 0,
         q1: 0,
         q2: 0,
         q3: 0,
         q4: 0,
         awayTeamName: ''
      },
      selected: '13',
      possession: 0,
      timeRunning: 10000,
      clockPaused: true,
      quarter: 1,
      finalBoxScore: null
   }

   it('should return initial state', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: null,
         payload: null,
      })).toEqual({ ...INITIAL_STATE })
   })

   it('should reset game', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'RESET_GAME',
         payload: null
      })).toEqual({ ...INITIAL_STATE, bench: [], starting: [], selected: '' })
   })

   it('should add selected player to starting five', () => {
      let p = gameReducer(INITIAL_STATE, {
         type: 'ADD_PLAYER_TO_5',
         payload: '2'
      })

      const stats = {
         "ast": 0,
         "blk": 0,
         "drb": 0,
         "fg": 0,
         "fga": 0,
         "fgp": 0,
         "ft": 0,
         "fta": 0,
         "ftp": 0,
         "mp": 0,
         "orb": 0,
         "p3": 0,
         "p3a": 0,
         "p3p": 0,
         "pf": 0,
         "plusMinus": 0,
         "pts": 0,
         "stl": 0,
         "subIn": 0,
         "tov": 0,
         "trb": 0,
      }

      const stats2 = {
         "ast": 0,
         "blk": 0,
         "drb": 0,
         "fg": 0,
         "fga": 0,
         "fgp": 0,
         "ft": 0,
         "fta": 0,
         "ftp": 0,
         "mp": 0,
         "orb": 0,
         "p3": 0,
         "p3a": 0,
         "p3p": 0,
         "pf": 0,
         "plusMinus": 0,
         "pts": 0,
         "stl": 0,
         "subIn": 10000,
         "tov": 0,
         "trb": 0,
      }

      expect(p).toEqual({
         ...INITIAL_STATE, starting: [
            { playerName: 'Razvan', playerNumber: '13', stats: stats2 },
            { playerNumber: '1', playerName: 'Dragos', stats: stats2 },
            { playerName: 'Coco', playerNumber: '2', stats: stats2 }
         ],
         bench: [
            { playerNumber: '3', playerName: 'Odea', stats: stats },
            { playerName: 'Filip', playerNumber: '4', stats: stats },
            { playerName: '6', playerNumber: '6', stats: stats },
            { playerNumber: '7', playerName: '7', stats: stats },
            { playerName: '8', playerNumber: '8', stats: stats },
            { playerNumber: '9', playerName: '9', stats: stats },
            { playerNumber: '11', playerName: '11', stats: stats },
            { playerNumber: '12', playerName: '12', stats: stats },
            { playerName: 'Paul', playerNumber: '5', stats: stats }
         ]
      })
   })

   it('should set all players to bench', () => {
      const p = [{
         "playerName": "Razvan",
         "playerNumber": "13",
         "stats": {
            "mp": 0,
            "fg": 0,
            "fga": 0,
            "fgp": 0,
            "p3": 0,
            "p3a": 0,
            "p3p": 0,
            "ft": 0,
            "fta": 0,
            "ftp": 0,
            "orb": 0,
            "drb": 0,
            "trb": 0,
            "ast": 0,
            "stl": 0,
            "blk": 0,
            "tov": 0,
            "pf": 0,
            "pts": 0,
            "plusMinus": 0,
            "subIn": 0
         }
      },
      {
         "playerNumber": "1",
         "playerName": "Dragos",
         "stats": {
            "mp": 0,
            "fg": 0,
            "fga": 0,
            "fgp": 0,
            "p3": 0,
            "p3a": 0,
            "p3p": 0,
            "ft": 0,
            "fta": 0,
            "ftp": 0,
            "orb": 0,
            "drb": 0,
            "trb": 0,
            "ast": 0,
            "stl": 0,
            "blk": 0,
            "tov": 0,
            "pf": 0,
            "pts": 0,
            "plusMinus": 0,
            "subIn": 0
         }
      },]

      expect(gameReducer(INITIAL_STATE, {
         type: 'SET_BENCH',
         payload: p
      })).toEqual({ ...INITIAL_STATE, bench: p })
   })

   it('should set opponent name', () => {

      expect(gameReducer(INITIAL_STATE, {
         type: 'SET_OPPONENT_NAME',
         payload: 'op name'
      })).toEqual({ ...INITIAL_STATE, hasStarted: true, awayScore: { ...INITIAL_STATE.awayScore, awayTeamName: 'op name' } })
   })

   it('should TOGGLE TIME RUNNING', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'TOGGLE_TIME_RUNNING'
      })).toEqual({ ...INITIAL_STATE, clockPaused: !INITIAL_STATE.clockPaused })
   })

   it('should toggle possession', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'TOGGLE_POSSESSION'
      })).toEqual({ ...INITIAL_STATE, possession: !INITIAL_STATE.possession })
   })

   it('should select player', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'SELECT_PLAYER',
         payload: 0
      })).toEqual({ ...INITIAL_STATE, selected: '13' })
   })

   it('should add a block to selected player', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'ADD_BLOCK'
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 1,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })
   })

   it('should add a steal to selected player', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'ADD_STEAL'
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 1,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })
   })

   it('should add a defensive rebound to selected player', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'ADD_DREB'
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 1,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })
   })

   it('should add a defensive foul to selected player', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'ADD_DFOUL'
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 1,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })
   })

   it('should add a offensive rebound to selected player', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'ADD_OREB'
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 1,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })
   })

   it('should add a offensive foul to selected player', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'ADD_OFOUL'
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 1,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })
   })

   it('should add a turnover to selected player', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'ADD_TOV'
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 1,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })
   })

   it("should set opponent score", () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'OPPONENT_SCORE',
         payload: 3
      })).toEqual({
         ...INITIAL_STATE,
         awayScore: {
            ...INITIAL_STATE.awayScore,
            total: INITIAL_STATE.awayScore.total + 3
         },
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": -3,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": -3,
               "subIn": 10000
            }
         },]
      })
   })

   it('should substitute two players', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'SUB_PLAYERS',
         payload: { playerIn: { playerNumber: '2' }, playerOut: { playerNumber: '13' } },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [
            {
               "playerName": "Coco",
               "playerNumber": "2",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 10000
               }
            },
            {
               "playerNumber": "1",
               "playerName": "Dragos",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 10000
               }
            },],
         bench: [
            {
               "playerName": "Razvan",
               "playerNumber": "13",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 10000
               }
            },
            {
               "playerNumber": "3",
               "playerName": "Odea",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            },
            {
               "playerName": "Filip",
               "playerNumber": "4",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            },
            {
               "playerName": "6",
               "playerNumber": "6",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            },
            {
               "playerNumber": "7",
               "playerName": "7",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            },
            {
               "playerName": "8",
               "playerNumber": "8",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            },
            {
               "playerNumber": "9",
               "playerName": "9",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            },
            {
               "playerNumber": "11",
               "playerName": "11",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            },
            {
               "playerNumber": "12",
               "playerName": "12",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            },
            {
               "playerName": "Paul",
               "playerNumber": "5",
               "stats": {
                  "mp": 0,
                  "fg": 0,
                  "fga": 0,
                  "fgp": 0,
                  "p3": 0,
                  "p3a": 0,
                  "p3p": 0,
                  "ft": 0,
                  "fta": 0,
                  "ftp": 0,
                  "orb": 0,
                  "drb": 0,
                  "trb": 0,
                  "ast": 0,
                  "stl": 0,
                  "blk": 0,
                  "tov": 0,
                  "pf": 0,
                  "pts": 0,
                  "plusMinus": 0,
                  "subIn": 0
               }
            }
         ],
      })
   })

   it('should set time and stats', () => {
      expect(gameReducer(INITIAL_STATE, {
         type: 'SET_TIME',
         payload: 900,
      })).toEqual({
         ...INITIAL_STATE,
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 9100,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 900
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 9100,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 900
            }
         },],
         timeRunning: 900
      })
   })

   it('should return lineup and score after missed / made shot from FT / 2p / 3p with or withour assist', () => {

      // MISSED
      expect(gameReducer(INITIAL_STATE, {
         type: 'SHOT',
         payload: { madeOrMiss: 'missed', position: 'p2', assistBy: '' },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 1,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })

      expect(gameReducer(INITIAL_STATE, {
         type: 'SHOT',
         payload: { madeOrMiss: 'missed', position: 'p3', assistBy: '' },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 1,
               "fgp": 0,
               "p3": 0,
               "p3a": 1,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })

      expect(gameReducer(INITIAL_STATE, {
         type: 'SHOT',
         payload: { madeOrMiss: 'missed', position: 'FT', assistBy: '' },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 1,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 0,
               "subIn": 10000
            }
         },]
      })

      // MADE - no assist

      expect(gameReducer(INITIAL_STATE, {
         type: 'SHOT',
         payload: { madeOrMiss: 'made', position: 'p2', assistBy: '' },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 1,
               "fga": 1,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 2,
               "plusMinus": 2,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 2,
               "subIn": 10000
            }
         },],
         homeScore: {
            ...INITIAL_STATE.homeScore,
            total: 2
         }
      })

      expect(gameReducer(INITIAL_STATE, {
         type: 'SHOT',
         payload: { madeOrMiss: 'made', position: 'p3', assistBy: '' },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 1,
               "fga": 1,
               "fgp": 0,
               "p3": 1,
               "p3a": 1,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 3,
               "plusMinus": 3,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 3,
               "subIn": 10000
            }
         },],
         homeScore: {
            ...INITIAL_STATE.homeScore,
            total: 3
         }
      })

      expect(gameReducer(INITIAL_STATE, {
         type: 'SHOT',
         payload: { madeOrMiss: 'made', position: 'FT', assistBy: '' },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 1,
               "fta": 1,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 1,
               "plusMinus": 1,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 1,
               "subIn": 10000
            }
         },],
         homeScore: {
            ...INITIAL_STATE.homeScore,
            total: 1
         }
      })

      // MADE - assist

      expect(gameReducer(INITIAL_STATE, {
         type: 'SHOT',
         payload: { madeOrMiss: 'made', position: 'p2', assistBy: '1' },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 1,
               "fga": 1,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 2,
               "plusMinus": 2,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 1,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 2,
               "subIn": 10000
            }
         },],
         homeScore: {
            ...INITIAL_STATE.homeScore,
            total: 2
         }
      })

      expect(gameReducer(INITIAL_STATE, {
         type: 'SHOT',
         payload: { madeOrMiss: 'made', position: 'p3', assistBy: '1' },
      })).toEqual({
         ...INITIAL_STATE,
         selected: '',
         starting: [{
            "playerName": "Razvan",
            "playerNumber": "13",
            "stats": {
               "mp": 0,
               "fg": 1,
               "fga": 1,
               "fgp": 0,
               "p3": 1,
               "p3a": 1,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 0,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 3,
               "plusMinus": 3,
               "subIn": 10000
            }
         },
         {
            "playerNumber": "1",
            "playerName": "Dragos",
            "stats": {
               "mp": 0,
               "fg": 0,
               "fga": 0,
               "fgp": 0,
               "p3": 0,
               "p3a": 0,
               "p3p": 0,
               "ft": 0,
               "fta": 0,
               "ftp": 0,
               "orb": 0,
               "drb": 0,
               "trb": 0,
               "ast": 1,
               "stl": 0,
               "blk": 0,
               "tov": 0,
               "pf": 0,
               "pts": 0,
               "plusMinus": 3,
               "subIn": 10000
            }
         },],
         homeScore: {
            ...INITIAL_STATE.homeScore,
            total: 3
         }
      })

   })

})