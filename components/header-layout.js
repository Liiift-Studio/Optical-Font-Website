import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"

import {Button,Typography,Switch,Paper, Grid, Box} from '@mui/material/'
import { makeStyles} from '@mui/styles'
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"


import {darkTheme, lightTheme} from '../src/themes'
import { fontWeight } from '@mui/system'

export const siteTitle = 'Optical Font Website'

// import {buttonStyle} from '../src/themes'

export default function HeaderLayout({lightSwitch, children }) {
    // const classes = buttonStyle();
    
    const [darkMode, setDarkMode] = useState(false);
    

    function changeDarkMode(){
        setDarkMode(!darkMode);
    }

    function chooseTheme(){
        return (darkMode ? responsiveFontSizes(darkTheme) : responsiveFontSizes(lightTheme));
    }

    return(
        <>
                <ThemeProvider theme={chooseTheme()}>
                    <Paper>
                    <Head>
                        <link rel="icon" href="/favicon.ico" />
                        <meta
                            name="description"
                            content="Optical Font"
                        />
                        <meta
                            property="og:image"
                            content={`https://og-image.vercel.app/${encodeURI(
                            siteTitle
                            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                        />
                        <meta name="og:title" content={siteTitle} />
                        <meta name="twitter:card" content="summary_large_image" />
                    </Head>

                    <Grid container className={styles.header_container}>
                        <Grid item container direction ="row">
                            <Grid item xs={6} className={styles.optical_logo}>
                                <Typography variant = 'h3'>
                                    Optical
                                </Typography>
                            </Grid>

                            <Grid container item xs={4} justifyContent="flex-end"  alignItems="flex-start" >
                                <Button 
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
                                </Button>
                            </Grid>
                            <Grid container item xs={2} justifyContent="flex-end" alignItems="flex-start">
                                {( lightSwitch ) ? (
                                <Switch
                                    checked={darkMode}
                                    onChange={changeDarkMode}
                                    />
                                ) : (<></>)}
                            </Grid>
                        </Grid>
                    </Grid>
            {children}
                </Paper>
            </ThemeProvider>
        </>
        )
}