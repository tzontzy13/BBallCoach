import React, { useEffect } from 'react';
import './App.css';

import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInUp from './pages/sign-in-up/sign-in-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import WelcomePage from './pages/welcome/welcome.component'
import TeamPage from './pages/team/team.component'

import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selector'
import { checkUserSession } from './redux/user/user.actions'

const App = ({ checkUserSession, currentUser }) => {

   useEffect(() => {
      checkUserSession()
   }, [checkUserSession])

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
            <Route
               // exact
               path='/team'
               render={() => currentUser ? <TeamPage /> : <Redirect to='/signin' />}

            />
         </Switch>
      </div>
   );

}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)