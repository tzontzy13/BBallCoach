import GameActionTypes from './game.types'

export const resetGame = () => ({
   type: GameActionTypes.RESET_GAME
})

export const addPlayerTo5 = (playerNumber) => ({
   type: GameActionTypes.ADD_PLAYER_TO_5,
   payload: playerNumber
})

export const setBench = (bench) => ({
   type: GameActionTypes.SET_BENCH,
   payload: bench
})

export const setOpponentName = (name) => ({
   type: GameActionTypes.SET_OPPONENT_NAME,
   payload: name
})

export const toggleTimeRunning = () => ({
   type: GameActionTypes.TOGGLE_TIME_RUNNING
})

export const togglePossession = () => ({
   type: GameActionTypes.TOGGLE_POSSESSION
})

export const setTime = (time) => ({
   type: GameActionTypes.SET_TIME,
   payload: time
})

export const subPlayers = (playerOut, playerIn) => ({
   type: GameActionTypes.SUB_PLAYERS,
   payload: { playerIn, playerOut }
})

export const selectPlayer = (playerPos) => ({
   type: GameActionTypes.SELECT_PLAYER,
   payload: playerPos
})

export const addBlock = () => ({
   type: GameActionTypes.ADD_BLOCK
})

export const addSteal = () => ({
   type: GameActionTypes.ADD_STEAL
})

export const addDReb = () => ({
   type: GameActionTypes.ADD_DREB
})

export const addDFoul = () => ({
   type: GameActionTypes.ADD_DFOUL
})

export const addOReb = () => ({
   type: GameActionTypes.ADD_OREB
})

export const addOFoul = () => ({
   type: GameActionTypes.ADD_OFOUL
})

export const addTov = () => ({
   type: GameActionTypes.ADD_TOV
})

export const opponentScore = (points) => ({
   type: GameActionTypes.OPPONENT_SCORE,
   payload: points
})

export const shot = (madeOrMiss, position, assistBy) => ({
   type: GameActionTypes.SHOT,
   payload: { madeOrMiss, position, assistBy }
})