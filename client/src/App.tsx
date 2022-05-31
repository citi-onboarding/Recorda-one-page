import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { NewsSection } from './pages';
import { FeedbackSection } from './pages'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewsSection/>
      <FeedbackSection/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
