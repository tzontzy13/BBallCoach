import React from 'react'

import './player-card.styles.scss'

const PlayerCard = ({ player, sub, selected }) => {

   return (
      <div className={`${selected ? 'selected' : ''} player-card `}>
         <p className='player-card-data'>{player.playerName} - {player.playerNumber}</p>
         {
            sub
               ?
               <div className="btn-group dropend player-card-btn">
                  <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                     Sub
                  </button>
                  <ul className="dropdown-menu">
                     <button className="dropdown-item" type="button">P1</button>
                     <button className="dropdown-item" type="button">P2</button>
                     <button className="dropdown-item" type="button">P3</button>
                     <button className="dropdown-item" type="button">P4</button>
                     <button className="dropdown-item" type="button">P5</button>
                     <button className="dropdown-item" type="button">P6</button>
                     <button className="dropdown-item" type="button">P7</button>
                  </ul>
               </div>
               :
               null
         }
      </div>
   )
}

export default PlayerCard