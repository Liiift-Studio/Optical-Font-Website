import '../styles/globals.css'
import React, {useState, Component } from 'react';
// import styled, { ThemeProvider} from "styled-components";
import Head from 'next/head'
import HeaderLayout from '../components/header-layout';

export const siteTitle = 'Optical Font Website'

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
                        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HeaderLayout lightSwitch={true}>
        <Component {...pageProps} />
      </HeaderLayout>
</>

    );
}

export default MyApp

