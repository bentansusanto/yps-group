import React from 'react'
import './yps.css'

const Heroyps = () => {
    const title = "We Help Make Your Dreams Come True.";
    const subtitle = "Leave it to us, we will sort things out."
  return (
    <div>
      <div className="heros w-full h-[100vh] -mt-24">
        <div className="content text-center pt-64 text-white md:mx-20 mx-10">
            <h1 className='md:text-[6rem] text-[4rem] lg:w-[50%] mx-auto'>{title}</h1>
            <h4 className='lg:text-[1.5rem] text-[1.2rem] font-medium w-[70%] mx-auto'>{subtitle}</h4>
        </div>
      </div>
    </div>
  )
}
export default Heroyps
