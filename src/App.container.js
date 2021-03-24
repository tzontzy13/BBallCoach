import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { checkUserSession } from './redux/user/user.actions'

import App from './App'

// App container is a functional component that checks if a user is signed in
// and then renders the App component

// This WHOLE app is built using React Functional Components, useEffect = ComponentDidMount in React Class Components

const AppContainer = ({ checkUserSession }) => {

   useEffect(() => {
      checkUserSession()
   }, [checkUserSession])

   return (
      <div className="App-container" >
         <App />
      </div>
   );

}

const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(null, mapDispatchToProps)(AppContainer)