import { createContext, useEffect, useState } from "react";
import React from 'react';
import RegisterAndLoginForm from './RegisterAndLoginForm'; // Adjust the path if necessary
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);
    useEffect(() => {
        axios.get('/profile', {withCredentials:true})
        .then(response => {
            setId(response.data.userId);
            setUsername(response.data.username);
        })
        .catch(error => {
            console.log('Error fetching profile: ', error);
        })
    }, []);

    return (
        <UserContext.Provider value={{username, setUsername, id, setId}}>
            {children}
        </UserContext.Provider>
    );

}