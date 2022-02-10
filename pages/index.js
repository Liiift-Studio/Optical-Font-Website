import React, { createRef, useEffect, useState } from "react"

import {Icon,IconButton, Grid, Box, CssBaseline, Button, Typography, SvgIcon} from '@mui/material/'
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"
import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'

import imgLight from '../public/images/Optical_3D.png'
import imgDark from '../public/images/Optical_3D.png'

import HeaderLayout from '../components/header-layout'
import LandingLayout from '/components/landing-layout'
import MenusLayout from '../components/menu-layout'
import FooterLayout from '../components/footer-layout'
import { useRouter } from 'next/router'
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Home({lightSwitch, children }) {
    lightSwitch = lightSwitch || true;
    const footerRef= createRef();
    const router = useRouter();

    const [darkMode, setDarkMode] = useState(()=>{
        if (router.query.darkMode !== undefined){
            if(router.query.darkMode === 'true') return(true);
            else return false;            
        }

        return (false);
    });
    const [about, setAbout] = useState(false);

    const systemDarkMode = useMediaQuery( '(prefers-color-scheme: dark)');

    const changeDarkMode = () =>{
        setDarkMode(!darkMode);
    }

    const aboutClick= () =>{
        setAbout(!about);
        console.log(about);
    }

    function chooseTheme(){
        var x =(darkMode ? responsiveFontSizes(darkTheme) : responsiveFontSizes(lightTheme));
        return x;
    }

    useEffect(() => {
        window.onload = function() {
            setTimeout(function() {
                document.querySelector("html").className = 'loaded';
            }, 1500);

            setDarkMode(systemDarkMode);
        }
    });

    return(
        <>
            <ThemeProvider theme={chooseTheme()}>
                <CssBaseline/>
                <section id="Header">
                <HeaderLayout darkMode={darkMode} changeDarkMode={changeDarkMode} aboutClick={aboutClick}/>
                </section>
                <section id="Install">
                <LandingLayout imgSrc={darkMode ? imgDark : imgLight} aboutClick={aboutClick}/>
                </section>
                <MenusLayout darkMode={darkMode} about={about} footerRef={footerRef} />
                <section id ="Footer" ref={footerRef}>
                <FooterLayout darkMode ={darkMode}/>
                </section>
                {children}
            </ThemeProvider>        
        </>
    )
}