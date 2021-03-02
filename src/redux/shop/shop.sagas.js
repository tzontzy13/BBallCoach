import { all, takeLatest, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {

   try {
      const collectionRef = firestore.collection('collections')
      const snapshot = yield collectionRef.get()
      const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
      console.log(collectionsMap)
      yield put(fetchCollectionsSuccess(collectionsMap))
   } catch (err) {
      yield put(fetchCollectionsFailure(err.message))
   }

   // collectionRef.get().then(snapshot => {
   //    const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
   //    dispatch(fetchCollectionsSuccess(collectionsMap))
   // }).catch(err => dispatch(fetchCollectionsFailure(err.message)))

}

export function* fetchCollectionsStart() {
   yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
   yield all([
      call(fetchCollectionsStart)
   ])
}