import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import teamReducer from './team/team.reducer'
import gameReducer from './game/game.reducer'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: []
}

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   directory: directoryReducer,
   shop: shopReducer,
   team: teamReducer,
   game: gameReducer
})

export default persistReducer(persistConfig, rootReducer)