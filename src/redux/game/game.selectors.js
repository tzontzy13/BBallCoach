import { createSelector } from 'reselect'

const selectGame = state => state.game

export const selectStarting = createSelector(
   [selectGame],
   shop => shop.starting
)
