import React, { useEffect } from 'react';
import { compose } from 'redux'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { fetchTeamStart } from '../../redux/team/team.actions'
import { selectIsTeamFetching } from '../../redux/team/team.selectors'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import TeamPage from './team.component'

const mapStateToProps = createStructuredSelector({
   isLoading: state => selectIsTeamFetching(state)
})

const mapDispatchToProps = dispatch => ({
   fetchTeamStart: () => dispatch(fetchTeamStart()),
})

const TeamWithSpinner = compose(connect(mapStateToProps), WithSpinner)(TeamPage)

const AppContainer = ({ fetchTeamStart }) => {

   useEffect(() => {
      fetchTeamStart()
   }, [fetchTeamStart])

   return (
      <div className="team-container" >
         <TeamWithSpinner />
      </div>
   );

}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)