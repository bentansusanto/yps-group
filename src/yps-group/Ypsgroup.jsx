import React from 'react'
import Aboutsection from './Aboutsection'
import Category from './Category'
import Heroyps from './Heroyps'
import Navyps from './Navyps'
import Serviceyps from './Serviceyps'

const Ypsgroup = () => {
  return (
    <div>
      <Navyps/>
      <Heroyps/>
      <Serviceyps/>
      <Aboutsection/>
      <Category/>
    </div>
  )
}

export default Ypsgroup
