import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/Body'

function Home() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Body/> </div>
        <div><Footer/></div>
    </div>
  )
}

export default Home