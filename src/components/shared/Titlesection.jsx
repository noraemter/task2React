import React from 'react'

export default function Titlesection({titleText,titleColor}) {
  const myStyle = {
    color: (titleColor == 'white')? 'white' : '#2C3E50'
  }
  return (
    <>
    <div className="title d-flex justify-content-center pt-5">
          <h2 style={myStyle}>{titleText}</h2>
        </div>
    
    </>
  )
}