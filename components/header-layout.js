import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import Image from 'next/image'

import {Icon,IconButton, Grid, Box, CssBaseline, Button, Typography, SvgIcon} from '@mui/material/'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'
import logoText from '../public/images/logo-type.png'
import logoTextDark from '../public/images/logo-type-white.png'
import cursor from '../public/images/cursor.png'
import cursorDark from '../public/images/cursor-white.png'

import { dm_icon, header_container, logo_container, logo_container_mobile } from '../styles/layout.styles'

export default function HeaderLayout({darkMode, changeDarkMode, aboutClick, children }) {

    return(
        <>
                <Grid container sx={header_container}>
                    <Grid item container direction="row">
                        {/* Mobile Logo */}
                        {/* <Grid item xs={1}  display={{xs:'flex', sm:'none'}}/> */}
                        <Grid item xs={6} pt={5}  pr={1} display={{xs:'flex', sm:'none'}}>
                            <IconButton href="/" aria-labelledby='logotxt' justifycontent='flex-start' align={'left'}>
                                <Image id='logotxt' src={darkMode? logoTextDark:logoText} alt='Optical project logo'/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6} pt={5} justifyContent='flex-end' display={{xs:'flex', sm:'none'}}>
                            <IconButton aria-labelledby='cusor'>
                                <Image id='cursor' src={darkMode? cursorDark:cursor} alt='An icon based on the text input cursor symbol.'/>
                            </IconButton>
                        </Grid>
                        {/* <Grid item xs={1}  display={{xs:'flex', sm:'none'}}/> */}


                        {/* Desktop */}
                        {/* <Grid item sm={1}  display={{xs:'none', sm:'flex'}}/> */}
                        <Grid container item display={{xs:'none', sm:'flex'}} sm={6} alignContent={'center'}>
                            <IconButton aria-labelledby='logo' href="/" sx={logo_container} >
                                <Image id='logo' src={darkMode? logoDark:logo} sx={{maxWidth:'230px',maxHeight:'55px'}} alt='Optical project logo including an icon based on the text input cursor symbol.'/>
                            </IconButton>
                        </Grid>
                        <Grid container item sm={6} sx={{display:'flex',justifyContent:'end'}}>
                            <Grid container item xs={'auto'}  display={{xs:'none', sm:'none', md:'flex'}} sx={{alignItems:'center',mr:2}}>
                                <Button aria-labelledby='About' variant="outlined" href="#About" onClick={aboutClick}>
                                    <Typography variant='h2' alt="About" sx={{position:'relative',top: '.1rem',}}>About</Typography>
                                </Button>
                            </Grid>
                            <Grid container item xs={'auto'}>
                                <Grid container item xs={'auto'}  display={{xs:'none', sm:'flex'}} sx={{alignItems:'center',mr:2}}>
                                    <Button aria-labelledby='mode' variant ="outlined" onClick={changeDarkMode}>
                                        
                                        {(darkMode ? 
                                            <Typography variant='h2' alt="LightMode" sx={{position:'relative',top: '.1rem',}}>Light&nbsp;Mode</Typography>
                                        :
                                            <Typography variant='h2' alt="DarkMode" sx={{position:'relative',top: '.1rem',}}>Dark&nbsp;Mode</Typography>
                                        )}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item sm={1}  display={{xs:'none', sm:'flex'}}/> */}

                    </Grid>
                </Grid>
        </>
        )
}
