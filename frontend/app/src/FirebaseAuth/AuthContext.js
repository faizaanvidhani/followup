import React, { useContext, useState, useEffect } from 'react'
import { auth } from './Firebase'

const AuthContext = React.createContext("");

export function useAuth() {
    console.log("printing context");
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState("");
    const [loading, setLoading] = useState(true);

    function signup1(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            setLoading(false);
            setCurrentUser(user);
        })
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        login,
        signup1,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
