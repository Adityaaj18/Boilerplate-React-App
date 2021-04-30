import { firebase } from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';

const config = {
  apiKey: "AIzaSyCgqJ32reST0kgVTTfIpCMmm0u8SzuJXew",
  authDomain: "expensify-944cc.firebaseapp.com",
  databaseURL: "https://expensify-944cc-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

