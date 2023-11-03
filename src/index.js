import { ThemeProvider, createTheme } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from 'routes';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
