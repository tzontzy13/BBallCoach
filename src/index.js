import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App.container'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'

import { PersistGate } from 'redux-persist/integration/react'

// First React component to be rendered when application is started
// Provider = hooks Redux to application (allows us to use redux state anywhere in the app)
// Browser Router = allows for setting Routes and navigating between them
// Persist Gate = allows us to rehydrate Redux store when page refreshes (keep state between refresh)

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <PersistGate persistor={persistor}>
               <AppContainer />
            </PersistGate>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
   ,
   document.getElementById('root')
);
