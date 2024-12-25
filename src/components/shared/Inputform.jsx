import React from 'react'

export default function Inputform({inputID,text}) {
  return (
    <>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id={inputID} placeholder="name@example.com" />
        <label className='fs-4 fw-lighter' htmlFor={inputID}>{text}</label>
      </div>
    </>
  )
}