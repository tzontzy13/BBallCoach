import React from 'react';
import './court-btn-d.styles.scss'

import { connect } from 'react-redux'
import { addBlock, addSteal, addDReb, addDFoul } from '../../redux/game/game.actions'

const CourtBtnD = ({ name, addBlock, addSteal, addDReb, addDFoul, isSelected }) => {

   return (
      <div className="dropdown">
         <button
            className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"
            disabled={isSelected === '' ? 'disabled' : null}
         >
            {name}
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button" onClick={() => addBlock()}>
               Block
            </button></li>
            <li><button className="dropdown-item" type="button" onClick={() => addSteal()}>
               Steal
            </button></li>
            <li><button className="dropdown-item" type="button" onClick={() => addDReb()}>
               DReb
            </button></li>
            <li><button className="dropdown-item" type="button" onClick={() => addDFoul()}>
               DFoul
            </button></li>
         </ul>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   addBlock: () => dispatch(addBlock()),
   addSteal: () => dispatch(addSteal()),
   addDReb: () => dispatch(addDReb()),
   addDFoul: () => dispatch(addDFoul())
})

const mapStateToProps = (state) => ({
   isSelected: state.game.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(CourtBtnD)