import React from 'react'
import { Link } from 'react-router-dom'
import './yps.css'
const Navyps = () => {
  return (
    <div>
      <nav className='navbar mx-20 py-3'>
        <Link to="/" className='logo text-[2.5rem]'>
            YPS Group
        </Link>
      </nav>
    </div>
  )
}

export default Navyps
