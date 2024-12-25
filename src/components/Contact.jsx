import React from 'react'
import TitleSection from './shared/Titlesection'
import TitleLine from './shared/Titleline'
import InputForm from './shared/Inputform'

export default function Contact() {
  return (
    <>
      <section className='contact'>
        <TitleSection titleText='CONTACT ME' titleColor='blue' />
        <TitleLine linecolor='blue' />
        <form action className='w-50 m-auto py-5 '>
          <InputForm inputID='name' text='Full name' />
          <InputForm inputID='email' text='Email address' />
          <InputForm inputID='phone' text='Phone number' />
          <div class="form-floating">
            <textarea style={{resize: 'none'}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea" className='fs-4 fw-lighter'>Message</label>
          </div>
          <button className='btn mt-3'>Send</button>

        </form>

      </section>
    </>
  )
}