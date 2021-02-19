import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOc03a_pq4Eq8Q9CNUbOZDLg_RLHrtFs4",
    authDomain: "marioplan-6fa19.firebaseapp.com",
    databaseURL: "https://marioplan-6fa19.firebaseio.com",
    projectId: "marioplan-6fa19",
    storageBucket: "marioplan-6fa19.appspot.com",
    messagingSenderId: "891517354124",
    appId: "1:891517354124:web:277abaf5fab85ddc167ba9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;