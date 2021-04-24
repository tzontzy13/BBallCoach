import { eventChannel } from '@redux-saga/core'
import { all, takeLatest, call, put, take } from 'redux-saga/effects'

import { firestore, auth } from '../../firebase/firebase.utils'

import { fetchTeamSuccess, fetchTeamFailure, setTeamChecked } from './team.actions'

import TeamActionTypes from './team.types'

export function* fetchTeamAsync() {

   const userRef = firestore.collection('users').doc(auth.currentUser.uid)

   try {

      const channel = eventChannel(emit => userRef.onSnapshot(emit))
      while (true) {
         const data = yield take(channel)
         const teamData = data.data().team
         const gameData = data.data().games
         const mlStats = data.data().mlStats
         yield put(fetchTeamSuccess({ ...teamData, history: gameData, mlStats: mlStats }))
         yield put(setTeamChecked(true))
      }

   } catch (err) {
      yield put(fetchTeamFailure(err.message))
      yield put(setTeamChecked(true))
   }
}

export function* fetchTeamStart() {
   yield takeLatest(TeamActionTypes.FETCH_TEAM_START, fetchTeamAsync)
}

export function* teamSagas() {
   yield all([
      call(fetchTeamStart)
   ])
}