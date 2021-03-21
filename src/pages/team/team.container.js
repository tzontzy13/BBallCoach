import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { fetchTeamStart } from '../../redux/team/team.actions'

import TeamPage from './team.component'

const mapDispatchToProps = dispatch => ({
   fetchTeamStart: () => dispatch(fetchTeamStart()),
})

const AppContainer = ({ fetchTeamStart }) => {

   useEffect(() => {
      fetchTeamStart()
   }, [fetchTeamStart])

   return (
      <div className="team-container" >
         <TeamPage />
      </div>
   );

}

export default connect(null, mapDispatchToProps)(AppContainer)