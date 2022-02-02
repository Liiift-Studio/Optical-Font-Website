import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import Image from 'next/image'

import {Icon,IconButton, Grid, Box, CssBaseline, Button, Typography, SvgIcon} from '@mui/material/'
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'
import {ReactComponent as Logo} from '../public/images/moon.svg'
import lightIcon from '../public/images/sun.svg'
import darkIcon from '../public/images/moon.svg'
import logoText from '../public/images/logo-type.svg'
import logoTextDark from '../public/images/logo-type-white.svg'
import imgLight from '../public/images/Optical_3D.png'
import imgDark from '../public/images/Optical_3D.png'
import cursor from '../public/images/cursor.svg'
import cursorDark from '../public/images/cursor-white.svg'


import HeaderLayout from '../components/header-layout'
import LandingLayout from '/components/landing-layout'
import MenusLayout from '../components/menu-layout'
import FooterLayout from '../components/footer-layout'
import { dm_icon, header_container, logo_container, logo_container_mobile } from '../styles/layout.styles'
import { useRouter } from 'next/router'



export default function Home({lightSwitch, children }) {
    lightSwitch = lightSwitch || true;
    const router = useRouter();

    const [darkMode, setDarkMode] = useState(()=>{
        if (router.query.darkMode !== undefined){
            if(router.query.darkMode === 'true') return(true);
        }
        return (false);
    });


    const changeDarkMode = () =>{
        setDarkMode(!darkMode);
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
        }
    });

    // useEffect(() => {
    //     console.log(router.query.darkMode);
    //     if (router.query.darkMode !== undefined){
    //         if(router.query.darkMode === 'true') setDarkMode(true);
    //     }
    //     return setDarkMode(false);
    // },[router.query.darkMode]);


    return(
        <>
            <ThemeProvider theme={chooseTheme()}>
                <CssBaseline/>
                <HeaderLayout darkMode={darkMode} changeDarkMode={changeDarkMode} />
                <LandingLayout imgSrc={darkMode ? imgDark : imgLight}/>
                <MenusLayout darkMode={darkMode} />
                <FooterLayout darkMode ={darkMode}/>
                {children}
            </ThemeProvider>        
        </>
    )
}