import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import GlobalStyled from './styles/GlobalStyled';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { store } from './store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import {CookiesProvider} from 'react-cookie';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyled />
          <App />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </CookiesProvider>
  // </React.StrictMode>
);
