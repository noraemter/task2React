import React from 'react'

export default function Imagecontanier({imgSrc,description}) {
  return (
    <>
      <div className="img-item ">
        <img className='img-fluid rounded-3' src={imgSrc} alt={description} />
      </div>
    </>
  )
}