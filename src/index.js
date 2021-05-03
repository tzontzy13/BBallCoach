import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App.container'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

// First React component to be rendered when application is started
// Provider = hooks Redux to application (allows subscription to redux state in any component)
// Browser Router = allows for setting Routes and navigating between them

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <AppContainer />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
   ,
   document.getElementById('root')
);
