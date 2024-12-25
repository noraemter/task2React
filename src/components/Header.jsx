import React from 'react'
import TitleLine from './shared/Titleline';
import myImage from '../assets/imgs/avataaars.svg'
export default function Header() {
return (
    <>
     <header className='header  py-5'>
      <div className="image d-flex justify-content-center mb-5">
        <img className='img-fluid' src={myImage} alt="avatar image" />
      </div>
      <div className="title d-flex justify-content-center">
        <h1 className='text-white text-uppercase '>Start Bootstrap</h1>
      </div>
        <TitleLine linecolor='white'/>
      <div className="description d-flex justify-content-center mt-5">
        <p className='text-white fs-4'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
     </header>
    </>
  )
}