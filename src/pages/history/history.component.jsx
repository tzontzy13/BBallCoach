import React, { useEffect } from 'react'
import './history.styles.scss'

import axios from 'axios'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { builder } from './builder'

const HistoryPage = ({ history, match, gameHistory, teamName }) => {

   const postGames = () => {
      const fetcher = axios.create({
         baseURL: "https://europe-west3-basketball-311116.cloudfunctions.net/SVC",
         headers: {
            'Content-Type': 'application/json',
         },
      });

      const fetcher2 = axios.create({
         baseURL: "http://localhost:8080",
         headers: {
            'Content-Type': 'application/json',
         },
      });

      const gameHistory2 = gameHistory.slice(gameHistory.length - 50, gameHistory.length)
      const boxScore = gameHistory2.map(game => game.boxScore[game.boxScore.length - 1].stats)
      // console.log(boxScore)

      const winner = gameHistory2.map(game => {
         if (game.homeScore.total > game.awayScore.total) {
            return 1
         } else {
            return 0
         }
      })
      // console.log(winner)

      const combine = boxScore.map((game, index) => {
         return { ...game, winner: winner[index] }
      })

      return fetcher2.post('', { ...combine }).then(res => {
         // console.log(JSON.parse(res.data.seasonalStats))
         // console.log(JSON.parse(res.data.aoi))
         console.log(res.data)
         // return res.data;
      })
   }

   const testF = () => {
      // postGames()
      builder()
   }

   const handleClick = (gameTime) => { history.push(`${match.path}/${gameTime}`) }

   return (
      <div className='history-page'>
         <div className='history-page-header'>
            <h3 className='history-page-title'>Here is your game history:</h3>
            <button onClick={testF}>test</button>
         </div>
         <div className='history-page-list'>
            <ul className="list-group">
               {
                  gameHistory ?
                     gameHistory.map(game => {

                        const gameTime = game.finishedAt.seconds
                        const date = new Date(gameTime * 1000)

                        return (
                           <li className="list-group-item" key={gameTime} onClick={() => handleClick(gameTime)}>
                              <h3 className='list-group-item-title'>VS {game.awayScore.awayTeamName}</h3>
                              <div className='list-group-item-details'>
                                 <div className='date'>
                                    <h6>{date.toDateString()}</h6>
                                 </div>
                                 <div className='score'>
                                    <h6>SCORE: {teamName} {game.homeScore.total} - {game.awayScore.total} {game.awayScore.awayTeamName}</h6>
                                 </div>
                              </div>
                           </li>
                        )
                     })
                     : <h3>No games in history</h3>
               }
            </ul>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   gameHistory: state.team.history,
   teamName: state.team.teamName
})

export default connect(mapStateToProps)(withRouter(HistoryPage))