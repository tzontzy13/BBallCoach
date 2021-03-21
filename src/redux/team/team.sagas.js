import { eventChannel } from '@redux-saga/core'
import { all, takeLatest, call, put, take } from 'redux-saga/effects'

import { firestore, auth, convertCollectionsSnapshotToList } from '../../firebase/firebase.utils'

import { fetchTeamSuccess, fetchTeamFailure } from './team.actions'

import TeamActionTypes from './team.types'

export function* fetchTeamAsync() {

   const userRef = firestore.collection('users').doc(auth.currentUser.uid)

   try {
      // const snapshot = yield userRef.get()

      // const teamData = yield snapshot.data().team
      // const gameData = yield snapshot.data().games

      // const collectionsMap = yield call(convertCollectionsSnapshotToList, snapshot)

      // yield put(fetchTeamSuccess({ ...teamData, history: gameData }))


      const channel = eventChannel(emit => userRef.onSnapshot(emit))
      while (true) {
         const data = yield take(channel)
         const teamData = data.data().team
         const gameData = data.data().games
         yield put(fetchTeamSuccess({ ...teamData, history: gameData }))
         // console.log(data.data())
      }

   } catch (err) {
      // console.log(err)
      yield put(fetchTeamFailure(err.message))
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