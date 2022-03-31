import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/globalStyle';
import { theme } from './assets/styles/theme';
import { Path } from './components/molecules/path/Path';
import { TopBar } from './components/molecules/topBar/TopBar';
import { Form } from './components/organisms/Form';
import { Footer } from './components/atoms/footer/Footer';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopBar />
      <Path />
      <Form />
      <Footer />
    </ThemeProvider>
  );
};
