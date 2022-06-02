import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { NewsSection, FooterSection } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      
      <FooterSection/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
