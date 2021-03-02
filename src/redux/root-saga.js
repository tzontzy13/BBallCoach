import { all, call } from 'redux-saga/effects'

import { shopSagas } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'
import { teamSagas } from './team/team.sagas'
import { gameSagas } from './game/game.sagas'

export default function* rootSaga() {
   yield all([
      call(shopSagas),
      call(userSagas),
      call(cartSagas),
      call(teamSagas),
      call(gameSagas)
   ])
}