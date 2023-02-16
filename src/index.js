import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Theme/theme';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
    {/* </PersistGate> */}
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
  
);
