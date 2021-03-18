import React from 'react'
import './history.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const HistoryPage = ({ history, match }) => {

   return (
      <div className='history-page'>
         <div className='history-page-list' onClick={() => history.push(`${match.path}/:13`)}>
            List
         </div>
      </div>
   )
}

export default connect()(withRouter(HistoryPage))