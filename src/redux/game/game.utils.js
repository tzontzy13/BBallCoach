export const addPlayerTo5 = (state, playerNumberToAdd) => {

   const { bench, starting } = state

   const findPlayer = bench.find(player => player.playerNumber === playerNumberToAdd)

   if (findPlayer !== undefined) {
      const newPlayer = { ...findPlayer, stats: { ...findPlayer.stats, subIn: 10000 } }
      const newBench = bench.filter(player => player !== findPlayer)
      const newStarting = [...starting, newPlayer]

      return { ...state, bench: newBench, starting: newStarting }
   } else {
      return state
   }
}

export const shot = (madeOrMiss, position, assistBy, selected, starting, homeScore) => {

   const playerWhoShot = starting.find(player => player.playerNumber === selected)
   const playerWhoShotIndex = starting.indexOf(playerWhoShot)

   if (madeOrMiss === 'missed') {
      const newStartingAfterShot = [...starting]

      if (position.includes('p2')) {
         console.log('missed p2')

         const newPlayer = { ...playerWhoShot, stats: { ...playerWhoShot.stats, fga: playerWhoShot.stats.fga + 1 } }
         newStartingAfterShot[playerWhoShotIndex] = newPlayer
         return { newStartingAfterShot, homeScore }

      } else if (position.includes('p3')) {
         console.log('missed p3')

         const newPlayer = { ...playerWhoShot, stats: { ...playerWhoShot.stats, fga: playerWhoShot.stats.fga + 1, p3a: playerWhoShot.stats.p3a + 1 } }
         newStartingAfterShot[playerWhoShotIndex] = newPlayer
         return { newStartingAfterShot, homeScore }

      } else if (position.includes('FT')) {
         console.log('missed ft')

         const newPlayer = { ...playerWhoShot, stats: { ...playerWhoShot.stats, fta: playerWhoShot.stats.fta + 1 } }
         newStartingAfterShot[playerWhoShotIndex] = newPlayer
         return { newStartingAfterShot, homeScore }

      }

   } else {
      const newStartingAfterShot2 = [...starting]
      if (assistBy) {
         console.log('assist by ' + assistBy + ' position: ' + position)

         const playerWhoAssisted = starting.find(player => player.playerNumber === assistBy)
         const playerWhoAssistedIndex = starting.indexOf(playerWhoAssisted)

         if (position.includes('p2')) {
            console.log('made p2')

            const newPlayer = {
               ...playerWhoShot, stats: {
                  ...playerWhoShot.stats,
                  fga: playerWhoShot.stats.fga + 1,
                  fg: playerWhoShot.stats.fg + 1,
                  pts: playerWhoShot.stats.pts + 2
               }
            }

            const newPlayerWithAssist = {
               ...playerWhoAssisted, stats: {
                  ...playerWhoAssisted.stats,
                  ast: playerWhoAssisted.stats.ast + 1
               }
            }

            newStartingAfterShot2[playerWhoShotIndex] = newPlayer
            newStartingAfterShot2[playerWhoAssistedIndex] = newPlayerWithAssist

            const newStartingAfterShot = newStartingAfterShot2.map(player => {
               const newPlayer = { ...player, stats: { ...player.stats, plusMinus: player.stats.plusMinus + 2 } }
               return newPlayer
            })

            return { newStartingAfterShot, homeScore: { ...homeScore, total: homeScore.total + 2 } }

         } else if (position.includes('p3')) {
            console.log('made p3')

            const newPlayer = {
               ...playerWhoShot, stats: {
                  ...playerWhoShot.stats,
                  p3a: playerWhoShot.stats.p3a + 1,
                  p3: playerWhoShot.stats.p3 + 1,
                  pts: playerWhoShot.stats.pts + 3
               }
            }

            const newPlayerWithAssist = {
               ...playerWhoAssisted, stats: {
                  ...playerWhoAssisted.stats,
                  ast: playerWhoAssisted.stats.ast + 1
               }
            }

            newStartingAfterShot2[playerWhoShotIndex] = newPlayer
            newStartingAfterShot2[playerWhoAssistedIndex] = newPlayerWithAssist

            const newStartingAfterShot = newStartingAfterShot2.map(player => {
               const newPlayer = { ...player, stats: { ...player.stats, plusMinus: player.stats.plusMinus + 3 } }
               return newPlayer
            })

            return { newStartingAfterShot, homeScore: { ...homeScore, total: homeScore.total + 3 } }

         }
      } else {
         console.log('no assist - made ' + position)

         if (position.includes('p2')) {
            console.log('made p2')

            const newPlayer = {
               ...playerWhoShot, stats: {
                  ...playerWhoShot.stats,
                  fga: playerWhoShot.stats.fga + 1,
                  fg: playerWhoShot.stats.fg + 1,
                  pts: playerWhoShot.stats.pts + 2
               }
            }
            newStartingAfterShot2[playerWhoShotIndex] = newPlayer
            const newStartingAfterShot = newStartingAfterShot2.map(player => {
               const newPlayer = { ...player, stats: { ...player.stats, plusMinus: player.stats.plusMinus + 2 } }
               return newPlayer
            })

            return { newStartingAfterShot, homeScore: { ...homeScore, total: homeScore.total + 2 } }

         } else if (position.includes('p3')) {
            console.log('made p3')

            const newPlayer = {
               ...playerWhoShot, stats: {
                  ...playerWhoShot.stats,
                  p3a: playerWhoShot.stats.p3a + 1,
                  p3: playerWhoShot.stats.p3 + 1,
                  pts: playerWhoShot.stats.pts + 3
               }
            }
            newStartingAfterShot2[playerWhoShotIndex] = newPlayer
            const newStartingAfterShot = newStartingAfterShot2.map(player => {
               const newPlayer = { ...player, stats: { ...player.stats, plusMinus: player.stats.plusMinus + 3 } }
               return newPlayer
            })

            return { newStartingAfterShot, homeScore: { ...homeScore, total: homeScore.total + 3 } }

         } else if (position.includes('FT')) {
            console.log('made ft')

            const newPlayer = {
               ...playerWhoShot, stats: {
                  ...playerWhoShot.stats,
                  fta: playerWhoShot.stats.fta + 1,
                  ft: playerWhoShot.stats.ft + 1,
                  pts: playerWhoShot.stats.pts + 1
               }
            }
            newStartingAfterShot2[playerWhoShotIndex] = newPlayer
            const newStartingAfterShot = newStartingAfterShot2.map(player => {
               const newPlayer = { ...player, stats: { ...player.stats, plusMinus: player.stats.plusMinus + 1 } }
               return newPlayer
            })

            return { newStartingAfterShot, homeScore: { ...homeScore, total: homeScore.total + 1 } }

         }
      }
   }
}

