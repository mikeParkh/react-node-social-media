import React, { FC, ReactNode, createContext, useContext, useState, useCallback } from 'react';

type AsideBarStateType = {
  isOpen: boolean;
}

type AsideBarContextType = AsideBarStateType & {
  toggleAsideBar: () => void;
  openAsideBar: () => void;
  closeAsideBar: () => void;
}

type AppContextType = {
  count: number;
  increment: () => void;
  asideBar: AsideBarContextType;
};

type AppContextProviderProps = {
  children: ReactNode
}

const asideBarStateDefaultValue: AsideBarStateType = {
  isOpen: false,
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
  const [asideBarState, setAsideBarState] = useState<AsideBarStateType>(asideBarStateDefaultValue);

  const handleAsideBarVisibility = useCallback((isOpen?: boolean) => () => {
    setAsideBarState((state) => ({ ...state, isOpen: isOpen || !state.isOpen }))
  }, []);

  const asideBarContext = {
    ...asideBarState,
    toggleAsideBar: handleAsideBarVisibility(),
    openAsideBar: handleAsideBarVisibility(true),
    closeAsideBar: handleAsideBarVisibility(false),
  }

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <AppContext.Provider value={{ count, increment, asideBar: asideBarContext }}>
      {children}
    </AppContext.Provider>
  );
};
