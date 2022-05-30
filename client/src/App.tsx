import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Initial } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Initial></Initial>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
