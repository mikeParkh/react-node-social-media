import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

type AppContextType = {
  count: number;
  increment: () => void;
};

type AppContextProviderProps = {
  children: ReactNode
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <AppContext.Provider value={{ count, increment }}>
      {children}
    </AppContext.Provider>
  );
};
