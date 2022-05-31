import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { NewsSection } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewsSection/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
