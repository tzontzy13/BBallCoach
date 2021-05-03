import { all, call } from 'redux-saga/effects'

import { userSagas } from './user/user.sagas'
import { teamSagas } from './team/team.sagas'

// developed using the redux documentation - this code is standard for almost all react redux projects
// https://redux.js.org/api/api-reference

// combine user and team sagas

export default function* rootSaga() {
   yield all([
      call(userSagas),
      call(teamSagas),
   ])
}