import React from 'react';
import './App.css';

import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'
import SignInUp from './pages/sign-in-up/sign-in-up.component'
import WelcomePage from './pages/welcome/welcome.component'
import TeamPageContainer from './pages/team/team.container'

import Spinner from './components/with-spinner/with-spinner.component'

import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selector'

// App renders the Header and a Switch Route
// The header is always present
// Only one of the Routes in Switch is rendered at any given route

// developed using
// ReactRouterWebsite. 2021. React Router: Declarative Routing for React.js. [ONLINE] Available at: https://reactrouter.com/web/guides/quick-start. [Accessed 02 Mar 2021].
const App = ({ currentUser }) => {

   return (
      <div className="App" >
         <Header />
         <Switch>
            <Route
               exact
               path='/'
               component={WelcomePage}
            />
            <Route
               exact
               path='/signin'
               render={() => currentUser ? (<Redirect to='/' />) : (<SignInUp />)}
            />
            <Route
               path='/team'
               render={() => currentUser ? <TeamPageContainer /> : <Redirect to='/signin' />}
            />
         </Switch>
      </div>
   );

}

// state for App - CurrentUser is user for conditional rendering
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
})

// state for Spinner. A spinner is rendered if the user has not yet been fetched / App is rendered if user has been fetched
const mapStateToPropsForSpinner = state => ({
   isLoading: !state.user.wasChecked,
})

// connect user to App
const AppConnectedToUser = connect(mapStateToProps)(App)

// connect App to Spinner
const AppWithSpinner = compose(connect(mapStateToPropsForSpinner), Spinner)(AppConnectedToUser)

export default AppWithSpinner