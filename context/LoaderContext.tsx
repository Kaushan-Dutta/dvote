"use client"
import React, { useState, useContext, createContext } from "react";

interface LoaderContextType  {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const Data = createContext<LoaderContextType>({} as LoaderContextType);

const LoaderContext = ({children}:any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const value: LoaderContextType = {
    isLoading,
    setIsLoading,
  };
  return(
    <Data.Provider value={value}>
        {children}
    </Data.Provider>
  )
};

export const useLoader = () => useContext(Data);

export default LoaderContext;
