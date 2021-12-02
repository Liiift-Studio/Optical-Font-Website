import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import Image from 'next/image'

import {Icon,IconButton, Grid, Box, CssBaseline, Button, Typography} from '@mui/material/'
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'
import {ReactComponent as Logo} from '../public/images/moon.svg'
import lightIcon from '../public/images/sun.svg'
import darkIcon from '../public/images/moon.svg'

import imgLight from '../public/images/Optical_3D.png'
import imgDark from '../public/images/Optical_3D.png'

import HeaderLayout from '../components/header-layout'
import LandingLayout from '/components/landing-layout'
import MenusLayout from '../components/menu-layout'
import FooterLayout from '../components/footer-layout'
import { dm_icon, header_container, logo_container } from '../styles/layout.styles'



export default function Home({lightSwitch, children }) {

  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode(){
      setDarkMode(!darkMode);
  }

  function chooseTheme(){
    var x =(darkMode ? responsiveFontSizes(darkTheme) : responsiveFontSizes(lightTheme));
    return x;
  }


    return(
        <>
            <ThemeProvider theme={chooseTheme()}>
              <CssBaseline/>
              <HeaderLayout lightSwitch={true}/>
              <LandingLayout imgSrc = {darkMode ? imgDark : imgLight}/>
              <MenusLayout darkMode={darkMode} />
              <FooterLayout/>
              {children}
            </ThemeProvider>
        </>
        )
}