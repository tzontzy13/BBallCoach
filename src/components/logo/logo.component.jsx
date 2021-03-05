import React from 'react'

import './logo.styles.scss'

const Logo = () => {

   const bgurl = '/logo.png'

   return (
      <div className='logoo'>
         <div
            className='logoo-logo'
            style={{
               backgroundImage: `url(${bgurl})`
            }}
         />
      </div>
   )
}

export default Logo