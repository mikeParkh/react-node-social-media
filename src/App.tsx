import React from 'react';
import { Home } from 'pages';
import { Theme } from 'styles';
import { AppContextProvider } from 'context';

const App = () => {
  return (
    <Theme>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </Theme>
  );
}

export default App;
