import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import {darkParentTheme, lightParentTheme } from "../styles/themes.js";

import styled from "styled-components";

import {ThemeProvider, createTheme} from "@material-ui/core/styles"
import {FormControl, FormControlLabel,Switch, Grid, Box,Paper, } from '@material-ui/core'
import { spacing } from '@material-ui/system';

export const siteTitle = 'Optical Font Website'
let dmText = "dark mode OFF"


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

  const chooseTheme = (darkMode ? {darkParentTheme} : {lightParentTheme}) ;
  const chooseThemeLocal = (darkMode ? darkTheme : lightTheme) ;
    return (
      <div>
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

            <Grid container className={styles.container}>
              <Grid item container direction ="row">
                <Grid item sm={5}> left SIDE LOGO </Grid>
                      
                <Grid item sm={4}> middle  
                    
                    <button onClick={() => setShowMe(!showMe)}>
                        {showMe ? "V" :" ^"}
                    </button>

                    
                </Grid>
                <Grid item sm={3}>
                  {lightSwitchOn ? (
                    <FormControlLabel
                      control = {<Switch checked={darkMode} onChange= {()=>setDarkMode(!darkMode)} />}
                      label = {(darkMode ? "Light Mode" : "Dark Mode")}
                    /> 
                    ) :
                    (<div></div>)
                    }
                        
                </Grid>
              </Grid>
                    <Grid item container  sm="auto" style = {{display :showMe? "block":"none" }} >
                          <Box m={5}>
                      <Grid item container direction="row" p={5} justifyContent="space-evenly" >
                          <Grid item sm="auto" >Fonts & Low Vision</Grid>
                          <Grid item sm="auto" > Use Guide </Grid>
                          <Grid item sm="auto" > Partners</Grid>
                          <Grid item sm="auto"> Accessibility</Grid>
                          <Grid item sm="auto" >Privacy</Grid>
                          <Grid item sm="auto" > CO2 </Grid>
                      </Grid>
                          </Box>
                      </Grid>

            </Grid>

    
                  {children}
                </Paper>
            </ThemeProvider>

        </div>
    )
  }