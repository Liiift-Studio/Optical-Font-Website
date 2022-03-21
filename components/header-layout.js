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
                    <Grid container item display={{xs:'flex', sm:'none'}} >
                        
                        <Grid item xs={6} px={0} display='flex'>
                            <IconButton href="/" aria-labelledby='logotxt' justifycontent='flex-start' sx={{width:'100%',minWidth:'120px',px:0,borderRadius:0,alignItems:'end'}}>
                                <Image id='logotxt' src={darkMode? logoTextDark:logoText} alt='Optical project logo' />
                            </IconButton>
                        </Grid>  
                        <Grid item xs={5}/>
                        <Grid item xs={1} justifyContent='flex-end' display='flex' sx={{}}>
                            <IconButton href="/" aria-labelledby='logotxt' justifycontent='flex-start'  sx={{width:'100%', minWidth:'20px',borderRadius:0,alignItems:'start',px:0}}>
                                <Image id='cursor' src={darkMode? cursorDark:cursor} alt='An icon based on the text input cursor symbol.' />
                            </IconButton>
                        </Grid>
                    </Grid>

                    {/* Desktop */}
                    <Grid container sx={{textAlign: "right"}} display={{xs:'none', sm:'flex'}}>
                        <Grid item xs={6} sx={{textAlign: "left"}}>
                            <IconButton href="/" aria-labelledby='logotxt' sx={{p:0, width:'100%', borderRadius:0}}>
                                <img id='logo' style={{display: "inline-block", maxWidth: "300px"}} src={darkMode? '/images/logoDark.svg': '/images/logo.svg'} alt='Optical project logo including an icon based on the text input cursor symbol.'/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign: "right"}}>
                            <Button aria-labelledby='About' variant="outlined" href="#About" onClick={aboutClick} sx={header_button}>
                                <Typography variant='h2' alt="About" sx={{position:'relative', top: '.1rem'}}>About</Typography>
                            </Button>
                        </Grid>
                    </Grid>


                    {/* <Grid container display={{xs:'none', sm:'flex'}}>
                        <Grid item display={{xs:'none', sm:'flex'}} sm={6} alignContent={'center'} >
                            <IconButton aria-labelledby='logo' href="/" sx={logo_container} >
                                <img id='logo' style={{maxWidth: "300px"}} src={darkMode? '/images/logoDark.svg': '/images/logo.svg'} alt='Optical project logo including an icon based on the text input cursor symbol.'/>
                            </IconButton>
                        </Grid>
                        <Grid item sm={6} sx={{display:'flex',justifyContent:'end'}} >
                                <Button aria-labelledby='About' variant="outlined" href="#About" onClick={aboutClick} sx={header_button}>
                                    <Typography variant='h2' alt="About" sx={{position:'relative', top: '.1rem'}}>About</Typography>
                                </Button>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
        </>
        )
}
