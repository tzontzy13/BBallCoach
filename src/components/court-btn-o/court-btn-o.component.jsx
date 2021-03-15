import React from 'react';
import './court-btn-o.styles.scss'

import { connect } from 'react-redux'
import { addOReb, addOFoul, addTov, shot } from '../../redux/game/game.actions'

const DropRight = ({ restOfPlayers, name, shot }) => {

   // console.log(restOfPlayers)

   return (
      <div className="btn-group dropend">
         <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            + assist
         </button>
         <ul className="dropdown-menu assist-by">
            {restOfPlayers.map(player =>
               <li key={player.playerNumber}><button className="dropdown-item" type="button" onClick={() => shot('made', name, player.playerNumber)}>
                  {player.playerName}
               </button></li>
            )}
         </ul>
      </div>
   )
}

const CourtBtnO = ({ name, starting, selected, addOReb, addOFoul, addTov, shot }) => {

   const restOfPlayers = starting.filter(player => player.playerNumber !== selected)

   return (
      <div className="dropdown">
         <button
            className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"
            disabled={selected === '' ? 'disabled' : null}
         >
            {name}
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">

            <li><button className="dropdown-item" type="button" onClick={() => shot('made', name)}>
               Made
            </button></li>

            {
               name === 'FT'
                  ?
                  null
                  :
                  <li><DropRight restOfPlayers={restOfPlayers} name={name} shot={shot} /></li>
            }

            <li><button className="dropdown-item" type="button" onClick={() => shot('missed', name)}>
               Missed
            </button></li>

            <li><button className="dropdown-item" type="button" onClick={() => addOReb()}>
               OReb
            </button></li>

            <li><button className="dropdown-item" type="button" onClick={() => addOFoul()}>
               OFoul
            </button></li>

            <li><button className="dropdown-item" type="button" onClick={() => addTov()}>
               TO
            </button></li>
         </ul>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   addOReb: () => dispatch(addOReb()),
   addOFoul: () => dispatch(addOFoul()),
   addTov: () => dispatch(addTov()),
   shot: (madeOrMiss, position, assistBy) => dispatch(shot(madeOrMiss, position, assistBy))
})

const mapStateToProps = (state) => ({
   starting: state.game.starting,
   selected: state.game.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(CourtBtnO)