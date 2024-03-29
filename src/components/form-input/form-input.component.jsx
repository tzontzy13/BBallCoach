// copied code from
// https://github.com/ZhangMYihua/lesson-30/tree/master/src/components/form-input

import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
   <div className='group'>
      <input
         className='form-input'
         onChange={handleChange}
         {...otherProps}
      />
      {
         label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
               {label}
            </label>)
            :
            null
      }
   </div>
)

export default FormInput