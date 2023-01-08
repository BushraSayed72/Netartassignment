import React from 'react'
import one from '../asserts/1.png'
import two from '../asserts/2.png'
import Main2 from './Main2'
import Footer from './Footer'

function Main() {
  return (
    <>
    <div className='main'>
    <img className='award' src={one} alt='award' />
    <div className='main-content'>
      <p className='heading'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
      <ul>
        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
        <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
	</li>
      </ul>
      <img className='main-pic' src={two} alt='pic'/>
      <p className='para'>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
    </div>
     

      
    </div>
    <Main2/>
    <Footer/>
    </>
    
  )
}

export default Main
