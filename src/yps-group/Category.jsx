import React from 'react'
import { Link } from 'react-router-dom';
import './yps.css'

const Category = () => {
    const title = "Our Best Vendors";
    const content = [
        {
            title : 'PEO WO BATAK',
            image : 'peo-batak.jpg',
            link : 'peo-batak'
        },
        {
            title : 'PEO WEDDING PACKAGE',
            image : 'wedding-package.jpg',
            link : 'wedding-package'
        },
        {
            title : 'MAESRTO PHOTO',
            image : 'maestro-photo.jpg',
            link : 'maestro-photo'
        },
        {
            title : 'DEANDRA DEKORASI',
            image : 'deandra-dekorasi.jpg',
            link : 'deandra-dekorasi'
        },
        {
            title : 'SEWA COSTUM ADAT',
            image : 'sewa-costumadat.jpg',
            link : 'costum-batak'
        },
        {
            title : 'COMING SOON',
            image : 'comingsoon.jpg'
        }
    ]

  return (
    <div className='md:mx-20 mx-8 mb-40'>
      <div className="category">
        <h2 className='lg:text-[4.5rem] text-[3rem] md:text-left text-center'>{title}</h2>
            <div className="kategori grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {
                    content.map((val, idx) => (
                        <div key={idx} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl rounded-[20px] hover:shadow-black/30">
                            <div className="h-45">
                                <img className="h[60%] w-full object-cover transition-transform rounded-lg duration-500 " src={require('../assets/' + val.image)} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 rounded-lg group-hover:translate-y-0">
                                <h4 className="text-[1.2rem] font-semibold md:mt-5 mt-8 text-white">{val.title}</h4>
                                <Link to={val.link}>
                                    <button className="rounded-full border-[2px] border-[#EDCDBB] py-2 px-3.5 mt-5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default Category
