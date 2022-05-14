import React from "react";

const UserContext = React.createContext({
    userType: null,
    currentUser: null,
    setCurrentUser: (user) => {}
});

export default UserContext;