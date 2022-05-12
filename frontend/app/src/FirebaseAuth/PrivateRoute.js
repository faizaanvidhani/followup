import React, { useContext } from 'react'
import { Route, Redirect, Navigate } from 'react-router-dom'
import { useAuth } from '../FirebaseAuth/AuthContext'
import UserContext from '../UserContext';

export default function PrivateRoute({ children }) {
    const {currentUser} = useContext(UserContext);
    return (
        currentUser ? children : <Navigate to="/login" />
    )
}