import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import Image from 'next/image'

import {Icon,IconButton, Grid, Box, CssBaseline, Button, Typography, SvgIcon} from '@mui/material/'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'
import logoText from '../public/images/logo-type.svg'
import logoTextDark from '../public/images/logo-type-white.svg'
// import cursor from '../public/images/cursor.png'
// import cursorDark from '../public/images/cursor-white.png'
import cursor from '../public/images/cursorLight_noBG.svg'
import cursorDark from '../public/images/cursorDark_noBG.svg'

import { dm_icon, header_button, header_container, logo_container, logo_container_mobile } from '../styles/layout.styles'

export default function HeaderLayout({darkMode, changeDarkMode, aboutClick, children }) {

    return(
        <>
            <Grid container sx={header_container}>
                <Grid item container direction="row">
                    {/* Mobile Logo */}
                    <Grid container item display={{xs:'flex', sm:'none'}}>
                        <Grid item xs={6} px={0} display='flex' sx={{alignItems:'end'}}>
                            <IconButton href="/" aria-labelledby='logotxt' justifycontent='flex-start' sx={{p:0, width:'100%',borderRadius:0,}}>
                                <Image id='logotxt' src={darkMode? logoTextDark:logoText} alt='Optical project logo'/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={5}/>
                        <Grid item xs={1} justifyContent='flex-end' display='flex'>
                            <IconButton aria-labelledby='cursor' sx={{
                                px:0,
                                width:'100%',
                                borderRadius:0
                            }}>
                                <Image id='cursor' src={darkMode? cursorDark:cursor} alt='An icon based on the text input cursor symbol.'/>
                            </IconButton>
                        </Grid>
                    </Grid>

                    {/* Desktop */}
                    {/* <Grid item sm={1} display={{xs:'none', sm:'flex'}}/> */}
                    <Grid container item display={{xs:'none', sm:'flex'}} sm={6} alignContent={'center'} >
                        <IconButton aria-labelledby='logo' href="/" sx={logo_container} >
                            <img id='logo' src={darkMode? '/images/logoDark.svg': '/images/logo.svg'} alt='Optical project logo including an icon based on the text input cursor symbol.'/>
                        </IconButton>
                    </Grid>
                    <Grid container item sm={6} sx={{display:'flex',justifyContent:'end'}} >
                        <Grid container item xs={'auto'} display={{xs:'none', sm:'none', md:'flex'}} sx={{alignItems:'center', mr:2}}>
                            <Button aria-labelledby='About' variant="outlined" href="#About" onClick={aboutClick} sx={header_button}>
                                <Typography variant='h2' alt="About" sx={{position:'relative', top: '.1rem'}}>About</Typography>
                            </Button>
                        </Grid>
                        
                        {/* dark mode button */}
                        {/* <Grid container item xs={'auto'}>
                            <Grid container item xs={'auto'} display={{xs:'none', sm:'flex'}} sx={{alignItems:'center',mr:2}}>
                                <Button aria-labelledby='mode' variant ="outlined" onClick={changeDarkMode}>
                                    
                                    {(darkMode ? 
                                        <Typography variant='h2' alt="LightMode" sx={{position:'relative',top: '.1rem',}}>Light&nbsp;Mode</Typography>
                                    :
                                        <Typography variant='h2' alt="DarkMode" sx={{position:'relative',top: '.1rem',}}>Dark&nbsp;Mode</Typography>
                                    )}
                                </Button>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </>
        )
}
