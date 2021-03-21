import React, { useEffect } from 'react'
import './history.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'

const HistoryPage = ({ history, match, gameHistory }) => {

   useEffect(() => {
      // console.log(gameHistory)
   })

   const handleClick = (gameTime) => { history.push(`${match.path}/${gameTime}`) }

   return (
      <div className='history-page'>
         <div className='history-page-header'>
            {/* <div className='history-page-btn'>
               <CustomButton onClick={() => history.push('/team')}>Back</CustomButton>
            </div> */}
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
                              <h3>VS {game.awayScore.awayTeamName}</h3>
                              <p>{date.toDateString()} - SCORE: home {game.awayScore.total} - {game.homeScore.total} away</p>
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
   gameHistory: state.team.history
})

export default connect(mapStateToProps)(withRouter(HistoryPage))