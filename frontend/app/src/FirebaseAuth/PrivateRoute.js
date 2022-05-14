import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../UserContext';

export default function PrivateRoute({ children }) {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    return (
        currentUser ? children : <Navigate to="/login" />
    )
}