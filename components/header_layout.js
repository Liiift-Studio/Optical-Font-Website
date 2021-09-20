import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"

import {FormControlLabel,Switch,Paper,Card, CardContent, Grid, Box} from '@mui/material/'

import {ThemeProvider, createTheme} from "@mui/material/styles"

import {darkTheme, lightTheme} from '../src/themes'
import { Button, Typography } from '@material-ui/core';

export const siteTitle = 'Optical Font Website'


export default function HeaderLayout({lightSwitchOn, children }) {
    const [darkMode, setDarkMode] = useState(false);
    
    function changeDarkMode(){
        setDarkMode(!darkMode);
    }

    function chooseTheme(){
        return (darkMode ? darkTheme : lightTheme);
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
                            <Grid item sm={6} className={styles.optical_logo}>
                                <Typography variant = 'h4'>
                                    Optical
                                </Typography>
                            </Grid>

                            <Grid item sm={3}>
                                <Button
                                    // onClick{}
                                    >
                                    <Typography variant = 'h6'>
                                        About
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item sm={3}>
                                <Switch
                                    checked={darkMode}
                                    onChange={changeDarkMode}
                                    />
                            </Grid>
                        </Grid>
                    </Grid>
            {children}
                </Paper>
            </ThemeProvider>
        </>
        )
}