import React from 'react'
import BgAboutPeo from '../assets/bg-about-peo.jpg'
import './peo.css'
const AboutPeo = () => {
    const title = 'About Us';
    const content = ["YPS Group is a business group engaged in providing the needs / needs of wedding parties, especially Batak Traditional weddings.","YPS Group experienced significant business growth, currently YPS Group houses several business units, including PEO, Maestro Photo, Deandra Decoration, Ondo-Entertainment, Sewa Costume Adat batak."] 
  return (
    <div>
        <div className="about-section w-[94%] h-[70vh] float-right py-10 px-20 mb-52">
            <div className='grid grid-cols-2 gap-5 mx-40 mt-20'>
            <img src={BgAboutPeo} alt="" className='w-[80%]'/>
            <div className="describe">
                <h2 className='text-[4.5rem]'>{title}</h2>
                {
                    content.map((val,idx) => (
                        <p key={idx}>{val}</p>
                    ))
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPeo