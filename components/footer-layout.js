import Head from "next/head";
import styles from "../styles/layout.module.css";
import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material/";
import Link from "next/link";
import { bgcolor } from "@mui/system";
import { footer_container, footer_container_mobile, footer_container_tablet, } from "../styles/layout.styles";

export default function FooterLayout({darkMode, children }) {


  return (
    <>
      <Grid container sx={footer_container} >
        <Grid item xs={6} md={4} pb={5}>
          <Typography pb={2} variant="h3">Site Map</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} >
              <Typography variant="body1">
                <Link href="/"><a className={styles.aFooter}>Home</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href={{
                  pathname:'/',
                  hash:'#About',
                  query:{darkMode:darkMode}
                  
                }}><a className={styles.aFooter}>About</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad"><a className={styles.aFooter}>Download&nbsp;Extension</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href={{
                  pathname:"/process/",
                  query:{darkMode:darkMode},
                  }}><a className={styles.aFooter}>Process</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link  href={{
                  pathname:'/',
                  hash:'#Faq',
                  query:{darkMode:darkMode}}}><a className={styles.aFooter}>FAQ</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href={{
                  pathname:"/privacy-policy/",
                  query:{darkMode:darkMode},
                  }}><a className={styles.aFooter}>Privacy&nbsp;Policy</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href={{
                  pathname:"/privacy-policy/",
                  query:{darkMode:darkMode},
                  hash:'Terms'
                 }} ><a className={styles.aFooter}>Terms</a></Link>
              </Typography>
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item xs={6} md={8} >
          <Typography pb={2} variant="h3">Partners</Typography>
          <Typography variant="body1">                  
            <a rel="noopener noreferrer" href="https://www.ic.gc.ca/eic/site/118.nsf/eng/home" target="_blank" className={styles.aFooter}>The&nbsp;Accessible&nbsp;Technology&nbsp;Program</a>   
          </Typography>
          <Typography variant="body1">   
            <a className={styles.aFooter} href="https://disabilityalliancebc.org/" target="_blank" rel="noopener">Disibility&nbsp;Alliance&nbsp;BC</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://www.ecuad.ca/" target="_blank" rel="noopener" className={styles.aFooter}>Emily&nbsp;Carr&nbsp;University</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://research.ecuad.ca/healthdesignlab/" target="_blank" rel="noopener" className={styles.aFooter}>The&nbsp;Health&nbsp;Design&nbsp;Lab&nbsp;at&nbsp;ECU</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://shumka.ecuad.ca/" target="_blank" rel="noopener" className={styles.aFooter}>Shumka&nbsp;Centre&nbsp;at&nbsp;ECU</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://www.liiift.studio/" target="_blank" rel="noopener" className={styles.aFooter}>Liiift&nbsp;Studio</a>
          </Typography>
        </Grid>

      </Grid>
    </>
  );
}
