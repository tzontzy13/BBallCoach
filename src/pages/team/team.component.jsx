import React, { useEffect } from 'react'

import './team.styles.scss'

import { connect } from 'react-redux'

import { withRouter, Route } from 'react-router-dom'

import TeamOptionsContainer from '../../components/team-options/team-options.container'
import TeamSelectContainer from '../../components/team-select/team-select.container'
import TeamOptions from '../../components/team-options/team-options.component'
import TeamSelect from '../../components/team-select/team-select.component'
import TeamEdit from '../../components/team-edit/team-edit.component'
import GamePage from '../game/game-page.component'
import HistoryPage from '../history/history.component'
import BoxScore from '../../components/box-score/box-score.component'

import { fetchTeamStart } from '../../redux/team/team.actions'

const TeamPage = ({ fetchTeamStart, match }) => {

   // useEffect(() => {
   //    fetchTeamStart()
   // }, [fetchTeamStart])

   return (
      <div className='team-page'>
         <Route
            exact
            path={`${match.path}`}
            component={TeamOptions}
         />
         <Route
            exact
            path={`${match.path}/select`}
            component={TeamSelect}
         />
         <Route
            exact
            path={`${match.path}/game`}
            component={GamePage}
         />
         <Route
            exact
            path={`${match.path}/edit`}
            component={TeamEdit}
         />
         <Route
            exact
            path={`${match.path}/history`}
            component={HistoryPage}
         />
         <Route
            path={`${match.path}/history/:date`}
            component={BoxScore}
         />
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   fetchTeamStart: () => dispatch(fetchTeamStart())
})

export default withRouter(connect(null, mapDispatchToProps)(TeamPage))