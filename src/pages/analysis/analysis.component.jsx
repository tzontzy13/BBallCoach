import React from 'react'
import './analysis.scss'

import { connect } from 'react-redux'

const Analysis = ({ mlStats }) => {

   const seasonalStats = JSON.parse(mlStats.seasonalStats)
   const seasonalStatsEntries = Object.entries(seasonalStats)

   const aoi = JSON.parse(mlStats.aoi)[0]
   const aoiEntries = Object.entries(aoi)

   const topAoi = aoiEntries.sort((a, b) => (a[1] < b[1]) ? 1 : -1)

   return (
      <div className='analysis-page-body'>
         <div className='analysis-page-seasonal'>
            <h2>Season stats:</h2>
            <div className='analysis-page-obj'>
               {seasonalStatsEntries.slice(0, 18).map(entry => {
                  return <p className='entry' key={entry[0]}><strong>{entry[0]}</strong>: {entry[1].toFixed(2)}</p>
               })}
            </div>
         </div>
         <div className='analysis-page-aoi'>
            <h2>Top factors leading to your team's success rate: (in order)</h2>
            <div className='analysis-page-obj'>
               {topAoi.map((entry) => {
                  return <p className='entry' key={entry[0]}><strong>{entry[0]}</strong>: {entry[1].toFixed(3)}</p>
               })}
            </div>
         </div>
         <div className='analysis-page-advanced'>
            <h2>Advanced stats:</h2>
            <div className='analysis-page-obj'>
               {seasonalStatsEntries.slice(18, -1).map(entry => {
                  return <p className='entry' key={entry[0]}><strong>{entry[0]}</strong>: {entry[1].toFixed(2)}</p>
               })}
            </div>
         </div>
         <div className='analysis-page-rules'>
            <h2>Stats map:</h2>
            <ul className="list-group">
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  ast:
                  <span className="badge bg-primary rounded-pill">Assist</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  blk:
                  <span className="badge bg-primary rounded-pill">Block</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  drb:
                  <span className="badge bg-primary rounded-pill">Defensive Rebound</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  fg:
                  <span className="badge bg-primary rounded-pill">Field Goals Made</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  fga:
                  <span className="badge bg-primary rounded-pill">Field Goal Attempts</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  fgp:
                  <span className="badge bg-primary rounded-pill">Field Goal Percentage</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  ft:
                  <span className="badge bg-primary rounded-pill">Free Throws Made</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  fta:
                  <span className="badge bg-primary rounded-pill">Free Throw Attempts</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  ftp:
                  <span className="badge bg-primary rounded-pill">Free Throw Percentage</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  orb:
                  <span className="badge bg-primary rounded-pill">Offensive Rebounds</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  p3:
                  <span className="badge bg-primary rounded-pill">3 Pointers made</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  p3a:
                  <span className="badge bg-primary rounded-pill">3 Point Attempts</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  p3p:
                  <span className="badge bg-primary rounded-pill">3 Point Percentage</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  pf:
                  <span className="badge bg-primary rounded-pill">Player Fouls</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  pts:
                  <span className="badge bg-primary rounded-pill">Points</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  stl:
                  <span className="badge bg-primary rounded-pill">Steals</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  tov:
                  <span className="badge bg-primary rounded-pill">Turnovers</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  trb:
                  <span className="badge bg-primary rounded-pill">Total Rebounds</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  winner:
                  <span className="badge bg-primary rounded-pill">Team winrate</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  poss:
                  <span className="badge bg-primary rounded-pill">Team possessions</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  ts:
                  <span className="badge bg-primary rounded-pill">Team True Shooting Percentage</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  efg:
                  <span className="badge bg-primary rounded-pill">Team Efective Filed Goal Percentage</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  ortg:
                  <span className="badge bg-primary rounded-pill">Team Offensive Rating</span>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default connect()(Analysis)