export const addDFoul = (starting, selected) => {
   const findPlayer = starting.find(player => player.playerNumber === selected)
   const newPlayer = { ...findPlayer, stats: { ...findPlayer.stats, pf: findPlayer.stats.pf + 1 } }

   const playerIndex = starting.indexOf(findPlayer)
   let newArray = [...starting]
   newArray[playerIndex] = newPlayer

   return newArray
}

export const addOFoul = (starting, selected) => {
   const findPlayer = starting.find(player => player.playerNumber === selected)
   const newPlayer = { ...findPlayer, stats: { ...findPlayer.stats, pf: findPlayer.stats.pf + 1 } }

   const playerIndex = starting.indexOf(findPlayer)
   let newArray = [...starting]
   newArray[playerIndex] = newPlayer

   return newArray
}

export const addBlock = (starting, selected) => {
   const findPlayer = starting.find(player => player.playerNumber === selected)
   const newPlayer = { ...findPlayer, stats: { ...findPlayer.stats, blk: findPlayer.stats.blk + 1 } }

   const playerIndex = starting.indexOf(findPlayer)
   let newArray = [...starting]
   newArray[playerIndex] = newPlayer

   return newArray
}

export const addSteal = (starting, selected) => {
   const findPlayer = starting.find(player => player.playerNumber === selected)
   const newPlayer = { ...findPlayer, stats: { ...findPlayer.stats, stl: findPlayer.stats.stl + 1 } }

   const playerIndex = starting.indexOf(findPlayer)
   let newArray = [...starting]
   newArray[playerIndex] = newPlayer

   return newArray
}

