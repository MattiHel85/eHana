import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGKT6AJTIN-thb1k5nU3WTTRjiuQbPRDQ",
    authDomain: "ehanna-9b620.firebaseapp.com",
    projectId: "ehanna-9b620",
    storageBucket: "ehanna-9b620.appspot.com",
    messagingSenderId: "844558022661",
    appId: "1:844558022661:web:c0274dffb56047b1aa046c",
    measurementId: "G-Y70DF9TV38"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };