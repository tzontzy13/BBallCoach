export const addPlayerToTeam = (players, playerToAdd) => {
   const existingPlayer = players ? players.find(player => player.playerNumber === playerToAdd.playerNumber) : undefined

   if (existingPlayer) {
      return players
   }

   return [...players, playerToAdd]
}

export const removePlayerFromTeam = (players, playerToRemove) => {

   const updatedTeam = players.filter(player => player.playerNumber !== playerToRemove)

   return updatedTeam
}