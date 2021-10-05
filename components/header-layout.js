import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"

import {IconButton, Button,Typography,Switch,Paper, Grid, Box, CssBaseline} from '@mui/material/'
import { makeStyles} from '@mui/styles'
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {darkTheme, lightTheme} from '../src/themes'
import { fontWeight } from '@mui/system'


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
                    {/* <Paper elevation={0} className={styles.paper_container}> */}
                    <CssBaseline/>

                    <Grid container className={styles.header_container}>
                        <Grid item container direction ="row">
                            <Grid item xs={6} className={styles.optical_logo}>
                                <Typography variant = 'h2'>
                                    Optical
                                </Typography>
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
                            <Grid container item xs={2} justifyContent="flex-end" alignItems="flex-start">
                                {( lightSwitch ) ? (
                                
                                // <Switch
                                //     checked={darkMode}
                                //     onChange={changeDarkMode}
                                //     />

                                <IconButton
                                    onClick={changeDarkMode}
                                    >
                                        {(darkMode ? <Brightness7Icon /> : <Brightness3Icon />)}
                                </IconButton>
                                ) : (<></>)}


                            </Grid>
                        </Grid>
                    </Grid>
            {children}
                {/* </Paper> */}
            </ThemeProvider>
        </>
        )
}