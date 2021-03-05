import React from 'react'

import useKeypress from 'react-use-keypress'

import { connect } from 'react-redux'
import { selectPossession } from '../../redux/game/game.selectors'
import { togglePossession } from '../../redux/game/game.actions'

const GamePossession = ({ possession, togglePossession }) => {

   useKeypress(['g'], (event) => {
      if (event.key === 'g') {
         togglePossession()
      }
   })

   return (
      <div>
         {
            possession
               ?
               <h3>
                  Possession: AWAY
               </h3>
               :
               <h3>
                  Possession: HOME
               </h3>
         }
      </div>
   )
}

const mapStateToProps = (state) => ({
   possession: selectPossession(state)
})

const mapDispatchToProps = (dispatch) => ({
   togglePossession: () => dispatch(togglePossession())
})

export default connect(mapStateToProps, mapDispatchToProps)(GamePossession)