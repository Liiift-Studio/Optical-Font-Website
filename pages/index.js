import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react"

import FooterLayout from '../components/footer-layout'
import MenusLayout from '../components/menu-layout'
import LandingLayout from '../components/landing-layout'

export default function Home() {

  return (
    <>
    {/* HEADER 
      HeaderLayout is in _app.js as it's applied to all pages
      
      App.js also contains the outer-most theme (light/dark) applied to all pages
      
    */}
    

    
    
    {/* BODY */}
     
    
      <section id="landing" >
        <LandingLayout/>
      </section>

      <section id="menu">
        {/* set to value to scroll position useEffect */}
        <MenusLayout/>
      </section>

      <section id = "footer">
        <FooterLayout/>
      </section>
    
    
    </>
  )
}
