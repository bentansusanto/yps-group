import React from 'react'

const ServiceWedding = () => {
    const service = [
        {
            title : 'Good Package',
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi enim maxime est, sapiente.',
            icon : 'good-package.svg'
        },
        {
            title : 'Custom Package',
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi enim maxime est, sapiente.',
            icon : 'good-package.svg'
        },
        {
            title : 'Custom Color',
            content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi enim maxime est, sapiente.',
            icon : 'good-package.svg'
        },
    ]
  return (
    <div className='mb-40'>
        <div className="service-section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-40 md:mx-20 mx-28 justify-items-center">
            {
                service.map((val,idx) =>(
                    <div key={idx} className="px-10 py-5">
                        <img src={require('../assets/' + val.icon)} alt="" />
                        <h4 className='pt-3 text-[1.2rem] font-semibold'>{val.title}</h4>
                        <p className='text-[.9rem] text-[#a4a4a4] pt-1'>{val.content}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ServiceWedding