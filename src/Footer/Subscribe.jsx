import React from 'react'

const Subscribe = ({social}) => {
  return (
    <div className=''>
      <div className=" subscribe">
        <h4 className='font-semibold text-[1.2rem]'>Follow Us</h4>
        <form action="/" className='my-5 bg-[#f5f5f5] py-3 px-5 space-x-4 rounded-[50px] md:w-[24.5rem] w-[22.5rem]'>
            <input type="email" placeholder='Enter your email here' className='bg-transparent outline-none text-[.9rem]' />
            <button type='submit' className='bg-[#E7D2BF] py-3 md:px-10 px-6 rounded-[50px] font-medium'>Subscribe</button>
        </form>
      </div>
      <div className="social flex space-x-3">
        {
            social.map((val,idx) =>(
                
                    <a key={idx} href={val.link}>
                        <img src={val.icon} alt="" />
                    </a>
            ))
        }
      </div>
    </div>
  )
}

export default Subscribe
