import React from 'react'

import { connect } from 'react-redux'

import './court-o.styles.scss'

import CourtBtnD from '../court-btn-d/court-btn-d.component'

import CourtBtnO from '../court-btn-o/court-btn-o.component'

const CourtO = () => {

   const bgurl = '/court2.jpg'

   return (
      <div className="court">
         <img
            className='court-image'
            style={{
               backgroundImage: `url(${bgurl})`
            }}
            alt=''
         />

         <div className="p3L court-btn-pos"><CourtBtnO name='p3L' /></div>
         <div className="p3R court-btn-pos"><CourtBtnO name='p3R' /></div>
         <div className="p3C court-btn-pos"><CourtBtnO name='p3C' /></div>
         <div className="p3CL court-btn-pos"><CourtBtnO name='p3CL' /></div>
         <div className="p3CR court-btn-pos"><CourtBtnO name='p3CR' /></div>
         <div className="FT court-btn-pos"><CourtBtnO name='FT' /></div>
         <div className="p2C court-btn-pos"><CourtBtnO name='p2C' /></div>
         <div className="p2CL court-btn-pos"><CourtBtnO name='p2CL' /></div>
         <div className="p2L court-btn-pos"><CourtBtnO name='p2L' /></div>
         <div className="p2R court-btn-pos"><CourtBtnO name='p2R' /></div>
         <div className="p2CR court-btn-pos"><CourtBtnO name='p2CR' /></div>
         <div className="dunk court-btn-pos"><CourtBtnO name='p2dunk' /></div>
      </div>
   )
}

export default connect()(CourtO)