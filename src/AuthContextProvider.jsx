import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export const AuthContext = createContext(null)
const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {

                setUser(currentUser)

            } else {
                setUser(null)
            }
        })
        // Clean up the subscription when the component unmounts
        return () => unsubscribe;
    }, []);

    const authInfo = { user, setUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;