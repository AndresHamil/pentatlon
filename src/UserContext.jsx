import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Andres', email: 'andres@gmail.com' });

  const greetUser = () => {
    alert(`Hola, ${user.name}!`);
  };

  const AuthorizeUser = () => {
    console.log('Hola')
  }

  const value = {
    user,
    setUser,
    greetUser,
    AuthorizeUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};