import React, { useRef } from 'react'

import useKeypress from 'react-use-keypress'

import { connect } from 'react-redux'

import { setTime, toggleTimeRunning } from '../../redux/game/game.actions'

import Countdown from 'react-countdown'

const GameTime = ({ setTime, quarter, toggleTimeRunning }) => {

   const clockRef = useRef()

   useKeypress([' ', 'c'], (event) => {
      if (event.key === 'c') {

         if (clockRef.current.isPaused() || clockRef.current.isStopped()) {
            // console.log('start')
            clockRef.current.start()
            // toggleTime()
         } else {
            // console.log('pause')
            clockRef.current.pause()
            // toggleTime()
         }

      } else {
         // 
      }
   })

   const handleStartPause = (delta) => {
      setTime(delta)
      toggleTimeRunning()
   }

   // const min10 = 600000
   // const min12 = 720000
   const sec10 = 10000

   return (
      <div>
         <Countdown
            date={Date.now() + sec10}
            renderer={renderer}
            autoStart={false}
            intervalDelay={0}
            precision={1}
            ref={clockRef}
            onPause={(delta) => handleStartPause(delta.total)}
            onStart={(delta) => handleStartPause(delta.total)}
            quarter={quarter}
            onComplete={() => setTime(0)}
         />
      </div>
   )
}

const renderer = ({ minutes, seconds, milliseconds, completed, props }) => {
   if (completed) {
      // Render a completed state
      return (<div>
         <h2>Final</h2>
      </div>)
   } else {
      // Render a countdown
      return <h2>Q{props.quarter} - {minutes}:{seconds}:{milliseconds / 100}</h2>;
   }
}

const mapStateToProps = (state) => ({
   quarter: state.game.quarter,
})

const mapDispatchToProps = (dispatch) => ({
   setTime: (time) => dispatch(setTime(time)),
   toggleTimeRunning: () => dispatch(toggleTimeRunning())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameTime)