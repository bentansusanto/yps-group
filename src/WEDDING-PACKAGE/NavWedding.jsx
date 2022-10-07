import React from 'react'
import { Link } from 'react-router-dom'
const NavWedding = () => {
  return (
    <div>
        <nav className='navbar mx-20 py-3'>
        <Link to="/" className='logo text-[2.5rem]'>
            Wedding Package
        </Link>
      </nav>
    </div>
  )
}

export default NavWedding