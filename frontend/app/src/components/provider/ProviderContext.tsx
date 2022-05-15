import { createContext } from 'react';

const providerContext = createContext({
    currentUser: null,
    setCurrentUser: (user: any) => {}
});

export default providerContext;