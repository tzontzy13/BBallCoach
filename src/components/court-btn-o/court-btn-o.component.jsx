import React from 'react';

import './court-btn-o.styles.scss'

const DropRight = () => {

   return (
      <div className="btn-group dropend">
         <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Assist by
         </button>
         <ul className="dropdown-menu assist-by">
            <li><button className="dropdown-item" type="button">P1</button></li>
            <li><button className="dropdown-item" type="button">P2</button></li>
            <li><button className="dropdown-item" type="button">P3</button></li>
            <li><button className="dropdown-item" type="button">P4</button></li>
         </ul>
      </div>
   )
}

const CourtBtnO = ({ name }) => {

   return (
      <div className="dropdown">
         <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            {name}
         </button>
         <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><DropRight /></li>
            <li><button className="dropdown-item" type="button">Made</button></li>
            <li><button className="dropdown-item" type="button">Missed</button></li>
            <li><button className="dropdown-item" type="button">OReb</button></li>
            <li><button className="dropdown-item" type="button">OFoul</button></li>
            <li><button className="dropdown-item" type="button">TO</button></li>
         </ul>
      </div>
   )
}

export default CourtBtnO