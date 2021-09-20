import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
// import {darkParentTheme, lightParentTheme } from "../styles/themes.js";


import {ThemeProvider, createTheme} from "@material-ui/core/styles"
import {Icon, FormControlLabel,Switch, Grid, Box,Paper, Typography ,Button} from '@material-ui/core'

// import {ArrowDownwardIcon} from '@material-ui/icons';

export const siteTitle = 'Optical Font Website'
let dmText = "dark mode OFF"

export let dm = false;

export default function HeaderLayout({lightSwitchOn, children }) {
  
  const [showMe, setShowMe] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const darkTheme = createTheme({
    palette:{
      type:"dark",
    },
  });
  const lightTheme = createTheme({
    
  });
  function changeDarkMode(){
    setDarkMode(!darkMode);
    dm=!dm;
  }
  
  const chooseThemeLocal = (darkMode ? darkTheme : lightTheme) ;
    return (
      <>
        {/* <ThemeProvider theme = {chooseTheme}> */}
       <ThemeProvider theme = {chooseThemeLocal}>
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


              <Grid container className={styles.header_container} >
                <Grid item container direction ="row">
                  <Grid item sm={6} className ={styles.optical_logo}> 
                      Optical 
                    </Grid>
                        
                  <Grid item sm={3}> 

                      <Button 
                        onClick={() => setShowMe(!showMe)} 
                        className = {styles.about_button}
                        // endIcon = {<ArrowDownwardIcon/>}
                        >
                        
                        About
                          {showMe ? " V" : " <"}
                      </Button>

                      
                  </Grid>

                  <Grid item sm={3}>
                    {lightSwitchOn ? (
                      <FormControlLabel
                        control = {<Switch checked={darkMode} onChange= {changeDarkMode} />}
                        
                      /> 
                      ) :
                      (<div></div>)
                      }
                          
                  </Grid>
                </Grid>
                  <Grid item container  sm="auto" style = {{display :showMe? "block":"none" }  }  className={styles.about_menu_container} >
                    <Box sx={{mt:'1.5vh'}}>
                      <Grid item container direction="row" p={5} className={styles.about_menu} >
                          <Grid item sm="auto" >Fonts & Low Vision  </Grid>
                          <Grid item sm="auto" >|</Grid>
                          <Grid item sm="auto" > Use Guide </Grid>
                          <Grid item sm="auto" >|</Grid>
                          <Grid item sm="auto" > Partners</Grid>
                          <Grid item sm="auto" >|</Grid>
                          <Grid item sm="auto"> Accessibility</Grid>
                          <Grid item sm="auto" >|</Grid>
                          <Grid item sm="auto" >Privacy</Grid>
                          <Grid item sm="auto" >|</Grid>
                          <Grid item sm="auto" > CO2 </Grid>
                      </Grid>
                    </Box>
                  </Grid>

              </Grid>

    
                  {children}
                </Paper>
            </ThemeProvider>

        </>
    )
  }