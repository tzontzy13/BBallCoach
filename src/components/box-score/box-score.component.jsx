import React from 'react'
import './box-score.styles.scss'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import Table from '../table/table.component'

const BoxScore = ({ gameHistory, match, teamName }) => {

   const filtered = gameHistory.find((game) => game.finishedAt.seconds.toString() === match.params.date)

   return (
      <div className='box-scores'>
         {
            filtered
               ?
               <div>
                  <div className='box-score-teams'>
                     <h3>{teamName.toUpperCase()} VS {filtered.awayScore.awayTeamName.toUpperCase()}</h3>
                  </div>
                  <div className='box-score-score'>
                     <h5>Final score: {teamName.toUpperCase()} <strong>{filtered.homeScore.total} - {filtered.awayScore.total}</strong> {filtered.awayScore.awayTeamName.toUpperCase()}</h5>
                  </div>
                  <div className='box-score-table'>
                     <Table tableRows={filtered} />
                  </div>
               </div>
               :
               <p>Game doesn't exist</p>
         }
      </div>
   )
}

const mapStateToProps = (state) => ({
   gameHistory: state.team.history,
   teamName: state.team.teamName
})

export default connect(mapStateToProps)(withRouter(BoxScore))