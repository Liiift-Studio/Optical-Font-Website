import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"

import { Grid} from '@mui/material/'
import Link from 'next/link'

export default function FooterLayout({children }) {

    return(
     
        <Grid container className = {styles.footer_container} bgcolor="background.footer" >

        <Grid container item sm={4}  sx={{pl:"4vw"}}>
          <Grid item sm={12}>
            <h2>PARTNERS</h2>
          </Grid>
      {/* TODO : THESE LINKS NEED LOCATIONS */}
          <Grid container item direction='column' sm={12}>          
            <Grid item>
              <a  rel="noopener noreferrer" href="https://www.ic.gc.ca/eic/site/118.nsf/eng/home" target="_blank" className={styles.aFooter}>
                The Accessible Technology Program
              </a>
              
            </Grid>
            <Grid item>
              <a className={styles.aFooter} href="https://disabilityalliancebc.org/" target="_blank" rel="noopener">
                Disibility Alliance BC
              </a>
            </Grid>
            <Grid item>
            <a href="https://www.ecuad.ca/" target="_blank" rel="noopener" className={styles.aFooter}>
              Emily Carr University
            </a>
            </Grid>
            <Grid item>
            <a href="https://research.ecuad.ca/healthdesignlab/"  target="_blank" rel="noopener" className={styles.aFooter}>
              The Health Design Lab at ECU
              </a>
            </Grid>
            <Grid item>
            <a href="https://shumka.ecuad.ca/"  target="_blank" rel="noopener"className={styles.aFooter}>
              Shumka Centre at ECU
              </a>
              
            </Grid>
          </Grid>
        </Grid>


        <Grid container item sm={8} sx={{
          pl:"7vw",
          '@media only screen and (max-width:600px)' :{
            pl:"4vw"
          },
          
          }}>
          
          <Grid item sm={12}>
            <h2>SITE MAP</h2>
          </Grid>
      {/* TODO : This links need locations! */}
          <Grid container item  sm={12}>
            <Grid container item direction='column' sm={6}>
              <Grid item>
                <Link href="/" >
                  <a className={styles.aFooter}>Home</a>
                </Link>
              </Grid>
              <Grid item>
              <Link href="/" >
                  <a className={styles.aFooter}>About</a>
                </Link>
              </Grid>
              <Grid item>
              <Link href="/" >
                  <a className={styles.aFooter}>Download Extension</a>
                </Link>
              </Grid>
              <Grid item>
              <Link href="/" >
                  <a className={styles.aFooter}>Download Typeface</a>
                </Link>
              </Grid>
              <Grid item>
              <Link href="/" >
                  <a className={styles.aFooter}>Github</a>
              </Link>
              </Grid>     

            </Grid>

            <Grid container item direction='column' sm={6}>
              <Grid item>
                <a className={styles.aFooter} href="#FLV">Fonts & Low Vision</a>
              </Grid>
              <Grid item>
                <a className={styles.aFooter} href="#UG">Use Guide</a>
              </Grid>
              <Grid item>
              <a className={styles.aFooter} href="#P">Projects</a>
              </Grid>
              <Grid item>
              <a className={styles.aFooter} href="#A">Accesibility</a> 
              </Grid>
              <Grid item>
              <a className={styles.aFooter} href="#PR">Privacy</a> 
              </Grid>     

            </Grid>
                   
          </Grid>
        </Grid>
      </Grid>

    )
}
