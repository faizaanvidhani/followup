import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../../UserContext';

export default function ProviderProtectedRoute({ children }) {
    const {userType, currentUser} = useContext(UserContext);
    return (
        currentUser && userType == "Provider" ? children : <Navigate to="/" />
    )
}