import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyCExfE1W69XwrUQ1MMF7e3gJioOCyp48aM',
    authDomain: 'skype-f343d.firebaseapp.com',
    databaseURL: 'https://skype-f343d.firebaseio.com',
    projectId: 'skype-f343d',
    storageBucket: 'skype-f343d.appspot.com',
    messagingSenderId: '606003139221',
  }
  firebase.initializeApp(config)
}

const fireDb = firebase.firestore()
const fireAuth = firebase.auth()

export default (context, inject) => {
  fireAuth.onAuthStateChanged((user) => {
    if (user) {
      context.store.dispatch('autoLogin', user.uid)
    }
  })
}

export { fireDb, fireAuth }
