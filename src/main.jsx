import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styling/style.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

// RTL
import {createTheme, ThemeProvider} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: 'rtl',
});

AOS.init({
  duration : 1000
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
)
