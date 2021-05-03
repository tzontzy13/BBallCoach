// copied the createUserProfileDocument from
// https://github.com/ZhangMYihua/lesson-30/blob/master/src/firebase/firebase.utils.js

// for the rest, I have used the Firebase documentation
// multiple links:

// Udemy. 2021. Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL). [ONLINE] Available at: https://www.udemy.com/course/complete-react-developer-zero-to-mastery/. [Accessed 11 Mar 2021].

// Firebase. 2021. Build Documentation  |  Firebase. [ONLINE] Available at: https://firebase.google.com/docs/build. [Accessed 02 Mar 2021].

// Firebase. 2021. Choose a Database: Cloud Firestore or Realtime Database  |  Firebase. [ONLINE] Available at: https://firebase.google.com/docs/database/rtdb-vs-firestore. [Accessed 02 Apr 2021].

// Create a New React App – React. 2021. Create a New React App – React. [ONLINE] Available at: https://reactjs.org/docs/create-a-new-react-app.html. [Accessed 02 Mar 2021].

// Firebase. 2021. Get Started with Firebase Authentication on Websites. [ONLINE] Available at: https://firebase.google.com/docs/auth/web/start#web-v8. [Accessed 02 Mar 2021].

// Firebase. 2021. Manage Users in Firebase. [ONLINE] Available at: https://firebase.google.com/docs/auth/web/manage-users. [Accessed 02 Apr 2021].

// Firebase. 2021. Authenticate Using Google Sign-In with JavaScript  |  Firebase. [ONLINE] Available at: https://firebase.google.com/docs/auth/web/google-signin. [Accessed 02 Mar 2021].

// Google Developers. 2021. OpenID Connect  |  Google Identity  |  Google Developers. [ONLINE] Available at: https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters. [Accessed 02 Mar 2021].

// Firebase. 2021. Get started with Cloud Firestore  |  Firebase. [ONLINE] Available at: https://firebase.google.com/docs/firestore/quickstart#node.js. [Accessed 02 Mar 2021].

// Firebase. 2021. Get started with Cloud Firestore Security Rules  |  Firebase. [ONLINE] Available at: https://firebase.google.com/docs/firestore/security/get-started. [Accessed 02 Mar 2021].

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

export const saveGameBoxScoreToUser = async (collectionKey, boxScore, homeScore, awayScore) => {
   const userRef = firestore
      .collection(collectionKey)
      .doc(auth.currentUser.uid)

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

// testing
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