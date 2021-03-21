import React, { useEffect } from 'react';
// import { compose } from 'redux'

// import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { checkUserSession } from './redux/user/user.actions'
// import { selectWasChecked } from './redux/user/user.selector'

// import WithSpinner from './components/with-spinner/with-spinner.component'

import App from './App'

// const mapStateToProps = createStructuredSelector({
//    isLoading: state => !selectWasChecked(state)
// })

const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession()),
})

// const AppWithSpinner = compose(connect(mapStateToProps), WithSpinner)(App)

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

export default connect(null, mapDispatchToProps)(AppContainer)