import React from 'react'
import styles from './ContactUs.css'
import Footer from '../Footer/Footer'
import Navbar from '../MyNavbar'

function ContactUs() {
  return (
    <>
    <Navbar/>
    <div className='contactClass'>
        <div className='fley1Class'><img className='FleyImg'src='AlluduKitchenFlyer1.jpeg' alt='flyer'/></div>
        <div><img className='FleyImg'src ='AlluduKitchenFlyer.jpeg' alt='flyer2'/></div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactUs