import firebase from "firebase";

import 'firebase/auth'
import 'firebase/database'

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyAXL1N-Y0Ov5qQMchgbzwnxcfVYpCxbksE",
    authDomain: "letmeask-2bdb9.firebaseapp.com",
    databaseURL: "https://letmeask-2bdb9-default-rtdb.firebaseio.com",
    projectId: "letmeask-2bdb9",
    storageBucket: "letmeask-2bdb9.appspot.com",
    messagingSenderId: "436327316956",
    appId: "1:436327316956:web:e2bf6fe5ca78855e712319"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }