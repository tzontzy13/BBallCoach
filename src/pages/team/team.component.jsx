import React from 'react'

import './team.styles.scss'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsTeamFetching } from '../../redux/team/team.selectors'

import { withRouter, Route } from 'react-router-dom'

import TeamOptions from '../../components/team-options/team-options.component'
import TeamSelect from '../../components/team-select/team-select.component'
import TeamEdit from '../../components/team-edit/team-edit.component'
import GamePage from '../game/game-page.component'
import HistoryPage from '../history/history.component'
import BoxScore from '../../components/box-score/box-score.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const TeamPage = ({ match }) => {

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
            exact
            path={`${match.path}/history/:date`}
            component={BoxScore}
         />
      </div>
   )
}

const mapStateToProps = createStructuredSelector({
   isLoading: state => selectIsTeamFetching(state),
})

const TeamWithSpinner = compose(connect(mapStateToProps), WithSpinner)(withRouter(TeamPage))

export default TeamWithSpinner