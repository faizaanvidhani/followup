import React from "react";

const UserContext = React.createContext({
    currentUser: null,
    setCurrentUser: (user) => {}
});

export default UserContext;