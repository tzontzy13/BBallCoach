import React from 'react'
import './box-score.styles.scss'

import { useTable } from 'react-table'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import Table from '../table/table.component'

const BoxScore = ({ gameHistory, match, teamName }) => {

   const filtered = gameHistory.find((game) => {
      return game.finishedAt.seconds.toString() === match.params.date
   })

   return (
      <div className='box-scores'>
         <div className='box-score-teams'>
            <h3>{teamName.toUpperCase()} VS {filtered.awayScore.awayTeamName.toUpperCase()}</h3>
         </div>
         <div className='box-score-score'>
            <h4>Final score: {filtered.awayScore.total} - {filtered.homeScore.total}</h4>
         </div>
         <div className='box-score-table'>
            <Table tableRows={filtered} />
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   gameHistory: state.team.history,
   teamName: state.team.teamName
})

export default connect(mapStateToProps)(withRouter(BoxScore))