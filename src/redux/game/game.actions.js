import GameActionTypes from './game.types'

export const addPlayerTo5 = (playerNumber) => ({
   type: GameActionTypes.ADD_PLAYER_TO_5,
   payload: playerNumber
})

export const setBench = (bench) => ({
   type: GameActionTypes.SET_BENCH,
   payload: bench
})