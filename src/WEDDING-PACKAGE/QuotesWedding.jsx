import React from 'react'
import './wedding.css'

const QuotesWedding = () => {
    const quotes = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    const quoter = 'Benny Tan Susanto';
  return (
    <div className='mb-40'>
        <div className="quotes-section w-full h-[60vh] lg:py-34 py-32">
            <div className="quotes-content text-[#fff8e9] text-center">
                <h4 className='lg:text-[3.5rem] text-[2.8rem] lg:w-[50%] w-[70%] mx-auto'>{quotes}</h4>
                <p className='lg:pt-20 md:pt-16 pt-14 text-[1.2rem]'>{quoter}</p>
            </div>
        </div>
    </div>
  )
}

export default QuotesWedding