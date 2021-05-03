import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from './config'

const config = firebaseConfig

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`)

   const snapshot = await userRef.get()

   if (!snapshot.exists) {
      const { displayName, email } = userAuth
      const createdAt = new Date()

      try {
         await userRef.set({
            displayName, email, createdAt, ...additionalData
         })
      } catch (err) {
         console.log('error creating user', err)
      }
   }

   return userRef
}

export const addCollectionAndDocumentsToUser = async (collectionKey, userKey, objectsToAdd, teamName) => {
   const userRef = firestore.collection(collectionKey).doc(userKey)

   return await userRef
      .update(
         { 'team': { 'players': objectsToAdd, 'teamName': teamName } }
      )
      .then()
      .catch(err => console.log(err))
}

const getFireStore = () => { return firestore; };
const getAuth = () => { return auth; };

export const saveGameBoxScoreToUser = async (collectionKey, boxScore, homeScore, awayScore) => {
   const userRef = getFireStore()
      .collection(collectionKey)
      .doc(getAuth().currentUser.uid)

   const createdAt = new Date()

   const newGame = { finishedAt: createdAt, boxScore: boxScore, homeScore: homeScore, awayScore: awayScore }

   return await userRef
      .update(
         { 'games': firebase.firestore.FieldValue.arrayUnion(newGame) }
      )
      .then()
      .catch(err => console.log(err))
}

export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         unsubscribe()
         resolve(userAuth)
      }, reject)
   })
}

// quick add to db - used in testing
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey)

   const batch = firestore.batch()

   objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
   })

   return await batch.commit()
}

// testing
export async function init() {
   firebase.initializeApp(config)
}

export const saveGameBoxScoreToUser2 = async (collectionKey, games) => {
   const userRef = firestore
      .collection(collectionKey)
      .doc(auth.currentUser.uid)

   // console.log(game)

   // const createdAt = new Date()

   // const newGame = { finishedAt: createdAt, boxScore: boxScore, homeScore: homeScore, awayScore: awayScore }

   const batch = firestore.batch()

   for (const game of games) {
      batch.update(userRef, { 'games': firebase.firestore.FieldValue.arrayUnion(game) })
   }

   await batch.commit()

   // return await userRef
   //    .update(
   //       { 'games': firebase.firestore.FieldValue.arrayUnion(game) }
   //    )
   //    .then()
   //    .catch(err => console.log(err))
}