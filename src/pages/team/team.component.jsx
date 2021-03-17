import React, { useEffect } from 'react'

import './team.styles.scss'

import { connect } from 'react-redux'

import { withRouter, Route } from 'react-router-dom'

import TeamOptionsContainer from '../../components/team-options/team-options.container'
import TeamSelectContainer from '../../components/team-select/team-select.container'
import TeamEdit from '../../components/team-edit/team-edit.component'
import GamePage from '../game/game-page.component'

import { fetchTeamStart } from '../../redux/team/team.actions'

const TeamPage = ({ fetchTeamStart, match }) => {

   useEffect(() => {
      fetchTeamStart()
   }, [fetchTeamStart])

   return (
      <div className='team-page'>
         <Route
            exact
            path={`${match.path}/select`}
            component={TeamSelectContainer}
         />
         <Route
            exact
            path={`${match.path}`}
            component={TeamOptionsContainer}
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
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   fetchTeamStart: () => dispatch(fetchTeamStart())
})

export default withRouter(connect(null, mapDispatchToProps)(TeamPage))