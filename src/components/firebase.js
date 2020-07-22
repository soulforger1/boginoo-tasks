import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAObFoYNrokH7dIfbD0oQJLjO8MyBF4avE',
  authDomain: 'nest-boginoo.firebaseapp.com',
  databaseURL: 'https://nest-boginoo.firebaseio.com',
  projectId: 'nest-boginoo',
  storageBucket: 'nest-boginoo.appspot.com',
  messagingSenderId: '520778865460',
  appId: '1:520778865460:web:9ff60d79a6268b397b6361',
  measurementId: 'G-7YY170XFMC'
}

export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();