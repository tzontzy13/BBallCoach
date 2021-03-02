export const addPlayerTo5 = (state, playerNumberToAdd) => {

   const { bench, starting } = state

   const findPlayer = bench.find(player => player.playerNumber === playerNumberToAdd)

   if (findPlayer) {
      const newBench = bench.filter(player => player !== findPlayer)
      const newStarting = [...starting, findPlayer]

      return { bench: newBench, starting: newStarting }
   } else {
      return state
   }
}