import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const darkTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DA1F2',
      darker: '#053e85',
    },
    neutral: {
      main: '#222',
      contrastText: '#fff',
    },
    white: {
      main : '#fff',
    },
  },
});

const lightTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#1DA1F2',
    },
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
    white: {
      main : '#fff',
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
