import '../styles/globals.css'
import React, {useState, Component } from 'react';
// import styled, { ThemeProvider} from "styled-components";
import Head from 'next/head'
import HeaderLayout from '../components/header-layout';

export const siteTitle = 'Optical Font Website'
import { CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }) {
  

    return (
      <>
      <Head>
            <title>Optical Font</title>
            <meta
                  name="description"
                  content="Optical Font"
              />
            <meta name="og:title" content={siteTitle} />
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <link
              rel="preload"
              href="/fonts/Optical9VF.woff2"
              as="font"
              crossOrigin=""
              />
            <link
              rel="preload"
              href="/fonts/Optical9VF.woff"
              as="font"
              crossOrigin=""
              />
      </Head>
      
      

        <Component {...pageProps} />
</>

    );
}

export default MyApp

