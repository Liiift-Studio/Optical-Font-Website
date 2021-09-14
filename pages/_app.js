import '../styles/globals.css'
import React, {useState, Component } from 'react';
import styled, { ThemeProvider} from "styled-components";
import "../styles/themes"
import HeaderLayout from '../components/header-layout';

// import GetDarkMode from "../components/header"




function MyApp({ Component, pageProps }) {
  

    return (
      <HeaderLayout lightSwitchOn>
        <Component {...pageProps} />
      </HeaderLayout>


    );
}

export default MyApp