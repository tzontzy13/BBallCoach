import React from 'react';

import './court-btn.styles.scss'

const CourtBtnO = () => {

   return (
      <div class="dropdown">
         <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            dunk
         </button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button class="dropdown-item" type="button">Made</button></li>
            <li><button class="dropdown-item" type="button">Missed</button></li>
            <li><button class="dropdown-item" type="button">OReb</button></li>
            <li><button class="dropdown-item" type="button">OFoul</button></li>
            <li><button class="dropdown-item" type="button">TO</button></li>
         </ul>
      </div>
   )
}

export default CourtBtnO