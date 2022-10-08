import React from 'react'
import { Gift1, Gift2, Gift3 } from './Package';

const ProductWedding = () => {
    const title = 'Our Wedding Package';
  return (
    <div className='mb-40 lg:mx-40 md:mx-10 mx-8'>
        <div className="product-section">
            <h2 className='lg:text-[4rem] text-[3rem]'>{title}</h2>
            <Gift1/>
            <Gift2/>
            <Gift3/>
        </div>
    </div>
  )
}

export default ProductWedding