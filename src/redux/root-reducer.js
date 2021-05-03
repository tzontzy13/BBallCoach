import { combineReducers } from 'redux';

import userReducer from './user/user.reducer'
import teamReducer from './team/team.reducer'
import gameReducer from './game/game.reducer'

// developed using the redux documentation - this code is standard for almost all react redux projects
// https://redux.js.org/api/api-reference

// combine user, team and game reducers

const rootReducer = combineReducers({
   user: userReducer,
   team: teamReducer,
   game: gameReducer
})

export default rootReducer