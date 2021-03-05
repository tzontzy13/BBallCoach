import React from 'react';

import './court-btn-d.styles.scss'

const CourtBtnD = ({ name }) => {

   return (
      <div className="dropdown">
         <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            {name}
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Block</button></li>
            <li><button className="dropdown-item" type="button">Steal</button></li>
            <li><button className="dropdown-item" type="button">DReb</button></li>
            <li><button className="dropdown-item" type="button">DFoul</button></li>
            <li><button className="dropdown-item" type="button">TO</button></li>
         </ul>
      </div>
   )
}

export default CourtBtnD