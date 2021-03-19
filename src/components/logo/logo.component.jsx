import React from 'react'
import './logo.styles.scss'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'

import { saveGameBoxScoreToUser } from '../../firebase/firebase.utils'

const Logo = ({ boxScore, history }) => {

   const bgurl = '/logo.png'

   const handleSave = () => {
      saveGameBoxScoreToUser('users', '01BUXwyoPfSC4iP6TEq7Z6RVur62', boxScore)
         .then(history.push('/team/history'))
         .catch(err => (console.log(err)))
   }

   return (
      <div className='logoo'>
         <div
            className='logoo-logo'
            style={{
               backgroundImage: `url(${bgurl})`
            }}
         />
         {boxScore
            ?
            <div className='boxScoreContainer'>
               <CustomButton
                  onClick={
                     () => handleSave()
                  }
                  inverted
               >
                  boxScore
               </CustomButton>
            </div>
            :
            <div className='boxScoreContainer'>
               <CustomButton
                  onClick={
                     () => handleSave()
                  }
                  inverted
               >
                  boxScore
               </CustomButton>
            </div>
         }
      </div>
   )
}

const mapStateToProps = state => ({
   boxScore: state.game.finalBoxScore
})

export default connect(mapStateToProps)(withRouter(Logo))