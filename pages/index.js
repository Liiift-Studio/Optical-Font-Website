import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react"

import FooterLayout from '../components/footer-layout'
import MenusLayout from '../components/menu-layout'
import LandingLayout from '../components/landing-layout'
import HeaderLayout from '../components/header-layout'
import { CssBaseline } from '@mui/material'

import imgLight from '../public/images/opt_light.png'
import imgDark from '../public/images/opt_dark.png'



export default function Home() {
  let imgSource = imgLight;
  return (
    <>

    
    {/* BODY */}

    <HeaderLayout lightSwitch={true}>
      {/* <section id="landing" > */}
        {/* <LandingLayout imgSource={imgSource}/> */}
      {/* </section> */}

      {/* <section id="menu"> */}
        {/* set to value to scroll position useEffect */}
        {/* <MenusLayout props/> */}
      {/* </section> */}

      <section id = "footer">
        <FooterLayout/>
      </section>
    </HeaderLayout>
    
    </>
  )
}
