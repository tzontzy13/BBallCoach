import GameActionTypes from './game.types'

import { addPlayerTo5, setInitialStats, setPlayingTime, resetPlayingTime, subPlayers, addBlock, addSteal, addDReb, addDFoul, addOReb, addOFoul, addTov, opponentScore, shot, finishStats, calculateTeamTotals } from './game.utils'

const INITIAL_STATE = {
   hasStarted: false,
   starting: [],
   bench: [],
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
   selected: '',
   possession: 0,
   timeRunning: 10000,
   clockPaused: true,
   quarter: 1,
   finalBoxScore: null
}

const gameReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {

      case GameActionTypes.RESET_GAME:
         return INITIAL_STATE

      case GameActionTypes.ADD_PLAYER_TO_5:

         const { bench, starting } = addPlayerTo5(state.bench, state.starting, action.payload)
         return {
            ...state,
            bench: bench,
            starting: starting
         }

      case GameActionTypes.SET_BENCH:

         return {
            ...state,
            bench: setInitialStats(action.payload)
         }

      case GameActionTypes.SET_OPPONENT_NAME:
         return {
            ...state,
            awayScore: { ...state.awayScore, awayTeamName: action.payload },
            hasStarted: true
         }

      case GameActionTypes.TOGGLE_TIME_RUNNING:
         return {
            ...state,
            clockPaused: !state.clockPaused
         }

      case GameActionTypes.TOGGLE_POSSESSION:
         return {
            ...state,
            possession: !state.possession
         }

      case GameActionTypes.SET_TIME:
         const newStartingTime = setPlayingTime(state.starting, action.payload)
         const allPlayersStats = newStartingTime.concat(state.bench)
         const finalScoreBoard = finishStats(allPlayersStats)

         if (action.payload === 0) {
            if (state.quarter === 4) {
               return {
                  ...state,
                  timeRunning: 0,
                  starting: newStartingTime,
                  finalBoxScore: finalScoreBoard
               }
            } else {
               return {
                  ...state,
                  timeRunning: 10000,
                  starting: resetPlayingTime(state.starting),
                  quarter: state.quarter + 1,
                  finalBoxScore: finalScoreBoard
               }
            }
         } else {
            return {
               ...state,
               timeRunning: action.payload,
               starting: setPlayingTime(state.starting, action.payload),
               finalBoxScore: finalScoreBoard
            }
         }

      case GameActionTypes.OPPONENT_SCORE:
         const newStartingPlusMinus = opponentScore(state.starting, action.payload)

         return {
            ...state,
            starting: newStartingPlusMinus,
            awayScore: {
               ...state.awayScore,
               total: state.awayScore.total + action.payload
            }
         }

      default:
         return state

      case GameActionTypes.SHOT:

         const { madeOrMiss, position, assistBy } = action.payload

         const { newStartingAfterShot, homeScore } = shot(madeOrMiss, position, assistBy, state.selected, state.starting, state.homeScore)

         return {
            ...state,
            starting: newStartingAfterShot,
            homeScore: homeScore,
            selected: ''
         }

      case GameActionTypes.SUB_PLAYERS:
         const { playerOut, playerIn } = action.payload
         const copyBench = JSON.parse(JSON.stringify(state.bench))
         const copyStarting = JSON.parse(JSON.stringify(state.starting))

         const subTime = state.timeRunning.valueOf()

         const { newBench, newStarting } = subPlayers(copyBench, copyStarting, playerOut, playerIn, subTime)
         return {
            ...state,
            bench: newBench,
            starting: newStarting,
            selected: ''
         }

      case GameActionTypes.SELECT_PLAYER:
         const selectedPlayerNumber = state.starting[action.payload].playerNumber
         return {
            ...state,
            selected: selectedPlayerNumber
         }

      case GameActionTypes.ADD_BLOCK:
         const newStartingPlusBlock = addBlock(state.starting, state.selected)

         return {
            ...state,
            starting: [...newStartingPlusBlock],
            selected: ''
         }

      case GameActionTypes.ADD_STEAL:
         const newStartingPlusSteal = addSteal(state.starting, state.selected)

         return {
            ...state,
            starting: [...newStartingPlusSteal],
            selected: ''
         }

      case GameActionTypes.ADD_DREB:
         const newStartingPlusDReb = addDReb(state.starting, state.selected)

         return {
            ...state,
            starting: [...newStartingPlusDReb],
            selected: ''
         }

      case GameActionTypes.ADD_DFOUL:
         const newStartingPlusDFoul = addDFoul(state.starting, state.selected)

         return {
            ...state,
            starting: [...newStartingPlusDFoul],
            selected: ''
         }

      case GameActionTypes.ADD_OREB:
         const newStartingPlusOReb = addOReb(state.starting, state.selected)

         return {
            ...state,
            starting: [...newStartingPlusOReb],
            selected: ''
         }

      case GameActionTypes.ADD_OFOUL:
         const newStartingPlusOFoul = addOFoul(state.starting, state.selected)

         return {
            ...state,
            starting: [...newStartingPlusOFoul],
            selected: ''
         }

      case GameActionTypes.ADD_TOV:
         const newStartingPlusTov = addTov(state.starting, state.selected)

         return {
            ...state,
            starting: [...newStartingPlusTov],
            selected: ''
         }
   }
}

export default gameReducer