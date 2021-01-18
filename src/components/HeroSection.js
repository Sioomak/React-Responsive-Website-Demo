import React from 'react';
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'



function Herosection({
  lightBG,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLable,
  img,
  alt,
  start
}) {
  return (<>
     <div className={lightBg ? 'home__hero-section' : 'home__hero-section'} 
     >
       <dive className='container'>
         <div classname='row home__hero-row' >

         </div>
       </dive>

     </div> 
    </>);
}

export default Herosection
