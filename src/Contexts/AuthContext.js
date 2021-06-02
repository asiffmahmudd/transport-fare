import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import { auth } from "../firebaseConfig";

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    
    const [loggedInUser, setLoggedInUser] = useState();
    const [loading, setLoading] = useState(true);

    const formatUser = (user) => ({
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        uid: user.uid,
    });

    const handleUserLogin = (socialNetwork) => {
        let provider;
        if(socialNetwork === "google"){
            provider = new firebase.auth.GoogleAuthProvider();
        }
        else if(socialNetwork === "facebook"){
            provider = new firebase.auth.FacebookAuthProvider();
        }
        return auth.signInWithPopup(provider)
        .then((result) => {
            setLoggedInUser(formatUser(result.user));
        }).catch((error) => {
            alert(error.message);
        });
    }

    const handleUserLogout = () => {
        return auth.signOut().then(() => {
            return {};
        }).catch((error) => {
            alert(error.message);
        });
    }

    const handleEmailSignup = (email, password) =>{
        return auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            setLoggedInUser(formatUser(user));
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    const updateName = (name) => {
        var user = auth.currentUser;
    
        return user.updateProfile({
            displayName: name
            }).then(function() {
                setLoggedInUser(formatUser(user));
            }).catch(function(error) {
                alert(error.message);
        });
    }

    const handleEmailLogin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            setLoggedInUser(formatUser(user));
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            let currentUser;
            if(user){
                currentUser = formatUser(user);
            }
            setLoggedInUser(currentUser);
            setLoading(false);
        })

        return unsubscribe;
    },[])

    const value = {loggedInUser, handleEmailLogin, handleEmailSignup, updateName, handleUserLogin, handleUserLogout}

    return (
        <AuthContext.Provider value={value}>
            {
                !loading && children
            }
        </AuthContext.Provider>
    )
}
