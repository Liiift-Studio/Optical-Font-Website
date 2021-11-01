import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"

import { Grid, Typography} from '@mui/material/'
import Link from 'next/link'
import { bgcolor } from '@mui/system'
import { footer_container, footer_container_mobile, footer_container_tablet } from '../styles/layout.styles'

export default function FooterLayout({children }) {

    return(
     //desk
     <>

     <Grid container 
      sx={footer_container} 
      >
        <Grid container item sm={12}

        >
          <Grid container item sm={4}
          sx={{
            // bgcolor:'brown',
            alignContent:'start',
            pl:'2vw',
            pb:'2em',

          }}>
              <Grid item container sm={12} 
              sx={{
                pb:'2em',

                // bgcolor:"green",
              }}>
                <Typography variant="h4" >
                PARTNERS
                </Typography>
              </Grid>

              <Typography variant="footer"
                              sx={{pr:2}}

              >
            <Grid container item direction='column' sm={12}

            >          
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

              <Grid item>
              <a href="https://www.liiift.studio/"  target="_blank" rel="noopener"className={styles.aFooter}>
                Liiift Studio
                </a>
                
              </Grid>
            </Grid>
            </Typography>

          </Grid>



          <Grid container item sm={4}  
            sx={{
              alignContent:'start',
            }}
          >
            <Grid item container sm={12} 
            sx={{
                pb:'2em',

                }} >
              <Typography variant="h4">
                SITE MAP
              </Typography>
            </Grid>

            <Typography variant="footer"
            
            >
                <Grid container item direction='column' sm={12}
                  sx={{
                    height:'100%',
                    // bgcolor:'green',
                    alignItems:'start'
                  }}
                >
                  <Grid item>
                    <Link href="/" >
                      <a className={styles.aFooter}>Home</a>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#FLV" >
                      <a className={styles.aFooter}>About</a>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/" >
                      <a className={styles.aFooter}>Download Extension</a>
                    </Link>
                  </Grid>
                  {/* <Grid item>
                    <Link href="/" >
                        <a className={styles.aFooter}>Download Typeface</a>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/" >
                        <a className={styles.aFooter}>Github</a>
                    </Link>
                  </Grid>  */}
                  <Grid item>
                    <Link href="/privacy-policy" >
                        <a className={styles.aFooter}>Privacy Policy</a>
                    </Link>
                  </Grid> 
                  <Grid item>
                    <Link href="/terms" >
                        <a className={styles.aFooter}>Terms</a>
                    </Link>
                  </Grid>     

                </Grid>

                
            </Typography>

          </Grid>
          <Grid container item sm={4}
           sx={{
            alignContent:'start',
          }}
          >
            <Grid item container sm={12} 
              sx={{
                // bgcolor:"yellow",
              pb:'2em',
                
            }}
            >
              <Typography variant="h4" >
              <br></br>
              </Typography>
            </Grid>

            <Typography variant="footer"
              sx={{pr:2}}
            >
              <Grid container item direction='column' sm={12} >

                <Grid item>
                  <a className={styles.aFooter} href="#FLV">Intro</a>
                </Grid>
                <Grid item>
                <a className={styles.aFooter} href="#P">Projects</a>
                </Grid>
                <Grid item>
                  <a className={styles.aFooter} href="#UG">Use Guide</a>
                </Grid>
                
                {/* <Grid item>
                <a className={styles.aFooter} href="#A">Accesibility</a> 
                </Grid>
                <Grid item>
                <a className={styles.aFooter} href="#PR">Privacy</a> 
                </Grid>      */}

   

              </Grid>
            </Typography>

          </Grid>
        </Grid>
      


      </Grid>

 

{/*  Tablet */}
      <Grid container sm = {12}
        sx={footer_container_tablet}
      >
        <Grid container item sm={6} sx={{
          
          alignContent:'start'}} 
          spacing={5} 
          
          >

            <Grid item container sm={12} 
            sx={{
              // justifyContent:'center',

            }} 
            >
              <Typography variant="h4" >
              PARTNERS
              </Typography>
            </Grid>

            <Grid item container sm={12}
              // sx={{justifyContent:'center',}}
            >
              <Typography variant="footer"
              sx={{pr:2}}
              >
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

                <Grid item>
              <a href="https://www.liiift.studio/"  target="_blank"  rel="noopener"className={styles.aFooter}>
                Liiift Studio
                </a>
                
              </Grid>

              </Typography>
            </Grid>
            </Grid>
            <Grid container item sm={6} sx={{
          
          alignContent:'top'}} 
          spacing={5} 
          
          >
            <Grid item container sm={12} 
            // sx={{justifyContent:'center',}}
            >
              <Typography variant="h4" >
              SITE MAP
              </Typography>
            </Grid>

            <Grid item container sm={12}
              // sx={{justifyContent:'center',}}
            >
            <Typography variant="footer">

              <Grid item>
                <Link href="/" >
                  <a className={styles.aFooter}>Home</a>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#FLV" >
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
                  <a className={styles.aFooter} href="#FLV">Intro</a>
                </Grid>
                <Grid item>
                <a className={styles.aFooter} href="#P">Projects</a>
                </Grid>
                <Grid item>
                  <a className={styles.aFooter} href="#UG">Use Guide</a>
                </Grid>

                {/* <Grid item>
                <a className={styles.aFooter} href="#A">Accesibility</a> 
                </Grid>
                <Grid item>
                <a className={styles.aFooter} href="#PR">Privacy</a> 
                </Grid>      */}

                  <Grid item>
                    <Link href="/privacy-policy" >
                        <a className={styles.aFooter}>Privacy Policy</a>
                    </Link>
                  </Grid> 
                  <Grid item>
                    <Link href="/terms" >
                        <a className={styles.aFooter}>Terms</a>
                    </Link>
                  </Grid>    
              </Typography>
            </Grid>

            

        </Grid>
      </Grid>


      {/*  Mobile */}
      <Grid container 
        sx={footer_container_mobile}
      >
        <Grid container item sm={12} sx={{
          
          alignContent:'top'}} 
          spacing={5} 
          
          >

            <Grid item container sm={12} 
            sx={{
              justifyContent:'center',

            }} 
            >
              <Typography variant="h4" >
              PARTNERS
              </Typography>
            </Grid>

            <Grid item container sm={12}
              sx={{justifyContent:'center',}}
            >
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
                <Grid item>
              <a href=""  target="https://www.liiift.studio/" rel="noopener"className={styles.aFooter}>
                Liiift Studio
                </a>
                
              </Grid>

              </Typography>
            </Grid>

            <Grid item container sm={12} 
            sx={{justifyContent:'center',}}
            >
              <Typography variant="h4" >
              SITE MAP
              </Typography>
            </Grid>

            <Grid item container sm={12}
              sx={{justifyContent:'center',}}
            >
            <Typography variant="footer">

              <Grid item>
                <Link href="/" >
                  <a className={styles.aFooter}>Home</a>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#FLV" >
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
                  <a className={styles.aFooter} href="#FLV">Intro</a>
                </Grid>
                <Grid item>
                <a className={styles.aFooter} href="#P">Projects</a>
                </Grid>
                <Grid item>
                  <a className={styles.aFooter} href="#UG">Use Guide</a>
                </Grid>
{/*    
                <Grid item>
                <a className={styles.aFooter} href="#A">Accesibility</a> 
                </Grid>
                <Grid item>
                <a className={styles.aFooter} href="#PR">Privacy</a> 
                </Grid>      */}
                      <Grid item>
                    <Link href="/privacy-policy" >
                        <a className={styles.aFooter}>Privacy Policy</a>
                    </Link>
                  </Grid> 
                  <Grid item>
                    <Link href="/terms" >
                        <a className={styles.aFooter}>Terms</a>
                    </Link>
                  </Grid>    
              </Typography>
            </Grid>

            

        </Grid>
      </Grid>
      </>
    )
}
