import React from 'react'
import BgAboutPeo from '../assets/bg-about-peo.jpg'
import './peo.css'
const AboutPeo = () => {
    const title = 'About Us';
    const content = ["YPS Group is a business group engaged in providing the needs / needs of wedding parties, especially Batak Traditional weddings.","YPS Group experienced significant business growth, currently YPS Group houses several business units, including PEO, Maestro Photo, Deandra Decoration, Ondo-Entertainment, Sewa Costume Adat batak."] 
  return (
    <div className='w-full'>
        <div className="about-section lg:w-[94%] w-full md:h-[70vh] h-[90vh] float-right py-10 md:px-20 px-0 mb-40">
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 lg:mx-40 md:mx-20 mx-20 md:mt-20 mt-8'>
            <img src={BgAboutPeo} alt="" className='lg:w-[80%] md:w-[70%] w-[50%] md:mx-0 mx-auto '/>
            <div className="describe">
                <h2 className='text-[4.5rem] md:text-left text-center'>{title}</h2>
                {
                    content.map((val,idx) => (
                        <p key={idx} className="text-center md:text-left text-[.9rem] lg:w-[90%]">{val}</p>
                    ))
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPeo