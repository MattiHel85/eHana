import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATrTVVB7jKL7wljQRWt5rkLimc8uAjGlI",
    authDomain: "ehana-9df1d.firebaseapp.com",
    projectId: "ehana-9df1d",
    storageBucket: "ehana-9df1d.appspot.com",
    messagingSenderId: "273780324092",
    appId: "1:273780324092:web:c17c7451da4683aa338979",
    measurementId: "G-ZM98GBBPKS"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };