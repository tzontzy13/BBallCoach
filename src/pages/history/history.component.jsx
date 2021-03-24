import React, { useEffect } from 'react'
import './history.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const HistoryPage = ({ history, match, gameHistory, teamName }) => {

   useEffect(() => {
      console.log(gameHistory)
   })

   const handleClick = (gameTime) => { history.push(`${match.path}/${gameTime}`) }

   return (
      <div className='history-page'>
         <div className='history-page-header'>
            <h3 className='history-page-title'>Here is your game history:</h3>
         </div>
         <div className='history-page-list'>
            <ul className="list-group">
               {
                  gameHistory ?
                     gameHistory.map(game => {

                        const gameTime = game.finishedAt.seconds
                        var date = new Date(gameTime * 1000)

                        return (
                           <li className="list-group-item" key={game.finishedAt} onClick={() => handleClick(gameTime)}>
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