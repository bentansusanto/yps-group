import React from 'react'
import './yps.css'
const Serviceyps = () => {
    const service =[
        {title:"The price is affordable", icon:'https://img.icons8.com/external-icongeek26-outline-icongeek26/50/000000/external-dollar-donation-and-charity-icongeek26-outline-icongeek26.png'},
        {title:"Complete vendor", icon:'https://img.icons8.com/external-sbts2018-outline-sbts2018/50/000000/external-wedding-valentines-day-sbts2018-outline-sbts2018.png'},
        {title:"Already trusted by many clients", icon:'https://img.icons8.com/external-line-lima-studio/50/000000/external-trust-motivation-line-lima-studio.png'}
    ]
  return (
    <div className='services -mt-24 mb-44'>
      <div className="service-item bg-white shadow-lg rounded-lg py-4 grid grid-cols-3 gap-5 lg:mx-80 md:mx-34 mx-8 justify-items-center mt-10 px-2">
        {
            service.map((val,idx) => (
                <div key={idx} className="items py-5 px-5 space-y-3">
                    <img src={val.icon} alt="" className='mx-auto' />
                    <h4 className='w-[8rem] text-center mx-auto text-[#a4a4a4] font-light lg:text-[.9rem] text-[.8rem]'>{val.title}</h4>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Serviceyps
