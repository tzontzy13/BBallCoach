import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from './config'

const config = firebaseConfig

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey)

   const batch = firestore.batch()

   objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
   })

   return await batch.commit()
}

export const addCollectionAndDocumentsToUser = async (collectionKey, userKey, objectsToAdd, teamName) => {
   const userRef = firestore.collection(collectionKey).doc(userKey).collection('team')

   const batch = firestore.batch()

   const teamNameRef = userRef.doc('teamName')
   batch.set(teamNameRef, { teamName })

   objectsToAdd.forEach(obj => {
      const newDocRef = userRef.doc(`player${obj.playerName}`)
      batch.set(newDocRef, obj)
   })

   return await batch.commit()

}

export const addCollectionAndDocumentsToUser2 = async (collectionKey, userKey, objectsToAdd, teamName) => {
   const userRef = firestore.collection(collectionKey).doc(userKey)

   return await userRef
      .update(
         { 'team': { 'players': objectsToAdd, 'teamName': teamName } }
      )
      .then()
      .catch(err => console.log(err))
}

export const convertCollectionsSnapshotToMap = (collections) => {
   const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data()

      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
      }
   })

   return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   }, {})
}

export const convertCollectionsSnapshotToList = (collections) => {

   let teamNameOut = ''
   const transformedCollection = collections.docs.map(doc => {
      const { playerNumber, playerName, teamName } = doc.data()

      if (teamName) {
         teamNameOut = teamName
         return null
      } else {
         return {
            playerNumber,
            playerName
         }
      }
   })

   const transformedCollection2 = transformedCollection.filter(doc => doc)
   const toReturn = { players: transformedCollection2, teamName: teamNameOut }
   return toReturn
}

export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         unsubscribe()
         resolve(userAuth)
      }, reject)
   })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase