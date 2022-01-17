import "../styles/globals.css";
import React, { useState, Component } from "react";
// import styled, { ThemeProvider} from "styled-components";
import Head from "next/head";
import HeaderLayout from "../components/header-layout";
import {Helmet} from "react-helmet";
export const siteTitle = "Optical Font Website";
import { CssBaseline } from "@mui/material";
import { Language } from "@mui/icons-material";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet htmlAttributes={{ lang : 'en' }}/>
      <Head>
        <title>Optical Font</title>
        <meta name="description" content="Optical Font" />
        <meta name="og:title" content={siteTitle} />
        <link rel="shortcut icon" href="../public/images/favicon.ico" />
        {/* <link rel="preload" href="/fonts/Optical-Regular.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Optical-Light.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Optical-Medium.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Optical-Bold.woff2" as="font" crossOrigin="" /> */}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
