"use client"
import React, { useContext, createContext, useState } from 'react';
import { useLoader } from './LoaderContext';
import Loader from '../components/Loader';

export type UserContent = {
  
};

interface UserDataContext {
  user?: UserContent; 
  setuser?: React.Dispatch<React.SetStateAction<UserContent | undefined>>;
}

export const Data = createContext<UserDataContext>({});

const AuthContext = ({ children }: any) => {
  const [user, setuser] = useState<UserContent | undefined>(undefined);
  const { isLoading } = useLoader();

  const contextValue: UserDataContext = {
    user,
    setuser,
  };
  
  if(isLoading) return <Loader />

  return (
    <Data.Provider value={contextValue}>
      {children}
    </Data.Provider>
  );
};

export const userData = () => {
  return useContext(Data);
};

export default AuthContext;
