import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { fetchTeamStart } from '../../redux/team/team.actions'

import TeamPage from './team.component'

const AppContainer = ({ fetchTeamStart }) => {

   useEffect(() => {
      console.log('started fetching')
      fetchTeamStart()
   }, [fetchTeamStart])

   return (
      <div className="team-container" >
         <TeamPage />
      </div>
   );

}

const mapDispatchToProps = dispatch => ({
   fetchTeamStart: () => dispatch(fetchTeamStart()),
})

export default connect(null, mapDispatchToProps)(AppContainer)