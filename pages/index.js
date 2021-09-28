import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react"

import {ThemeProvider, createTheme} from "@mui/material/styles"

// import HeaderLayout from '../components/header-layout'
import utilStyles from '../styles/utils.module.css'
import {Typography ,ToggleButton,Button, Grid, Paper, colors, Box, ToggleButtonGroup} from '@mui/material'

import dials from '../public/images/dials.png'

import FooterLayout from '../components/footer-layout'
import MenuSelect from '../components/menu-select'
import styles from '../styles/layout.module.css'
// import {buttonStyle} from '../src/themes'


import {About,FLV,UG,P,A,PR} from '../styles/utils.module.constants'
import { lightGreen } from '@mui/material/colors'
import { VisibilityOff } from '@mui/icons-material'
import MenusLayout from '../components/menu-layout'

export default function Home() {



  return (
    <>
    {/* HEADER 
      HeaderLayout is in _app.js as it's applied to all pages
      
      App.js also contains the outer-most theme (light/dark) applied to all pages
      
    */}
    
      <Head>
            <title>Optical Font</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
    
    
    {/* BODY */}
     
    
      <section id="landing" >
        
        <Grid container spacing={10}>
          <Grid container item md={6} alignItems = "flex-start">
            <Grid item className={styles.landing_container}>
              <Grid item >
                <Typography variant = 'h1'>
                  Varied fonts for <br /> varied vision. 
                </Typography> 
                </Grid>
              <Button
                variant ="string"
                sx={{
                    // padding:1,
                    // paddingRight:2,
                    my:5,
                    px:4,
                    py:1,
                    border:3,
                    borderRadius:11,
                }}

                >
                  <Typography variant = "h3">
                    Install
                  </Typography>
              </Button>
              {/* <Grid item className={styles.subtext}>
                <Typography variant="h5">
                  Install the extension and {'\n'} customize your fonts
                </Typography>
              </Grid>         */}
            </Grid>
          </Grid>

          <Grid container item md={6} >
            <Grid item  className={styles.dials_container}>
              <Image src={dials} alt=""/>
            </Grid>
          </Grid>

        </Grid>

      </section>

      <section id="menu">
        {/* set to value to scroll position useEffect */}
        <MenusLayout/>
      </section>

      <section id = "footer">
        <FooterLayout></FooterLayout>
      </section>
    
    
    </>
  )
}
