import React, { useEffect } from 'react'
import './team-select.styles.scss'

import { connect } from 'react-redux'
import { setBench } from '../../redux/game/game.actions'
import { withRouter } from 'react-router-dom'

import { setOpponentName } from '../../redux/game/game.actions'

import PlayerList from '../player-list/player-list.component'
import CustomButton from '../custom-button/custom-button.component'
import PlayerAdd from '../player-add/player-add.component'

const TeamSelect = ({ players, history, starting, setBench, setOpponentName }) => {

   useEffect(() => {
      setBench(players)

      return function cleanup() {
      }
   }, [])

   const handleStart = () => {
      if (starting.length === 5) {
         const opName = prompt('Opponent name:')
         if (opName) {
            setOpponentName(opName)
            history.push('/team/game')
         }
      } else {
         alert('You need 5 players to start the game')
      }
   }

   return (
      <div className='team-select'>
         <div className='team-select-list'>
            <h3>Select the starting 5 from the following players:</h3>
            <PlayerList players={players} />
         </div>
         <PlayerAdd />
         <CustomButton onClick={() => handleStart()}>Start game</CustomButton>
         <h2>Only add 5 players. Type in their number, then press Add Player or the Enter key</h2>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   setBench: (bench) => dispatch(setBench(bench)),
   setOpponentName: name => dispatch(setOpponentName(name))
})

const mapStateToProps = (state) => ({
   players: state.team.players,
   starting: state.game.starting
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamSelect))