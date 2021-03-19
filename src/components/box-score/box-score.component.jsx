import React from 'react'
import './box-score.styles.scss'

import { connect } from 'react-redux'

const BoxScore = () => {

   return (
      <div className='box-scores'>
         <div className='box-score-details'>details</div>
         <div className='box-score-table'>table</div>
      </div>
   )
}

export default connect()(BoxScore)