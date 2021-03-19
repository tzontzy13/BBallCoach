import React from 'react';
import './App.css';

import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'
import SignInUp from './pages/sign-in-up/sign-in-up.component'
import WelcomePage from './pages/welcome/welcome.component'
import TeamPage from './pages/team/team.component'
import TeamPageContainer from './pages/team/team.container'

import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selector'

const App = ({ currentUser }) => {

   return (
      <div className="App" >
         <Header />
         <Switch>
            {/* <Route exact path='/homepage' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} /> */}
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
            {/* <Route
               // exact
               path='/team'
               render={() => currentUser ? <TeamPage /> : <Redirect to='/signin' />}
            /> */}
            <Route
               // exact
               path='/team'
               render={() => currentUser ? <TeamPageContainer /> : <Redirect to='/signin' />}
            />
         </Switch>
      </div>
   );

}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)