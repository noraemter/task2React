import React from 'react'
import TitleLine from './shared/Titleline'
import ImgContainer from './shared/Imagecontanier'
import TitleSection from './shared/Titlesection';
import cabian from '../assets/imgs/cabin.png'
import cake from '../assets/imgs/cake.png'
import circus from '../assets/imgs/circus.png'
import game from '../assets/imgs/game.png'
import safe from '../assets/imgs/safe.png'
import submarine from '../assets/imgs/submarine.png'
export default function Portfolio() {
  return (
    <>
     <section className='Portfolio'>
        <TitleSection titleText='PORTFOLIO' titleColor='blue' />
      <TitleLine linecolor='blue'/>
      <div className="container py-5">
       <div className="row gy-4">
       <div className="col-lg-4">
       <ImgContainer imgSrc={cabian} description='cabin image' />
       </div>
       <div className="col-lg-4">
       <ImgContainer imgSrc={cake} description='cake image' />
       </div>
       <div className="col-lg-4">
       <ImgContainer imgSrc={circus} description='circus image' />
       </div>
      
       <div className="col-lg-4">
       <ImgContainer imgSrc={game} description='game image' />
       </div>
       <div className="col-lg-4">
       <ImgContainer imgSrc={safe} description='safe image' />
       </div>
       <div className="col-lg-4">
       <ImgContainer imgSrc={submarine} description='submarine image' />
       </div>
       </div>      
      </div>

      

     </section>
    
    </>
  )
}