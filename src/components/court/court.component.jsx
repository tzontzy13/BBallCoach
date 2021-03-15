import React from 'react'

import { connect } from 'react-redux'
import { selectPossession } from '../../redux/game/game.selectors'

import './court.styles.scss'

import CourtD from '../court-d/court-d.component'
import CourtO from '../court-o/court-o.component'

const Court = ({ possession }) => {

   return (


      <div className='court-container'>
         {
            possession
               ?
               <CourtD />
               :
               <CourtO />
         }
      </div>

   )
}

const mapStateToProps = (state) => ({
   possession: selectPossession(state)
})

export default connect(mapStateToProps)(Court)