import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import Image from 'next/image'

import {Icon,IconButton, Grid, Box, CssBaseline, Button, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material/'
import { Waypoint } from 'react-waypoint';
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'
import {ReactComponent as Logo} from '../public/images/moon.svg'
import lightIcon from '../public/images/sun.svg'
import darkIcon from '../public/images/moon.svg'

import imgLight from '../public/images/Optical_3D.png'
import imgDark from '../public/images/Optical_3D.png'

import HeaderLayout from '../components/header-layout'
import LandingLayout from '/components/landing-layout'
import MenusLayout from '../components/menu-layout'
import FooterLayout from '../components/footer-layout'
import {dm_icon, header_container,logo_container, body_container, circle, copy, copy_container, header, img_container_ext } from "../styles/layout.styles";
import {About,FLV,UG,P,A,PR, FlvCopy, UgCopy, ProjectCopy, loe, LevelOfEnhancementCopy, c, ControlsCopy, m, MenuCopy} from '../styles/utils.module.constants'
import { flv,ug,p,a,pr,flvCopy,ugCopy,pCopy,aCopy,prCopy } from "../styles/utils.module.constants";

export default function Home({lightSwitch, children }) {
  lightSwitch = lightSwitch || true;
  const [toggleValue, setToggle]= useState(FLV);
  const SECTION_SPACING = '2rem';
  const SECTION_SPACING_BOTTOM = '0.5rem';
  const [darkMode, setDarkMode] = useState(false);
  function changeDarkMode(){
      setDarkMode(!darkMode);
  }

  function chooseTheme(){
      var x =(darkMode ? responsiveFontSizes(darkTheme) : responsiveFontSizes(lightTheme));
      return x;
  }
    return(
        <>
            <ThemeProvider theme={chooseTheme()}>
              <CssBaseline/>
              <Grid container sx={header_container}>
                <Grid item container direction ="row" >
                  <Grid container item  xs={8} sm={6} md={6} justifyContent={{xs:'center', sm:'center', md:'flex-start'}}>
                    <Grid container item xs={8} md={4} justifyContent={{xs:'center', sm:'center', md:'flex-start'}} >
                        <IconButton href="/"
                        sx={logo_container} >
                            <Image  src={darkMode? logoDark:logo}/>
                        </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container item  display={'flex'} xs={4} sm={4} md={5} justifyContent="flex-end"  alignItems="center" >
                      <Button 
                          variant="outlined"
                          href="/"
                      >
                          <Typography variant='h3' sx=
                              {{position:'relative',
                              top: '.1rem',}}
                              alt="About">
                              home</Typography>
                      </Button>
                  </Grid>
                  {/* <Grid container item  display={{xs:'none', sm:'flex'}} sm={2} md={1} justifyContent="flex-end" alignItems="center">
                      {( lightSwitch ) ? (
                      <IconButton
                          onClick={changeDarkMode}
                          >
                              {(darkMode ? <Image src={lightIcon} alt="Light Mode"
                                              sx={dm_icon}/> :
                                            <Image src={darkIcon} alt="Dark Mode"
                                            sx={dm_icon}
                                            />)}
                      </IconButton>
                      ) : (<></>)}
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid container item sm={12} sx={body_container}>
                <Grid item container sm={4} className={styles.menuButtons_container} display={{xs:'none', md:'flex'}}>
                  <List>
                      <ListItem className={styles.a} component="a" href="#Privacy"  >
                          <ListItemButton variant ="string"> 
                              {/* {toggleValue === PRIVACY ?  */}
                                  <ListItemIcon >
                                      <Box sx={circle}/>
                                  </ListItemIcon>
                                  <ListItemText>
                                  {/* inset={toggleValue !== PRIVACY} */}
                                      <Typography variant ="h3" sx={{textTransform:'uppercase'}}>
                                        Privacy Policy
                                      </Typography>
                                  </ListItemText>
                              </ListItemButton>
                      </ListItem>
                    </List>
                  </Grid>
                
          {/* Copy */}
                <Grid item container md={8} alignItems="center"   
                  sx={copy_container}>
                  <Grid item container pt={2.3}>
                      <Waypoint 
                          topOffset="35%"
                          bottomOffset="55%"
                          // onEnter={()=>setToggle(PRIVACY)}
                          >
                        <section id="privacy">
                            <Grid item container sx={{mb:SECTION_SPACING_BOTTOM}}>
                                <Grid item container sx={header}>
                                    <Typography variant ='h3'sx={{textTransform:'uppercase'}}> 
                                      Privacy Policy
                                    </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      This Privacy Policy describes how your personal information is
                                      collected, used, and shared when you visit or make a purchase from
                                      https://opticalfont.com/ (the “Site”).
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      PERSONAL INFORMATION WE COLLECT
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      When you visit the Site, we automatically collect certain information
                                      about your device, including information about your web browser, IP
                                      address, time zone, and some of the cookies that are installed on your
                                      device. Additionally, as you browse the Site, we collect information
                                      about the individual web pages or products that you view, what
                                      websites or search terms referred you to the Site, and information
                                      about how you interact with the Site. We refer to this
                                      automatically-collected information as “Device Information.”
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We collect Device Information using the following technologies:
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      - “Log files” track actions occurring on the Site, and collect data
                                      including your IP address, browser type, Internet service provider,
                                      referring/exit pages, and date/time stamps. - “Web beacons,” “tags,”
                                      and “pixels” are electronic files used to record information about how
                                      you browse the Site.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      DO NOT TRACK
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      Please note that we do not alter our Site’s data collection and use
                                      practices when we see a Do Not Track signal from your browser.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      CHANGES
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      For more information about our privacy practices, if you have
                                      questions, or if you would like to make a complaint, please contact us
                                      by e-mail at hello@liiift.studio or by mail using the details provided
                                      below:
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      520 E 1st Ave, Vancouver, BC, V5T 1E1, Canada 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </section>
                    </Waypoint>
                  </Grid>
                </Grid>
              </Grid>
              <FooterLayout/>
              {children}
            </ThemeProvider>
        </>
        )
}