import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import Image from 'next/image'

import {Icon,IconButton, Grid, Box, CssBaseline, Button, Typography, SvgIcon} from '@mui/material/'
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'
import {ReactComponent as Logo} from '../public/images/moon.svg'
import lightIcon from '../public/images/sun.svg'
import darkIcon from '../public/images/moon.svg'
import logoText from '../public/images/logo-type.svg'
import logoTextDark from '../public/images/logo-type-white.svg'
import imgLight from '../public/images/Optical_3D.png'
import imgDark from '../public/images/Optical_3D.png'
import cursor from '../public/images/cursor.svg'
import cursorDark from '../public/images/cursor-white.svg'


import HeaderLayout from '../components/header-layout'
import LandingLayout from '/components/landing-layout'
import MenusLayout from '../components/menu-layout'
import FooterLayout from '../components/footer-layout'
import { dm_icon, header_container, logo_container, logo_container_mobile } from '../styles/layout.styles'



export default function Home({lightSwitch, children }) {
  lightSwitch = lightSwitch || true;
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
                    {/* <Paper elevation={0} className={styles.paper_container}> */}
                    <CssBaseline/>
                    {/* Mobile Logo */}
                    <Grid container sx={header_container}>
                        <Grid item container direction="row">
                            <Grid item xs={6} pt={5}  pr={1} display={{xs:'flex', sm:'none'}}>
                                <IconButton href="/" justifyContent='flex-start' align={'left'}>
                                    <Image  src={darkMode? logoTextDark:logoText} alt='Optical project logo including an icon based on the text input cursor symbol.'/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6} pt={5} justifyContent='flex-end' display={{xs:'flex', sm:'none'}}>
                                <IconButton>
                                    <Image src={darkMode? cursorDark:cursor}/>
                                </IconButton>
                            </Grid>
                            {/* Desktop */}
                            <Grid container item display={{xs:'none', sm:'flex'}} xs={12} sm={6} md={6} alignContent={'center'}>
                                <IconButton  href="/" sx={logo_container} >
                                    <Image src={darkMode? logoDark:logo} alt='Optical project logo including an icon based on the text input cursor symbol.'
                                        sx={{
                                        maxWidth:'230px',
                                        maxHeight:'55px'
                                        }}/>
                                </IconButton>
                            </Grid>
                            <Grid container item  display={{xs:'none', sm:'none', md:'flex'}} sm={4} md={5} justifyContent="flex-end"  alignItems="center" >
                                <Button 
                                    variant="outlined"
                                    // tabIndex={2}
                                    href="#FLV"
                                    sx={{
                                        width: "152px",
                                        height: "53px",
                                        // px: 4,
                                        // py:1,
                                    }}>
                                    <Typography variant='h3' sx=
                                        {{position:'relative',
                                        top: '.1rem',}}
                                        alt="About">
                                        About</Typography>
                                </Button>
                            </Grid>
                            <Grid container item  display={{xs:'none', sm:'flex'}} xs={2} sm={6} md={1} justifyContent="flex-end" alignItems="center">
                                {( lightSwitch ) ? (
                                <IconButton p={0} m={0} onClick={changeDarkMode}>
                                        {(darkMode ? 
                                            <SvgIcon sx={{fontSize:'2.7rem'}} viewBox="0 0 53 53" alt="Light mode Icon button to switch to light mode" >
                                                <path d="M26.5 41.9583C25.2854 41.9583 24.2917 42.9521 24.2917 44.1667V50.7917C24.2917 52.0062 25.2854 53 26.5 53C27.7146 53 28.7083 52.0062 28.7083 50.7917V44.1667C28.7083 42.9521 27.7146 41.9583 26.5 41.9583ZM11.0417 26.5C11.0417 25.2854 10.0479 24.2917 8.83333 24.2917H2.20833C0.99375 24.2917 0 25.2854 0 26.5C0 27.7146 0.99375 28.7083 2.20833 28.7083H8.83333C10.0479 28.7083 11.0417 27.7146 11.0417 26.5ZM26.5 11.0417C27.7146 11.0417 28.7083 10.0479 28.7083 8.83333V2.20833C28.7083 0.99375 27.7146 0 26.5 0C25.2854 0 24.2917 0.99375 24.2917 2.20833V8.83333C24.2917 10.0479 25.2854 11.0417 26.5 11.0417ZM50.7917 24.2917H44.1667C42.9521 24.2917 41.9583 25.2854 41.9583 26.5C41.9583 27.7146 42.9521 28.7083 44.1667 28.7083H50.7917C52.0062 28.7083 53 27.7146 53 26.5C53 25.2854 52.0062 24.2917 50.7917 24.2917ZM12.4219 37.4313L7.72917 42.124C6.84583 43.0073 6.84583 44.3875 7.72917 45.2708C8.17083 45.7125 8.72292 45.9333 9.275 45.9333C9.82708 45.9333 10.3792 45.7125 10.8208 45.2708L15.5135 40.5781C16.3969 39.6948 16.3969 38.3146 15.5135 37.4313C14.6854 36.5479 13.3052 36.5479 12.4219 37.4313ZM38.9771 16.2312C39.5292 16.2312 40.0812 16.0104 40.5229 15.5687L45.2156 10.876C46.099 9.99271 46.099 8.6125 45.2156 7.72917C44.3323 6.84583 42.9521 6.84583 42.0687 7.72917L37.376 12.4219C36.4927 13.3052 36.4927 14.6854 37.376 15.5687C37.8729 16.0104 38.425 16.2312 38.9771 16.2312ZM12.4219 15.5687C12.8635 16.0104 13.4156 16.2312 13.9677 16.2312C14.5198 16.2312 15.0719 16.0104 15.5135 15.5687C16.3969 14.6854 16.3969 13.3052 15.5135 12.4219L10.8208 7.72917C9.9375 6.84583 8.55729 6.84583 7.67396 7.72917C6.79062 8.6125 6.79062 9.99271 7.67396 10.876L12.4219 15.5687ZM40.5781 37.4313C39.6948 36.5479 38.3146 36.5479 37.4313 37.4313C36.5479 38.3146 36.5479 39.6948 37.4313 40.5781L42.124 45.2708C42.5656 45.7125 43.1177 45.9333 43.6698 45.9333C44.2219 45.9333 44.774 45.7125 45.2156 45.2708C46.099 44.3875 46.099 43.0073 45.2156 42.124L40.5781 37.4313Z"/>
                                                <path d="M26.5013 38.6471C33.2093 38.6471 38.6471 33.2093 38.6471 26.5013C38.6471 19.7933 33.2093 14.3555 26.5013 14.3555C19.7933 14.3555 14.3555 19.7933 14.3555 26.5013C14.3555 33.2093 19.7933 38.6471 26.5013 38.6471Z"/>
                                            </SvgIcon>
                                        :
                                            <SvgIcon sx={{fontSize:'2.5rem'}} viewBox="0 0 45 45" alt='Dark mode icon button to switch to dark mode with higher contrast colours'>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3255 1.31292C25.5842 3.53751 22.3008 8.35436 22.3008 13.9381C22.3008 21.6359 28.5411 27.8762 36.2389 27.8762C39.7114 27.8762 42.8873 26.6063 45.3275 24.5057C44.4069 36.1975 34.6275 45.3984 22.6992 45.3984C10.1628 45.3984 0 35.2356 0 22.6992C0 10.1628 10.1628 0 22.6992 0C25.3746 0 27.942 0.462877 30.3255 1.31292Z"/>
                                            </SvgIcon>
                                        )}
                                </IconButton>
                                ) : (<></>)}
                            </Grid>
                        </Grid>
                    </Grid>
              <LandingLayout imgSrc={darkMode ? imgDark : imgLight}/>
              <MenusLayout darkMode={darkMode} />
              <FooterLayout/>
              {children}
            </ThemeProvider>
        </>
        )
}