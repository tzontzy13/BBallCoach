import React, { useRef } from 'react'

import useKeypress from 'react-use-keypress'

import { connect } from 'react-redux'

import { toggleTimeRunning } from '../../redux/game/game.actions'
import { selectTimeRunning } from '../../redux/game/game.selectors'

import Countdown from 'react-countdown'

const GameTime = ({ isTimeRunning, toggleTime }) => {

   const clockRef = useRef()

   useKeypress(['ArrowLeft', 'ArrowRight', ' '], (event) => {
      if (event.key === ' ') {

         if (clockRef.current.isPaused()) {
            console.log('start')
            clockRef.current.start()
            toggleTime()
         } else {
            console.log('pause')
            clockRef.current.pause()
            toggleTime()
         }

      } else {
         // 
      }
   })

   return (
      <div>
         <Countdown
            date={Date.now() + 600000}
            // 720000
            renderer={renderer}
            autoStart={false}
            intervalDelay={0}
            precision={1}
            ref={clockRef}
         />
      </div>
   )
}

const renderer = ({ hours, minutes, seconds, milliseconds, completed }) => {
   if (completed) {
      // Render a completed state
      return <h2>Final</h2>
   } else {
      // Render a countdown
      return <h2>Q1 - {minutes}:{seconds}:{milliseconds / 100}</h2>;
   }
}

const mapStateToProps = (state) => ({
   isTimeRunning: selectTimeRunning(state)
})

const mapDispatchToProps = (dispatch) => ({
   toggleTime: () => dispatch(toggleTimeRunning())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameTime)