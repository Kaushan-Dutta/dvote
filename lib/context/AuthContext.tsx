"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'

export type UserContent = {
  id: string;
  email: string;
  name: string;
  role: 'USER' | 'ADMIN'; 
};

interface UserDataContext {
  user?: UserContent | null; 
  setUser?: React.Dispatch<React.SetStateAction<UserContent | null>>; 
}

export const AuthContext = createContext<UserDataContext | null>(null); // Renamed context

const AuthProvider: React.FC = ({ children }:any) => {
  const [user, setUser] = useState<UserContent | null>(null); // Initialize as null

  useEffect(() => {
    const loadAuth=async()=>{
      const token = localStorage.getItem('verseToken');
      
      const storedUser=await axios.get('http://localhost:3000/api/verify',{
        headers:{
          'Authorization': 'Bearer ' +token,
        }
      })
      console.log(storedUser.data.user)
      // if (storedUser) {
      //   setUser(JSON.parse(storedUser)); 
      // }
    }
    loadAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;
