import { all, takeLatest, call, put } from 'redux-saga/effects'

import { firestore, auth, convertCollectionsSnapshotToList } from '../../firebase/firebase.utils'

import { fetchTeamSuccess, fetchTeamFailure } from './team.actions'

import TeamActionTypes from './team.types'

export function* fetchTeamAsync() {

   try {
      const userRef = firestore.collection('users').doc(auth.currentUser.uid)
      //.collection('team')
      const snapshot = yield userRef.get()

      const teamData = yield snapshot.data().team
      const gameData = yield snapshot.data().games
      // console.log(gameData)

      // const collectionsMap = yield call(convertCollectionsSnapshotToList, snapshot)

      yield put(fetchTeamSuccess(teamData))

   } catch (err) {
      // console.log(err)
      yield put(fetchTeamFailure(err.message))
   }

   // try {
   //    const collectionRef = firestore.collection('collections')
   //    const snapshot = yield collectionRef.get()
   //    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
   //    yield put(fetchCollectionsSuccess(collectionsMap))
   // } catch (err) {
   //    yield put(fetchCollectionsFailure(err.message))
   // }

   // collectionRef.get().then(snapshot => {
   //    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
   //    dispatch(fetchCollectionsSuccess(collectionsMap))
   // }).catch(err => dispatch(fetchCollectionsFailure(err.message)))

}

export function* fetchTeamStart() {
   yield takeLatest(TeamActionTypes.FETCH_TEAM_START, fetchTeamAsync)
}

export function* teamSagas() {
   yield all([
      call(fetchTeamStart)
   ])
}