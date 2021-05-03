import React from 'react'

import './howto.scss'

const HowTo = () => {

   return (
      <div className='howto'>
         <div className='howto-title'>Game page controls:</div>
         <div className='howto-list'>
            <ul className="list-group">
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Stop / Start the time
                  <span className="badge bg-primary rounded-pill">C</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Toggle game possession
                  <span className="badge bg-primary rounded-pill">G</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Select player (position: top to bottom)
                  <span className="badge bg-primary rounded-pill">1,2,3,4,5</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  All other commands
                  <span className="badge bg-primary rounded-pill">Mouse Click</span>
               </li>
            </ul>
         </div>

         <div className='howto-title'>Example flow to record made 3-pointer for the first player:</div>
         <div className='howto-list'>
            <ul className="list-group">
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Start the time
                  <span className="badge bg-primary rounded-pill">Press C</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Toggle game possession so your team is on offence
                  <span className="badge bg-primary rounded-pill">Press G</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Select the first player
                  <span className="badge bg-primary rounded-pill">Press 1</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  With your mouse, click the position on the court where the player shot from
                  <span className="badge bg-primary rounded-pill">Mouse Click</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  With your mouse, click on "Made"
                  <span className="badge bg-primary rounded-pill">Mouse Click</span>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default HowTo