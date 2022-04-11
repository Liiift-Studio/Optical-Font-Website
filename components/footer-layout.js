import Head from "next/head";
import styles from "../styles/layout.module.css";
import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material/";
import Link from "next/link";
import { bgcolor } from "@mui/system";
import { footer_container, footer_container_mobile, footer_container_tablet, } from "../styles/layout.styles";

export default function FooterLayout({darkMode, children }) {
const hover = {
  '&:hover':{
    color:'green',
  }
}

  return (
    <>
      <Grid container sx={footer_container} >
        <Grid item xs={6} md={4} pb={5}>
          <Typography pb={2} variant="h3">SITE MAP</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} >
              <Typography variant="body1">
                <Link href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad" 
                  >
                  <a className={styles.aFooter} target="_blank">Install</a>
                  </Link>
              </Typography>

              <Typography variant="body1">
                <Link href={{
                  pathname:'/',
                  hash:'#About',
                  query:{darkMode:darkMode}
                }}><a className={styles.aFooter}>About</a></Link>
              </Typography>

              <Typography variant="body1">
                <Link  href={{
                  pathname:'/',
                  hash:'#Faq',
                  query:{darkMode:darkMode}}}>
                    <a className={styles.aFooter}>FAQ</a></Link>
              </Typography>

              <Typography variant="body1">
                <Link href={{
                  pathname:'/',
                  hash:'#Accessibility',
                  query:{darkMode:darkMode}}}>
                    <a className={styles.aFooter}>Accessibility</a></Link>
              </Typography>

              <Typography variant="body1">
                <Link href={{
                  pathname:'/',
                  hash:'#Feedback',
                  query:{darkMode:darkMode}}
                }><a className={styles.aFooter}>Feedback</a></Link>
              </Typography>

              <Typography variant="body1">
                <Link href={{
                   pathname:'/',
                   hash:'#Privacy',
                   query:{darkMode:darkMode}}}>
                     <a className={styles.aFooter}>Privacy</a></Link>
              </Typography>
              
        
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item xs={6} md={8} >
          <Typography pb={2} variant="h3">PARTNERS</Typography>
          <Typography variant="body1">                  
            <a rel="noopener noreferrer" href="https://www.ic.gc.ca/eic/site/118.nsf/eng/home" target="_blank" className={styles.aFooter}>The&nbsp;Accessible&nbsp;Technology&nbsp;Program</a>   
          </Typography>
          <Typography variant="body1">   
            <a className={styles.aFooter} href="https://disabilityalliancebc.org/" target="_blank" rel="noopener">Disability&nbsp;Alliance&nbsp;BC</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://research.ecuad.ca/healthdesignlab/" target="_blank" rel="noopener" className={styles.aFooter}>The&nbsp;Health&nbsp;Design&nbsp;Lab&nbsp;at&nbsp;ECU</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://shumka.ecuad.ca/" target="_blank" rel="noopener" className={styles.aFooter}>Shumka&nbsp;Centre&nbsp;at&nbsp;ECU</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://www.ecuad.ca/" target="_blank" rel="noopener" className={styles.aFooter}>Emily&nbsp;Carr&nbsp;University</a>   
          </Typography>
        </Grid>

      </Grid>
    </>
  );
}
