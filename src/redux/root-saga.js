import { all, call } from 'redux-saga/effects'

import { userSagas } from './user/user.sagas'
import { teamSagas } from './team/team.sagas'
import { gameSagas } from './game/game.sagas'

export default function* rootSaga() {
   yield all([
      call(userSagas),
      call(teamSagas),
      call(gameSagas)
   ])
}