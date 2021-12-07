import Image from 'next/image'
import React, { useEffect, useState } from "react"
import {List,ListItem,ListItemText, ListItemIcon,ListItemButton,Typography ,ToggleButton,Button, Grid, Paper, colors, Box, ToggleButtonGroup} from '@mui/material'
import styles from '../styles/layout.module.css'
import {About,FLV,UG,P,A,PR, FlvCopy, UgCopy, ProjectCopy, loe, LevelOfEnhancementCopy, c, ControlsCopy, m, MenuCopy} from '../styles/utils.module.constants'
import CircleIcon from '@mui/icons-material/Circle';
import { flv,ug,p,a,pr,flvCopy,ugCopy,pCopy,aCopy,prCopy } from "../styles/utils.module.constants";
import { Waypoint } from 'react-waypoint';
import { body_container, circle, copy, copy_container, header, img_container_ext } from "../styles/layout.styles";

import img_ext from '../public/images/Extension_Light.svg'
import img_menu  from '../public/images/Extension_Light_Menu.svg'



export default function MenusLayout({children,darkMode }) {
    const [toggleValue, setToggle]= useState(FLV);
    const SECTION_SPACING = 10;

return (
    <>
    <Grid container item sm={12} sx={body_container}>
            <Grid item container sm={4} className={styles.menuButtons_container} display={{xs:'none', md:'flex'}}>
                <List>
                    <ListItem  disablePadding
                    className={styles.a}
                    component="a" 
                    // onClick={()=>{setToggle(FLV)}}
                    >
                        <ListItemButton  href="#FLV" variant ="string"> 
                            {toggleValue === FLV ? 
                                <ListItemIcon >
                                    <Box sx={circle}/>
                                </ListItemIcon>
                                : <></>}
                                <ListItemText  inset={toggleValue !== FLV}>
                                    <Typography variant ="h4">
                                        {flv}
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding 
                        className={styles.a}
                        component="a" 
                        // onClick={()=>{setToggle(P)}}
                        >
                        <ListItemButton  href="#P">
                            {toggleValue === P ? 
                                <ListItemIcon >
                                    <Box sx={circle}/>
                                </ListItemIcon>
                            : <></>}
                            <ListItemText inset={toggleValue !== P} >
                                <Typography variant ="h4">  
                                    {p}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding 
                        className={styles.a}
                        component="a">
                        <ListItemButton href="#UG">
                            {toggleValue === UG ? 
                                <ListItemIcon>
                                    <Box sx={circle}/>
                                </ListItemIcon>
                            : <></>}
                            <ListItemText  inset={toggleValue !== UG} >
                                    <Typography variant ="h4">  
                                    {ug}
                                    </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Grid>
            
        {/* COPY */}
            <Grid item container md={8} alignItems="center"   
                sx={copy_container}>
                <Grid item container pt={2.3}>
                    <Waypoint 
                        topOffset="35%"
                        bottomOffset="55%"
                        onEnter={()=>setToggle(FLV)}>
                    <section id="FLV">
                        <Grid item container sx={{mb:SECTION_SPACING,}}>
                            <Grid item container sx={header}>
                                <Typography variant ='h4'> 
                                    {flv}
                                </Typography>
                            </Grid>
                            <Grid item container sx={copy}>
                                <Typography variant='body' display ="block">
                                        {/* {flvCopy} */}
                                        <FlvCopy/>
                                </Typography>
                            </Grid>
                        </Grid>
                    </section>
                </Waypoint>

                <Waypoint 
                    topOffset="35%"
                    bottomOffset="55%"
                    onEnter={()=>setToggle(P)}>
                    <section id="P" >
                        <Grid item container sx={{mb:SECTION_SPACING,}}>
                            <Grid item container sx={header}>
                                <Typography variant ='h4' >
                                        {p}
                                </Typography>
                            </Grid>
                            <Grid item container sx={copy}>
                                <Typography variant='body'>
                                        <ProjectCopy/>
                                </Typography>
                            </Grid>
                        </Grid>
                    </section>
                </Waypoint>

                <Waypoint 
                    topOffset="35%"
                    bottomOffset="55%"
                    onEnter={()=>setToggle(UG)}>
                    <section id="UG" >
                        <Grid item container sx={{mb:SECTION_SPACING,}}>
                            <Grid item container
                                sx={header}>
                                <Typography variant ='h4'>
                                    {ug}
                                </Typography>
                            </Grid>
                            <Grid item container sx={copy}>
                                <Typography variant='body'>
                                      <UgCopy/>
                                </Typography>
                            </Grid>
                        </Grid>
                    </section>
                </Waypoint>

                <Grid item container sx={{mb:SECTION_SPACING,}}>
                        <Grid item container className={styles.landing_right_container} sx={copy_container}>
                            <Grid item sx={img_container_ext}>
                                <Image  src={img_ext}  alt="Web extension including controls of font legibility including boldness, spacing, letter differentiation and other options. " />
                            </Grid>
                        </Grid>
                    </Grid>

                <Grid item container sx={{mb:SECTION_SPACING,}}>
                    <Grid item container sx={header}>
                        <Typography variant ='h4'>
                            {loe}
                        </Typography>
                    </Grid>

                    <Grid item container sx={ copy}>
                        <Typography variant='body'>
                            <LevelOfEnhancementCopy/>
                        </Typography>
                    </Grid>
                </Grid>

            <Grid item container sx={{mb:SECTION_SPACING,}}>
                <Grid item container sx={header}>
                    <Typography variant ='h4'>
                        {c}
                    </Typography>
                </Grid>

                <Grid item container sx={copy}>
                    <Typography variant='body'>
                        <ControlsCopy/>

                    </Typography>
                </Grid>
            </Grid>

            <Grid item container sx={{mb:SECTION_SPACING,}}>
                <Grid item container sx={header}>
                    <Typography variant ='h4'>
                        {m}
                    </Typography>
                </Grid>
                <Grid item container sx={copy}>
                    <Typography variant='body'>
                        <MenuCopy/>
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container sx={{mb:SECTION_SPACING,}}>
                <Grid item container sx={copy_container}>
                    <Grid item sx={img_container_ext}>
                        <Image  src={img_menu}  alt="Web extension’s menu buttons for dark mode, use guide, and feedback." />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
</Grid>
        </>
    )
}