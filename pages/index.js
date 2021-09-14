import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { ThemeProvider } from 'styled-components'
import { landingTheme } from '../styles/themes'

// import HeaderLayout from '../components/header-layout'
import utilStyles from '../styles/utils.module.css'
import {FormControl, FormControlLabel,Button, Grid, Box} from '@material-ui/core'
import { palette } from '@material-ui/system';

import dials from '../public/images/dials.png'

import { getDM } from '../components/header-layout'
import FooterLayout from '../components/footer-layout'

// const theme 

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
    
    
    {/* BODY -> TODO : put into its own layout */}
     
    

      <section id="landing" className={utilStyles.headingMd}>
        
        <Grid container spacing={6}>
          <Grid container item sm={6}>
            <Grid item>
              <h1>
                Fonts customized to varied vision
              </h1>
                <Button  onClick="">Download</Button>
              Install the extension and customize your fonts
            </Grid>

          </Grid>
          <Grid container item sm={6}>
            <Image src={dials} alt=""/>
          </Grid>

        </Grid>

      </section>
      <section id="about">
        <Grid container >
          <Box p={5} >
          Optical is a free set of font and a web tools for low vision created out of a research project in the Health Design Lab at Emily Carr University with support from The Accessible Technology Program and Disability Alliance BC. Start with a base font, then fine tune it to your specific needs using either our simple or advanced customization tools. Then use your font with a browser extension to use it online, or download it to use on your desktop. > Learn More
          </Box>
        </Grid>
      </section>


      {/* FOOTER TOD0 : put into its own layout */}
      <section id = "footer">
        <FooterLayout></FooterLayout>


      </section>
    
    
    </>
  )
}
