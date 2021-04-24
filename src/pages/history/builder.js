import games from './games.json'
import players from './players.json'
import { saveGameBoxScoreToUser2 } from '../../firebase/firebase.utils'


export const builder = () => {
   const fullGames = saveToDb(Object.values(games), Object.values(players))
   saveGameBoxScoreToUser2('users', fullGames)
}

const saveToDb = (games, players) => {
   let boxScores = []

   for (const game of games) {

      let pName = 'name'
      let pNum = 0
      let date = new Date(game.gmDate)

      let playerObj = () => {

         pNum += 1

         return {
            playerName: pName,
            playerNumber: pNum,
            stats: {}
         }
      }

      let gameObj = {
         finishedAt: date,
         homeScore: {
            total: game.PTS
         },
         awayScore: {
            awayTeamName: game.oppAbbr,
            total: game.oppPTS
         },
         // boxScore: []
      }

      const filteredPlayers = players.filter(player => player.gmDate == game.gmDate)

      const playerBoxScore = filteredPlayers.map(player => {
         return {
            ...playerObj(),
            stats: {
               "mp": player.playMin,
               "fg": player.playFGM,
               "fga": player.playFGA,
               "fgp": player['playFG%'],
               "p3": player.play3PM,
               "p3a": player.play3PA,
               "p3p": player['play3P%'],
               "ft": player.playFTM,
               "fta": player.playFTA,
               "ftp": player['playFT%'],
               "orb": player.playORB,
               "drb": player.playDRB,
               "trb": player.playTRB,
               "ast": player.playAST,
               "stl": player.playSTL,
               "blk": player.playBLK,
               "tov": player.playTO,
               "pf": player.playPF,
               "pts": player.playPTS,
               // "plusMinus": player.plus_minus,
            }
         }
      })

      playerBoxScore.push({
         playerName: 'TEAM',
         playerNumber: 'TOTAL',
         stats: {
            "mp": 240,
            "fg": game.FGM,
            "fga": game.FGA,
            "fgp": game['FG%'],
            "p3": game['3PM'],
            "p3a": game['3PA'],
            "p3p": game['3P%'],
            "ft": game.FTM,
            "fta": game.FTA,
            "ftp": game['FT%'],
            "orb": game.ORB,
            "drb": game.DRB,
            "trb": game.TRB,
            "ast": game.AST,
            "stl": game.STL,
            "blk": game.BLK,
            "tov": game.TO,
            "pf": game.PF,
            "pts": game.PTS,
            'poss': game.Poss
            // "plusMinus": game.plus_minus,
         }
      })

      let fullGame = {
         ...gameObj,
         boxScore: playerBoxScore
      }

      boxScores.push(fullGame)
   }

   // console.log(boxScores[0])

   return boxScores
}