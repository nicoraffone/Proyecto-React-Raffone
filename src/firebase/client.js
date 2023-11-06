import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZBak_Rfzf7jQPUo0JbFOlnYTOw-XkD9c",
    authDomain: "proyecto-react-raffone.firebaseapp.com",
    projectId: "proyecto-react-raffone",
    storageBucket: "proyecto-react-raffone.appspot.com",
    messagingSenderId: "1086573844384",
    appId: "1:1086573844384:web:49e4fa7abe03d3fef236c5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);