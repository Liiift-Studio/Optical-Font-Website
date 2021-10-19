import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"

import { Grid, Typography} from '@mui/material/'
import Link from 'next/link'
import { bgcolor } from '@mui/system'

export default function FooterLayout({children }) {

    return(
     //desk
     <>
      <Grid container className = {styles.footer_container} bgcolor="background.footer"   display={{xs:'none', md:'block'}}
      >
        <Grid container item sm={12} sx={{
          alignContent:'top'}} spacing={5} 
          >
        
          <Grid container item sm={4} className = {styles.footer_column_container} >
            <Grid item sm={12} >
              <Typography variant="h4" sx={{paddingBottom:"2rem"}}>
              PARTNERS
              </Typography>
            </Grid>
            
            <Typography variant="footer">
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
            </Typography>

          </Grid>
          <Grid container item sm={4} className = {styles.footer_column_container} sx={{marginLeft:'-1.5vw'}} >
            <Grid item sm={12} sx={{paddingBottom:"2rem"}} >
              <Typography variant="h4">
              SITE MAP
              </Typography>
            </Grid>

            <Typography variant="footer">
                <Grid container item direction='column' sm={12} >
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

                
            </Typography>

          </Grid>

          <Grid container item sm={4} className = {styles.footer_column_container}>
            <Grid item sm={12} >
              <Typography variant="h4" sx={{paddingBottom:"2rem"}}>
              <br></br>
              </Typography>
            </Grid>

            <Typography variant="footer">
              <Grid container item direction='column' sm={12} >

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
            </Typography>

          </Grid>

        </Grid>
      </Grid>

      <Grid container className = {styles.footer_container} bgcolor="background.footer"   display={{xs:'block', md:'none'}} >
        <Grid container item sm={12} sx={{
          paddingLeft:3.3,
          alignContent:'top'}} 
          spacing={5} 
          
          >

            <Grid item container sm={12}  
            >
              <Typography variant="h4" >
              PARTNERS
              </Typography>
            </Grid>

            <Grid item container sm={12}>
              <Typography variant="footer">
                <Grid item>
                  <a  rel="noopener noreferrer" href="https://www.ic.gc.ca/eic/site/118.nsf/eng/home" target="_blank" className={styles.aFooter}>
                    The Accessible Technology Program
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

              </Typography>
            </Grid>

            <Grid item sm={12} >
              <Typography variant="h4" >
              SITE MAP
              </Typography>
            </Grid>

            <Grid item container sm={12}>
            <Typography variant="footer">

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
              </Typography>
            </Grid>

            

        </Grid>
      </Grid>
      </>
    )
}
