import React from 'react'
import AboutLogo from '../assets/bg-home-about.png'

const Aboutsection = () => {
    const title = 'About Us';
    const content = ['YPS Group is a business group engaged in providing the needs / needs of wedding parties, especially Batak Traditional weddings.Over time,','YPS Group experienced significant business growth, currently YPS Group houses several business units, including PEO, Maestro Photo, Deandra Decoration, Ondo-Entertainment, Sewa Costume Adat batak.']

  return (
    <div className='md:mx-20 mx-8 mb-40'>
        <div className="about-section grid md:grid-cols-2 grid-cols-1 gap-10">
            <img src={AboutLogo} alt="" className='lg:w-[90%] w-auto' />
            <div className="about-content">
                <h2 className='lg:text-[4.5rem] md:text-[4rem] text-[3.8rem]'>{title}</h2>
                <div className='space-y-2'>
                    {
                        content.map((val, idx) => (
                            <p key={idx} className="text-[.9rem] lg:w-[80%] w-full text-[#a4a4a4]">{val}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutsection
