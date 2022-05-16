import React from "react";

const UserContext = React.createContext({
    userType: null,
    setUserType: (userType) => {},
    currentUser: null,
    setCurrentUser: (currentUser) => {}
});

export default UserContext;