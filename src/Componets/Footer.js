import React from 'react'
import {FaPhoneAlt} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {TfiWorld} from "react-icons/tfi";


function Footer() {
  return (
    <div className='footer'>
      <p className='headingg'>
      C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <div className='last-content'>
        <p className='same-para'>CHEMICALS & PROCESS</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>POWER</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>WATER & WASTE WATER </p>
        <p className='footer-hr'> </p>

        <p className='same-para'>OILS & GAS</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>PHARMA</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>SUGARS & DISTILLERIES</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>PAPER & PULP</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>MARINE & DEFENCE</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>METAL & MINING</p>
        <p className='footer-hr'> </p>
       
        </div>
        <div className='last-content'>
        <p className='same-para'>FOOD & BEVERAGE</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>PETROCHEMICAL & REFINERIES</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>SOLAR</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>BUILDING </p>
        <p className='footer-hr'> </p>

        <p className='same-para'>HVAC</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>FIRE FIGHTING</p>
        <p className='footer-hr'> </p>

        <p className='same-para'>AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className='lst-footer'>
          <div className='footer-flex'>
            <p> <FaPhoneAlt className='white'/> Toll Free 1800 200 1234</p>
            <p> <FaFacebookF className='blue'/> www.Facebook.com/cripumps</p>
            <p>  <TfiWorld className='white'/>www.crigroups.com</p>
          </div>
        </div>
      
    </div>
  )
}

export default Footer
