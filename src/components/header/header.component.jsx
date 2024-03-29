// copied code from
// https://github.com/ZhangMYihua/lesson-30/tree/master/src/components/header

import React from 'react'

import './header.styles.scss'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOutStart } from '../../redux/user/user.actions'

import { ReactComponent as Logo2 } from '../../assets/ball3.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ currentUser, signOutStart }) => (
   <div className='header'>
      <Link className='logo-container' to='/'>
         <Logo2 className='logo' />
      </Link>
      <div className='options'>
         <Link className='option' to='/team'>
            TEAM
         </Link>
         {
            currentUser
               ?
               <div className='option' onClick={signOutStart}>SIGN OUT</div>
               :
               <Link className='option' to='/signin'>SIGN IN</Link>
         }
      </div>
   </div>
)

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)