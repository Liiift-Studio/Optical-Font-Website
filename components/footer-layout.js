import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import styled, { ThemeProvider} from "styled-components";

import {Card, CardContent, Grid, Box} from '@material-ui/core'
import { spacing } from '@material-ui/system';

export default function FooterLayout({children }) {

    return(
      <Card>
        <CardContent>
        <Grid container >
        <Grid container item direction='column' sm={6}>
          <Grid item>
            <h2>SITE MAP</h2>
          </Grid>
          <Grid item>
            Home
          </Grid>
          <Grid item>
            Simple Customization
          </Grid>
          <Grid item>
            About & Contact
          </Grid>
          <Grid item>
          Accessibility
          </Grid>
          <Grid item>
            Privacy
          </Grid>            
        </Grid>
        <Grid container item direction='column' sm={6}>
          <Grid item>
            <h2>Partners</h2>
          </Grid>
          <Grid item>
            The Accessible Technology Program
          </Grid>
          <Grid item>
            Disibility Alliance BC
          </Grid>
          <Grid item>
            Emily Carr University
          </Grid>
          <Grid item>
            The Health Design Lab at ECU
          </Grid>
          <Grid item>
            Shumka Centre at ECU
          </Grid>
        </Grid>
      </Grid>
      </CardContent>
      </Card>
    )
}
