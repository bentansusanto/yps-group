import React from 'react'

const ProductWedding = () => {
    const title = 'Our Wedding Package';
    const product = [
        {
            title : 'Wooden Couple Cup Set',
            content : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In tempore accusantium quisquam quae temporibus obcaecati fuga nam, saepe est pariatur maxime minus, dolor consequatur quaerat cupiditate.',
            image : 'gift1.png'
        }
    ]
  return (
    <div>
        <div className="product-section">
            <h2>{title}</h2>
            <div className='grid lg:grid-cols-1'>
                <div>
                    {
                        product.map((val,idx) => (
                            <div key={idx}>
                                <img src={require('../assets/' + val.image)} alt="" />
                                <h4>{val.title}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductWedding