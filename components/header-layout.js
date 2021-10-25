import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import Image from 'next/image'

import {Icon,IconButton, Button,Typography,Switch,Paper, Grid, Box, CssBaseline} from '@mui/material/'
import { makeStyles} from '@mui/styles'
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'
import { fontWeight } from '@mui/system'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'


import imgLight from '../public/images/opt_light.png'
import imgDark from '../public/images/opt_dark.png'
import LandingLayout from './landing-layout'
import MenusLayout from '../components/menu-layout'
import { dm_icon, logo_container } from '../styles/layout.styles'



export default function HeaderLayout({lightSwitch, children }) {

    const [darkMode, setDarkMode] = useState(false);
    

    function changeDarkMode(){
        setDarkMode(!darkMode);
    }

    function chooseTheme(){
        var x =(darkMode ? responsiveFontSizes(darkTheme) : responsiveFontSizes(lightTheme));
        return x;
    }

    useEffect(()=>{

        // src ="no";
    })

    return(
        <>

                <ThemeProvider theme={chooseTheme()}>
                    {/* <Paper elevation={0} className={styles.paper_container}> */}
                    <CssBaseline/>

                    <Grid container className={styles.header_container} >
                        <Grid item container direction ="row" >

                            <Grid container item xs={6}  >
                                    <Grid container item xs={8} md={4} >
                                    <Icon 
                                    sx={logo_container} >
                                        <Image  src={darkMode? logoDark:logo}  
                                            layout='fill'
                                        />
                                    </Icon>
                                    </Grid>

                            </Grid>

                            <Grid container item xs={4} justifyContent="flex-end"  alignItems="flex-start" >
                                {/* <Button 
                                    variant ="string"
                                    href="#menu"
                                    sx={{
                                        // padding:1,
                                        border: 1,
                                        borderRadius:4,
                                        fontWeight:'medium',
                                        
                                    }}

                                >
                                        About
                                </Button> */}
                            </Grid>
                            <Grid container item xs={2} justifyContent="flex-end" alignItems="center">
                                {( lightSwitch ) ? (
                                
                                // <Switch
                                //     checked={darkMode}
                                //     onChange={changeDarkMode}
                                //     />

                                <IconButton
                                    onClick={changeDarkMode}
                                    >
                                        {(darkMode ? <Brightness7Icon 
                                                       sx={dm_icon}/> :
                                                     <Brightness3Icon 
                                                     sx={dm_icon}
                                                     />)}
                                </IconButton>
                                ) : (<></>)}


                            </Grid>
                        </Grid>
                    </Grid>
                
                <LandingLayout imgSrc = {darkMode ? imgDark : imgLight}/>
                <MenusLayout darkMode={darkMode} />
                {/* <LandingLayout imgSrc = {darkMode ? "dar" : "hi"}/> */}

                {children}
                {/* </Paper> */}
            </ThemeProvider>
        </>
        )
}