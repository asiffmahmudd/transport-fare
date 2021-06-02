import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHNTGN1dS_zJsyqHzixgqUMTppCVuu09A",
    authDomain: "transport-fare-61692.firebaseapp.com",
    projectId: "transport-fare-61692",
    storageBucket: "transport-fare-61692.appspot.com",
    messagingSenderId: "506498094662",
    appId: "1:506498094662:web:8d2e6e9954dec08993dc47"
};

let app;

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

export const auth = app.auth()
export default app