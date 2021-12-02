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


import LandingLayout from './landing-layout'
import MenusLayout from '../components/menu-layout'
import FooterLayout from '../components/footer-layout'
import { dm_icon, header_container, logo_container } from '../styles/layout.styles'



export default function HeaderLayout({lightSwitch, children }) {

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
                    <Grid container 
                        sx ={header_container}
                        >
                        <Grid item container direction ="row" >
                            <Grid container item  xs={12} sm={6} md={6} justifyContent={{xs:'center', sm:'center', md:'flex-start'}}>
                                    <Grid container item xs={8} md={4} justifyContent={{xs:'center', sm:'center', md:'flex-start'}} >
                                        <Icon 
                                        sx={logo_container} >
                                            <Image  src={darkMode? logoDark:logo}  
                                                layout='fill'
                                            />
                                        </Icon>
                                    </Grid>
                            </Grid>

                            <Grid container item  display={{xs:'none', sm:'none', md:'flex'}} sm={4} md={5} justifyContent="flex-end"  alignItems="center" >
                                <Button 
                                    variant="text"
                                    href="#menu"
                                    sx={{
                                        
                                        paddingX: 2,
                                        fontWeight:'medium',
                                    }}
                                >
                                    <Typography variant='h4' sx=
                                        {{position:'relative',
                                        top: '.1rem',}}
                                        alt="About">
                                        About</Typography>
                                </Button>
                            </Grid>
                            <Grid container item  display={{xs:'none', sm:'flex'}} xs={2} sm={6} md={1} justifyContent="flex-end" alignItems="center">
                                {( lightSwitch ) ? (
                                // <Switch
                                //     checked={darkMode}
                                //     onChange={changeDarkMode}
                                //     />
                                <IconButton
                                    onClick={changeDarkMode}
                                    >
                                        {(darkMode ? <Image src={lightIcon} alt="Light Mode"
                                                       sx={dm_icon}/> :
                                                     <Image src={darkIcon} alt="Dark Mode"
                                                     sx={dm_icon}
                                                     />)}
                                </IconButton>
                                ) : (<></>)}
                            </Grid>
                        </Grid>
                    </Grid>
                
                <LandingLayout imgSrc = {darkMode ? imgDark : imgLight}/>
                <MenusLayout darkMode={darkMode} />

                <FooterLayout/>

                {/* <LandingLayout imgSrc = {darkMode ? "dar" : "hi"}/> */}

                {children}
                {/* </Paper> */}
            </ThemeProvider>
        </>
        )
}