import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import {lightTheme, darkTheme, GlobalStyles} from "../styles/themes.js";
import styled, { ThemeProvider} from "styled-components";

import {FormControl, FormControlLabel,Switch, Grid, Box} from '@material-ui/core'
import { spacing } from '@material-ui/system';

export const siteTitle = 'Optical Font Website'
let menu ="V";
let dmText = "dark mode OFF"

let dm = false;

const StyledApp= styled.div`
  color: ${props => props.theme.fontColor};
`;

export const getDM = () =>
{
  return {dm};
}

export default function HeaderLayout({lightSwitchOn, children }) {

  const [showMe, setShowMe] = useState(false);
  const [showDM, setShowDM] = useState(true);

  function toggle(){
    if (showMe){
        menu = "^";
    }
    else{
        menu ="v";
    }
    setShowMe(!showMe);      
  }

  function toggleDM(){      
    dm =!dm;
    setShowDM(!showDM);
}

    return (
      <div>
        <ThemeProvider theme = {showDM ? lightTheme : darkTheme}>
          <GlobalStyles></GlobalStyles> 
            <StyledApp>
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
                
                <button onClick={toggle}>
                    {menu}
                </button>

                
            </Grid>
            <Grid item sm={3}>
              {lightSwitchOn ? (
                <FormControl>
                  <FormControlLabel control = { <Switch onChange={toggleDM} />}
                  />
                </FormControl>
                ) :
                (<div></div>)
                }
                    
            </Grid>
          </Grid>
                <Grid item container  sm="auto" style = {{display :showMe? "block":"none" }} >
                      <Box m={5}>
                  <Grid item container direction="row" p={5} justifyContent="space-evenly" style ={{background:"red"}}>
                      <Grid item sm="auto" style ={{background:"yellow"}} >Fonts & Low Vision</Grid>
                      <Grid item sm="auto" style ={{background:"blue"}} > Use Guide </Grid>
                      <Grid item sm="auto" > Partners</Grid>
                      <Grid item sm="auto"> Accessibility</Grid>
                      <Grid item sm="auto" >Privacy</Grid>
                      <Grid item sm="auto" > CO2 </Grid>
                  </Grid>
                      </Box>
                  </Grid>

        </Grid>

        {/* make children dark or light? */}

              
              {children}

          </StyledApp>
        </ThemeProvider>

        </div>
    )
  }