import React from 'react'

const Kontak = ({kontak}) => {
  return (
    <div>
       <div className="kontak space-y-3">
            <h4 className='font-semibold text-[1.2rem]'>Our Contact</h4>
            {
              kontak.map((contact,idx) =>(
                  <p key={idx} className="text-[.9rem]">
                    {contact}
                  </p>
              ))
            }
          </div>
    </div>
  )
}

export default Kontak
