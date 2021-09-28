import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"

import { Grid} from '@mui/material/'
import Link from 'next/link'

export default function FooterLayout({children }) {

    return(
     
        <Grid container className = {styles.footer_container} bgcolor="background.footer" >

        <Grid container item sm={4}>
          <Grid item sm={12}>
            <h2>PARTNERS</h2>
          </Grid>
      {/* TODO : THESE LINKS NEED LOCATIONS */}
          <Grid container item direction='column' sm={12}>          
            <Grid item>
              <Link href="/" >
                  <a className={styles.a}>The Accessible Technology Program</a>
              </Link>
              
            </Grid>
            <Grid item>
            <Link href="/" >
                  <a className={styles.a}>Disibility Alliance BC</a>
              </Link>
            </Grid>
            <Grid item>
            <Link href="/" >
                  <a className={styles.a}>Emily Carr University</a>
              </Link>
            </Grid>
            <Grid item>
            <Link href="/" >
                  <a className={styles.a}>The Health Design Lab at ECU</a>
              </Link>
            </Grid>
            <Grid item>
            <Link href="/" >
                  <a className={styles.a}>Shumka Centre at ECU</a>
              </Link>
              
            </Grid>
          </Grid>
        </Grid>


        <Grid container item sm={8}>
          <Grid item sm={12}>
            <h2>SITE MAP</h2>
          </Grid>
      {/* TODO : This links need locations! */}
          <Grid container item  sm={12}>
            <Grid container item direction='column' sm={6}>
              <Grid item>
                <Link href="/" >
                  <a className={styles.a}>Home</a>
                </Link>
              </Grid>
              <Grid item>
              <Link href="/" >
                  <a className={styles.a}>About</a>
                </Link>
              </Grid>
              <Grid item>
              <Link href="/" >
                  <a className={styles.a}>Download Extension</a>
                </Link>
              </Grid>
              <Grid item>
              <Link href="/" >
                  <a className={styles.a}>Download Typeface</a>
                </Link>
              </Grid>
              <Grid item>
              <Link href="/" >
                  <a className={styles.a}>Github</a>
              </Link>
              </Grid>     

            </Grid>

            <Grid container item direction='column' sm={6}>
              <Grid item>
                <a className={styles.a} href="#FLV">Fonts & Low Vision</a>
              </Grid>
              <Grid item>
                <a className={styles.a} href="#UG">Use Guide</a>
              </Grid>
              <Grid item>
              <a className={styles.a} href="#P">Projects</a>
              </Grid>
              <Grid item>
              <a className={styles.a} href="#A">Accesibility</a> 
              </Grid>
              <Grid item>
              <a className={styles.a} href="#PR">Privacy</a> 
              </Grid>     

            </Grid>
                   
          </Grid>
        </Grid>
      </Grid>

    )
}
