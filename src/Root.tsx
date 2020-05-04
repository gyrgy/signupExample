import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'src/store/configureStore';
import { AppRouter } from 'src/router/router';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'src/theme/theme';
import { CssBaseline } from '@material-ui/core';

const Store = configureStore();

const Root = () => (
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppRouter />
      </CssBaseline>
    </ThemeProvider>

  </Provider>
);

export default Root;
