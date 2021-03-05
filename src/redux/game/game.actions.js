import GameActionTypes from './game.types'

export const addPlayerTo5 = (playerNumber) => ({
   type: GameActionTypes.ADD_PLAYER_TO_5,
   payload: playerNumber
})

export const setBench = (bench) => ({
   type: GameActionTypes.SET_BENCH,
   payload: bench
})

export const toggleTimeRunning = () => ({
   type: GameActionTypes.TOGGLE_TIME_RUNNING
})

export const togglePossession = () => ({
   type: GameActionTypes.TOGGLE_POSSESSION
})