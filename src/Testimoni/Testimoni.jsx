import React from 'react'

const Testimoni = () => {
    const title = 'Some Testimonials From Our Clients';
    const testimoni = [
        {
            name : 'Andi Sitanggang',
            lokasi : 'Tangerang',
            message : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            foto : 'testimoni.jpg'
        },
        {
            name : 'Andi Sitanggang',
            lokasi : 'Tangerang',
            message : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            foto : 'testimoni.jpg'
        },
        {
            name : 'Andi Sitanggang',
            lokasi : 'Tangerang',
            message : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            foto : 'testimoni.jpg'
        }
    ]

  return (
    <div className='md:mx-20 mx-8 mb-40'>
      <div className="testimoni">
        <h2 className='text-[4rem] text-center mx-auto lg:w-[40%] md:w-[70%]'>{title}</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-3 mt-10">
            {
                testimoni.map((val,idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-2 bg-[#f5f5f5] items-center">
                        <img src={require('../assets/' + val.foto)} alt="" className='w-[70%]'/>
                        <div className="desc -ml-14 px-3">
                            <h4 className='lg:text-[1.2rem] font-semibold text-[1.1rem] '>{val.name}</h4>
                            <p className='text-[#a4a4a4]'>{val.lokasi}</p>
                            <p className='text-[.9rem] pt-3'>{val.message}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Testimoni
