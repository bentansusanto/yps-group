import React from 'react'
import { Link } from 'react-router-dom'

const Quicklink = ({quicklink}) => {
  return (
    <div>
      <div className="quicklink space-y-3">
            <h4 className='font-semibold text-[1.2rem]'>Quick Link</h4>
            {
              quicklink.map((val,idx) => (
                  <p key={idx} className="text-[.9rem]">
                    <Link to={val.link}>
                      {val.name}
                    </Link>
                  </p>
              ))
            }
          </div>
    </div>
  )
}

export default Quicklink
