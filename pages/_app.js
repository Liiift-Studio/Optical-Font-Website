import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, Component } from 'react';
import styled, { ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "../styles/themes.js";
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