import React from 'react'
import TitleSection from './shared/Titlesection'
import TitleLine from './shared/Titleline'
export default function About() {
  return (
    <>
    <section className='about '>
    <TitleSection titleText='ABOUT' titleColor='white' />
    <TitleLine linecolor='white'/>
     <div className="content py-5 d-flex justify-content-center gap-5">
     <p className='w-25 fs-5 fw-normal text-white'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
     <p className='w-25 fs-5 fw-normal text-white'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
     </div>
     <div className="download-btn pb-5 d-flex justify-content-center">
      <button className='btn'><i class="fa-solid fa-download"></i> Free Download!</button>
     </div>
    
    </section>
    </>
  )
}