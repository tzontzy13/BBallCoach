import React, { useEffect } from 'react'

import './team.styles.scss'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsTeamFetching, selectIsTeamLoaded } from '../../redux/team/team.selectors'

import { withRouter, Route, Redirect } from 'react-router-dom'

import Analysis from '../analysis/analysis.container'
import HowTo from '../howto/howto.component'
import TeamMenu from '../../components/team-menu/team-menu.component'
import TeamCreate from '../../components/team-creation/team-creation.component'
import TeamSelect from '../../components/team-select/team-select.component'
import TeamEdit from '../../components/team-edit/team-edit.component'
import GamePage from '../game/game-page.component'
import HistoryPage from '../history/history.component'
import BoxScore from '../../components/box-score/box-score.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const TeamPage = ({ match, teamExists, mlStats }) => {

   useEffect(() => {
      // console.log('team component')
      // console.log(teamExists)
   })

   return (
      <div className='team-page'>
         <Route
            exact
            path={`${match.path}`}
            render={() => teamExists ? (<TeamMenu />) : (<Redirect to={`${match.path}/create`} />)}
         />
         <Route
            exact
            path={`${match.path}/select`}
            render={() => teamExists ? (<TeamSelect />) : (<Redirect to={`${match.path}/create`} />)}
         />
         <Route
            exact
            path={`${match.path}/game`}
            render={() => teamExists ? (<GamePage />) : (<Redirect to={`${match.path}/create`} />)}
         />
         <Route
            exact
            path={`${match.path}/edit`}
            render={() => teamExists ? (<TeamEdit />) : (<Redirect to={`${match.path}/create`} />)}
         />
         <Route
            exact
            path={`${match.path}/history`}
            render={() => teamExists ? (<HistoryPage />) : (<Redirect to={`${match.path}/create`} />)}
         />
         <Route
            exact
            path={`${match.path}/history/:date`}
            render={() => teamExists ? (<BoxScore />) : (<Redirect to={`${match.path}/create`} />)}
         />
         <Route
            exact
            path={`${match.path}/create`}
            component={TeamCreate}
         />
         <Route
            exact
            path={`${match.path}/howto`}
            render={() => teamExists ? (<HowTo />) : (<Redirect to={`${match.path}`} />)}
         />
         <Route
            exact
            path={`${match.path}/analysis`}
            render={() => teamExists ? (<Analysis />) : (<Redirect to={`${match.path}`} />)}
         />
      </div>
   )
}

const mapStateToProps2 = state => ({
   teamExists: state.team.teamName,
   mlStats: state.team.mlStats
})

const mapStateToProps = state => ({
   isLoading: !state.team.wasChecked,
})

const TeamWithState = connect(mapStateToProps2)(withRouter(TeamPage))

const TeamWithSpinner = compose(connect(mapStateToProps), WithSpinner)(TeamWithState)

export default TeamWithSpinner