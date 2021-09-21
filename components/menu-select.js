import Head from 'next/head'
import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import styled, { ThemeProvider} from "styled-components";

import {Card, CardContent, Grid, Box} from '@mui/material/'
import {About,FLV,UG,P,A,PR} from '../styles/utils.module.constants'

export default function MenuSelect({menu ,children }) {

    let text = "";

    if( menu === About){
        text =                 "Optical is a free set of font and a web tools for low vision created out of a research project in the Health Design Lab at Emily Carr University with support from The Accessible Technology Program and Disability Alliance BC. Start with a base font, then fine tune it to your specific needs using either our simple or advanced customization tools. Then use your font with a browser extension to use it online, or download it to use on your desktop. > Learn More"
    }
    else if ( menu === FLV){
        text = " F L V"
    }
    else if ( menu === UG){
        text = "UG"
    }
    else if ( menu === P){
        text = "P" 
    }
    else if (menu === A){
        text = "A"
    }
    else if (menu === PR){
        text = "PR"
    }
    else {
        text = ""
    }
    return(
        <>
            {text}
        </>
        

    )
}
