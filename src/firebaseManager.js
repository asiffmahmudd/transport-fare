import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";

export const initializeLoginFrameWork = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleUserLogin = (socialNetwork) => {
    let provider;
    if(socialNetwork === "google"){
        provider = new firebase.auth.GoogleAuthProvider();
    }
    else if(socialNetwork === "facebook"){
        provider = new firebase.auth.FacebookAuthProvider();
    }
    return firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        return result.user;
    }).catch((error) => {
        alert(error.message);
    });
}

export const handleUserLogout = () => {
    return firebase.auth().signOut().then(() => {
        return {};
    }).catch((error) => {
        alert(error.message);
    });
}

export const handleEmailSignup = (email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        return user;
    })
    .catch((error) => {
        alert(error.message);
    });
}

export const updateName = (name) => {
    var user = firebase.auth().currentUser;

    return user.updateProfile({
        displayName: name
        }).then(function() {
            console.log("name updated");
            return user;
        }).catch(function(error) {
            alert(error.message);
    });
}

export const handleEmailLogin = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        return user;
    })
    .catch((error) => {
        alert(error.message);
    });
}