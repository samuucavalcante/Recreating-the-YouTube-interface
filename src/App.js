import React from 'react';

import Router from './routes';

import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/materialui';

const App = () => (
  <ThemeProvider theme={theme} >
    <Router />
  </ThemeProvider>
)


export default App;
