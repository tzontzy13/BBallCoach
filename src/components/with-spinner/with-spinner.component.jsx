// copied code from
// https://github.com/ZhangMYihua/lesson-30/tree/master/src/components/sign-in

import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
   const Spinner = ({ isLoading, ...otherProps }) => {
      return isLoading ? (
         <SpinnerOverlay>
            <SpinnerContainer />
         </SpinnerOverlay>
      ) : (
         <WrappedComponent {...otherProps} />
      )
   }

   return Spinner
}

export default WithSpinner