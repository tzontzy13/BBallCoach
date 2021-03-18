import React from 'react'
import './logo.styles.scss'

import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'

import { saveGameBoxScoreToUser } from '../../firebase/firebase.utils'

const Logo = ({ boxScore }) => {

   const bgurl = '/logo.png'

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
                     () => saveGameBoxScoreToUser('users', '01BUXwyoPfSC4iP6TEq7Z6RVur62', boxScore)
                  }
                  inverted
               >
                  boxScore
               </CustomButton>
            </div>
            :
            null
         }
      </div>
   )
}

const mapStateToProps = state => ({
   boxScore: state.game.finalBoxScore
})

export default connect(mapStateToProps)(Logo)