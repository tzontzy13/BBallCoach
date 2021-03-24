import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import teamReducer from './team/team.reducer'
import gameReducer from './game/game.reducer'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['']
}

const rootReducer = combineReducers({
   user: userReducer,
   team: teamReducer,
   game: gameReducer
})

export default persistReducer(persistConfig, rootReducer)