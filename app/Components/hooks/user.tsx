import React, { createContext, useMemo, useState } from 'react';
import { providerValues, userContextProps, userState } from './types';

export const UserContext = createContext<providerValues>({});

const UserProvider: React.FC<userContextProps> = ({ children }) => {
    const [user, setUser] = useState<userState>({});
    const [userArray, setUserArray] = useState<userState[]>([]);
    const [userLoged, setUserLoged] = useState<boolean>(false);

    const consultStorage: (userProp?: string, passProp?: string) => boolean = (userProp, passProp): boolean => {
        let userValidate = userProp ? userProp : user.user;
        let passValidate = passProp ? passProp : user.password;

        if (userArray.length > 0) {
            //Find user
            let isUser = userArray.find((user) => user.user === userValidate && user.password === passValidate);
            return isUser ? true : false;
        }
        return false;
    }

    const login = (): boolean => {
        if (consultStorage()) {
            setUserLoged(true);
            return true;
        }
        return false;
    }

    const value = {
        user,
        setUser,
        userArray,
        setUserArray,
        userLoged,
        setUserLoged,
        consultStorage,
        login
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;