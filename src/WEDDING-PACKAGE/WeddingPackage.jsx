import React from 'react'
import HeroWedding from './HeroWedding'
import NavWedding from './NavWedding'
import ProductWedding from './ProductWedding'
import QuotesWedding from './QuotesWedding'
import ServiceWedding from './ServiceWedding'

const WeddingPackage = () => {
  return (
    <div>
        <NavWedding/>
        <HeroWedding/>
        <ServiceWedding/>
        <ProductWedding/>
        <QuotesWedding/>
    </div>
  )
}

export default WeddingPackage