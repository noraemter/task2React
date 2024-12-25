import React from 'react'
import Icon from './shared/Icon'

export default function Footer() {
  return (
    <>
      <footer className='footer text-center'>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4 mb-5 ">
              <h2 className='text-white fs-2 mb-4'>Location</h2>
              <p className='fs-5  '>2215 John Daniel Drive
                <br />
                Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 mb-5 ">
              <h2 className='text-white fs-2 mb-4 '>Around the Web</h2>
              <div className="icons d-flex gap-3 justify-content-center">
                
                  <Icon iconName='facebook' />    
                  <Icon iconName='twitter' />  
                  <Icon iconName='linkedin' />  
                  <Icon iconName='instagram' />              
                
              </div>
            </div>
            <div className="col-lg-4 mb-5 ">
              <h2 className='text-white fs-2 mb-4'>About Freelancer</h2>
              <p className='fs-5  '>
                Freelance is a free to use, MIT licensed Bootstrap theme created by
                <a href="" style={{ color: '#1ABC9C' }}> Start Bootstrap</a> .
              </p>
            </div>
          </div>
        </div>
        <div className="end-footer py-4  ">
          
          <p className='m-0'>Copyright &copy; Your Website 2024</p>
          
        </div>
      </footer>
    </>
  )
}