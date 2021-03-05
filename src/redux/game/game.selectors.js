import { createSelector } from 'reselect'

const selectGame = state => state.game

export const selectStarting = createSelector(
   [selectGame],
   game => game.starting
)

export const selectBench = createSelector(
   [selectGame],
   game => game.bench
)

export const selectTimeRunning = createSelector(
   [selectGame],
   game => game.timeRunning
)

export const selectPossession = createSelector(
   [selectGame],
   game => game.possession
)