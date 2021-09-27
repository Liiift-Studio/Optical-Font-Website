import '../styles/globals.css'
import React, {useState, Component } from 'react';
import styled, { ThemeProvider} from "styled-components";
import HeaderLayout from '../components/header-layout';


function MyApp({ Component, pageProps }) {
  

    return (
      <HeaderLayout lightSwitch={true}>
        <Component {...pageProps} />
      </HeaderLayout>


    );
}

export default MyApp

