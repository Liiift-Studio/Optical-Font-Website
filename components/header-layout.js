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
import logoText from '../public/images/logo-type.png'
import logoTextDark from '../public/images/logo-type-white.png'
import imgLight from '../public/images/Optical_3D.png'
import imgDark from '../public/images/Optical_3D.png'
import cursor from '../public/images/cursor.png'
import cursorDark from '../public/images/cursor-white.png'

import LandingLayout from './landing-layout'
import MenusLayout from '../components/menu-layout'
import FooterLayout from '../components/footer-layout'
import { dm_icon, header_container, logo_container, logo_container_mobile } from '../styles/layout.styles'



export default function HeaderLayout({lightSwitch, children }) {
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
                    {/* <Paper elevation={0} className={styles.paper_container}> */}
                    <CssBaseline/>
                    <Grid container sx={header_container}>
                        <Grid item container mt={4} direction ="row">
                            {/* Mobile */}
                            <Grid item xs={6} display={{xs:'flex', sm:'none'}}>
                                <IconButton href="/" aria-labelledby='logo'
                                sx={logo_container_mobile}>
                                    <Image id='logo' src={darkMode? logoTextDark:logoText} alt='Optical project logo' />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6} display={{xs:'flex', sm:'none'}}>
                                <IconButton aria-labelledby='cursor'
                                sx={logo_container_mobile} >
                                    <Image id='cursor' align={'right'}  src={darkMode? cursorDark:cursor} alt='An icon based on the text input cursor symbol.' />
                                </IconButton>
                            </Grid>
                            {/* Desktop */}
                            <Grid container item display={{xs:'none', sm:'flex'}} xs={12} sm={6} md={6} justifyContent={{xs:'center', sm:'center', md:'flex-start'}}>
                                    <Grid container item xs={8} md={4} justifyContent={{xs:'center', sm:'center', md:'flex-start'}} >
                                        <IconButton href="/" aria-labelledby="logo"
                                        sx={logo_container}>
                                            <Image id='logo' alt='Optical project logo including an icon based on the text input cursor symbol.' src={darkMode? logoDark:logo}  layout='fill'/>
                                        </IconButton>
                                    </Grid>
                            </Grid>
                            <Grid container item  display={{xs:'none', sm:'none', md:'flex'}} sm={4} md={5} justifyContent="flex-end"  alignItems="center" >
                                <Button aria-labelledby='About' variant="outlined" href="#FLV" sx={{paddingX: 2,fontWeight:'medium',}}>
                                    <Typography variant='h2' sx={{position:'relative',top: '.1rem',}} id="About">About</Typography>
                                </Button>
                            </Grid>
                            <Grid container item  display={{xs:'none', sm:'flex'}} xs={2} sm={6} md={1} justifyContent="flex-end" alignItems="center">
                                {( lightSwitch ) ? (
                                    <IconButton aria-labelledby='mode' onClick={changeDarkMode}>
                                        {(darkMode ? 
                                            <SvgIcon id='mode' src={lightIcon} alt="Light Mode"sx={dm_icon}/>
                                        :
                                            <SvgIcon id='mode' src={darkIcon} alt="Dark Mode"sx={dm_icon}/>
                                        )}
                                    </IconButton>
                                ) : (<></>)}
                            </Grid>
                        </Grid>
                    </Grid>
            </ThemeProvider>
        </>
        )
}
