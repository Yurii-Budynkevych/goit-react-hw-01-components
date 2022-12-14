import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import './index.css';

const theme = {
  colors: {
    gold: '#FFD700',
    tomato: 'tomato',
  },
  sizes: [12, 24, 36, 48],
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
