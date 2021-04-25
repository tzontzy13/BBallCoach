import React from 'react'
import './analysis.scss'

import Analysis from './analysis.component'

import { connect } from 'react-redux'

const AnalysisContainer = ({ mlStats }) => {

   return (<div className='analysis-page'>
      <h1 className='analysis-page-title'>Game analysis for last 50 games</h1>
      {mlStats
         ?
         <Analysis mlStats={mlStats} />
         :
         <p>Not enough games played. Unlock this after 50 games.</p>
      }
   </div>)
}

const mapStateToProps = (state) => ({
   mlStats: state.team.mlStats
})

export default connect(mapStateToProps)(AnalysisContainer)