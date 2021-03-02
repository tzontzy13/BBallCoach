import React from 'react'

import { connect } from 'react-redux'

import { selectIsTeamLoaded } from '../../redux/team/team.selectors'

import TeamMenu from '../team-menu/team-menu.component'
import TeamCreation from '../team-creation/team-creation.component'

const TeamOptions = ({ isTeamLoaded }) => {
   return (
      <div className='team-page'>
         {
            isTeamLoaded
               ?
               <TeamMenu />
               :
               <TeamCreation />
         }
      </div>
   )
}

const mapStateToProps = (state) => ({
   isTeamLoaded: selectIsTeamLoaded(state)
})

export default connect(mapStateToProps)(TeamOptions)