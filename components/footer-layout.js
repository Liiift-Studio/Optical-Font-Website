import Head from "next/head";
import styles from "../styles/layout.module.css";
import React, { useEffect, useState } from "react";

import { Grid, Typography } from "@mui/material/";
import Link from "next/link";
import { bgcolor } from "@mui/system";
import { footer_container, footer_container_mobile, footer_container_tablet, } from "../styles/layout.styles";

export default function FooterLayout({ children }) {
  return (
    <>
      <Grid container sx={footer_container} spacing={4}>

        <Grid item xs={12} lg={4} pb={5} >
          <Typography pb={2} variant="h3">Partners</Typography>
          <Typography variant="body1">                  
            <a rel="noopener noreferrer" href="https://www.ic.gc.ca/eic/site/118.nsf/eng/home" target="_blank" className={styles.aFooter}>The Accessible Technology Program</a>   
          </Typography>
          <Typography variant="body1">   
            <a className={styles.aFooter} href="https://disabilityalliancebc.org/" target="_blank" rel="noopener">Disibility Alliance BC</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://www.ecuad.ca/" target="_blank" rel="noopener" className={styles.aFooter}>Emily Carr University</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://research.ecuad.ca/healthdesignlab/" target="_blank" rel="noopener" className={styles.aFooter}>The Health Design Lab at ECU</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://shumka.ecuad.ca/" target="_blank" rel="noopener" className={styles.aFooter}>Shumka Centre at ECU</a>   
          </Typography>
          <Typography variant="body1">   
            <a href="https://www.liiift.studio/" target="_blank" rel="noopener" className={styles.aFooter}>Liiift Studio</a>
          </Typography>
        </Grid>

        <Grid item xs={12} lg={8} pb={5}>
          <Typography pb={2} variant="h3">Site Map</Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} >
              <Typography variant="body1">
                <Link href="/"><a className={styles.aFooter}>Home</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href="#FLV"><a className={styles.aFooter}>About</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad"><a className={styles.aFooter}>Download Extension</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href="/privacy-policy"><a className={styles.aFooter}>Privacy Policy</a></Link>
              </Typography>
              <Typography variant="body1">
                <Link href="/privacy-policy#terms"><a className={styles.aFooter}>Terms</a></Link>
              </Typography>
            </Grid>

            <Grid item xs={12} lg={6} >
              <Typography variant="body1">
                <a className={styles.aFooter} href="#FLV">Intro</a>
              </Typography>
              <Typography variant="body1">
              <a className={styles.aFooter} href="#P">Project</a>
              </Typography>
              <Typography variant="body1">
                <a className={styles.aFooter} href="#UG">Use Guide</a>
              </Typography>
            </Grid>
          </Grid>
          
        </Grid>

      </Grid>
    </>
  );
}
