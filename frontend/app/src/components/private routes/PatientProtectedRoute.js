import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../../UserContext';

export default function PatientProtectedRoute({ children }) {
    const {userType, currentUser} = useContext(UserContext);
    console.log(userType);
    return (
        currentUser && userType == "Patient" ? children : <Navigate to="/login" />
    )
}