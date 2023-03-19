import { ThemeProvider } from 'styled-components';

import { Blog } from './pages/Blog';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Blog />
      <GlobalStyle />
    </ThemeProvider>
  );
};
