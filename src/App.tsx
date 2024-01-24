import React from 'react';
import { CssBaseline } from '@mui/material';
import { Router } from 'routing'
import { Theme } from 'styles';
import { AppContextProvider } from 'context';

const App = () => (
  <Theme>
    <AppContextProvider>
      <CssBaseline />
      <Router />
    </AppContextProvider>
  </Theme>
);

export default App;
