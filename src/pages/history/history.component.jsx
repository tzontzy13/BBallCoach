import React from 'react'
import './history.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from '../../components/custom-button/custom-button.component'

const HistoryPage = ({ history, match }) => {

   const handleClick = () => { history.push(`${match.path}/:13`) }

   return (
      <div className='history-page'>
         <div className='history-page-header'>
            <div className='history-page-btn'>
               <CustomButton onClick={() => history.push('/team')}>Back</CustomButton>
            </div>
            <h3 className='history-page-title'>Here is your game history:</h3>
         </div>
         <div className='history-page-list'>
            <ul className="list-group">
               <li className="list-group-item" onClick={() => handleClick()}>first</li>
               <li className="list-group-item">A second item</li>
               <li className="list-group-item">A third item</li>
               <li className="list-group-item">A fourth item</li>
               <li className="list-group-item">And a fifth one</li>
            </ul>
         </div>

      </div>
   )
}

export default connect()(withRouter(HistoryPage))