export const addDReb = (starting, selected) => {
   const findPlayer = starting.find(player => player.playerNumber === selected)
   const newPlayer = { ...findPlayer, stats: { ...findPlayer.stats, drb: findPlayer.stats.drb + 1 } }

   const playerIndex = starting.indexOf(findPlayer)
   let newArray = [...starting]
   newArray[playerIndex] = newPlayer

   return newArray
}

export const addOReb = (starting, selected) => {
   const findPlayer = starting.find(player => player.playerNumber === selected)
   const newPlayer = { ...findPlayer, stats: { ...findPlayer.stats, orb: findPlayer.stats.orb + 1 } }

   const playerIndex = starting.indexOf(findPlayer)
   let newArray = [...starting]
   newArray[playerIndex] = newPlayer

   return newArray
}

export const addTov = (starting, selected) => {
   const findPlayer = starting.find(player => player.playerNumber === selected)
   const newPlayer = { ...findPlayer, stats: { ...findPlayer.stats, tov: findPlayer.stats.tov + 1 } }

   const playerIndex = starting.indexOf(findPlayer)
   let newArray = [...starting]
   newArray[playerIndex] = newPlayer

   return newArray
}

export const opponentScore = (starting, points) => {

   const newStartingPlusMinus = starting.map(player => {
      const newPlayer = { ...player, stats: { ...player.stats, plusMinus: player.stats.plusMinus - points } }
      return newPlayer
   })

   return newStartingPlusMinus
}

export const subPlayers = (bench, starting, playerOut, playerIn, subTime) => {
   console.log(bench)
   const findBenchPlayer = bench.find(player => player.playerNumber === playerIn)
   const findStartingPlayer = starting.find(player => player.playerNumber === playerOut)

   const benchIndex = bench.indexOf(findBenchPlayer)
   const startingIndex = starting.indexOf(findStartingPlayer)

   const findBenchPlayer2 = { ...findBenchPlayer, stats: { ...findBenchPlayer.stats, subIn: subTime } }

   const newBench = [...bench]
   newBench[benchIndex] = findStartingPlayer

   const newStarting = [...starting]
   newStarting[startingIndex] = findBenchPlayer2

   return { newBench, newStarting }
}

export const setPlayingTime = (starting, currentTime) => {
   const newStarting = starting.map(player => {
      const playerMP = player.stats.subIn - currentTime
      const totalMP = player.stats.mp + playerMP

      return { ...player, stats: { ...player.stats, mp: totalMP, subIn: currentTime } }
   })

   return newStarting
}

export const resetPlayingTime = (starting) => {
   const newStarting = starting.map(player => {
      const playerMP = player.stats.subIn
      const totalMP = player.stats.mp + playerMP

      return { ...player, stats: { ...player.stats, mp: totalMP, subIn: 10000 } }
   })

   return newStarting
}

export const setInitialStats = (players) => {

   return players.map(player => {
      return {
         ...player,
         stats: {
            mp: 0,
            fg: 0,
            fga: 0,
            fgp: 0,
            p3: 0,
            p3a: 0,
            p3p: 0,
            ft: 0,
            fta: 0,
            ftp: 0,
            orb: 0,
            drb: 0,
            trb: 0,
            ast: 0,
            stl: 0,
            blk: 0,
            tov: 0,
            pf: 0,
            pts: 0,
            plusMinus: 0,
            subIn: 0,
            // subOut: 0,
         }
      }
   })
}