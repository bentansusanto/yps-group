import React from 'react'

const PortofolioPeo = () => {
    const title = 'Our Portofolio';
    const porto = [
        {title:'Wedding of Billy and Tina', image:'porto-billytina.jpg'},
        {title:'Wedding of Billy and Tina', image:'porto2.jpg'},
        {title:'Wedding of Billy and Tina', image:'porto3.jpg'}
    ]
  return (
    <div className='mb-40'>
        <div className="porto-section mt-[65rem] mx-20">
            <h2 className='mb-10 text-[4rem] text-center md:text-left'>{title}</h2>
            <div className="porto-content grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    porto.map((val,idx) =>(
                        <div key={idx}>
                            <div key={idx} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl rounded-[20px] hover:shadow-black/30">
                            <div className="h-45">
                                <img className="h[60%] w-full object-cover transition-transform duration-500 " src={require('../assets/' + val.image)} alt="" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h4 className="text-[1.2rem] font-semibold md:mt-5 mt-8 text-white">{val.title}</h4>
                                    <button className="rounded-full border-[2px] border-[#EDCDBB] py-2 px-3.5 mt-5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default PortofolioPeo