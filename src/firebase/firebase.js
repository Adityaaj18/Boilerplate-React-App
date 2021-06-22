import { firebase } from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';

const config = {
  apiKey: "AIzaSyDugl7omSxLoS59e6pfpX-vBp3KE5tn57k",
  authDomain: "recipe-app-698ef.firebaseapp.com",
  databaseURL: "https://recipe-app-698ef-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

