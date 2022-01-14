import Image from 'next/image'
import React, { useEffect, useState } from "react"
import {Tabs, Tab, List,ListItem,ListItemText, ListItemIcon,ListItemButton,Typography ,ToggleButton,Button, Grid, Paper, colors, Box, ToggleButtonGroup} from '@mui/material'
import styles from '../styles/layout.module.css'
import {About,INST, FLV,UG,P,A,PR,InstallCopy, FlvCopy, UgCopy, ProjectCopy, loe, LevelOfEnhancementCopy, c, ControlsCopy, m, MenuCopy} from '../styles/utils.module.constants'
import CircleIcon from '@mui/icons-material/Circle';
import { flv,ug,p,a,pr,flvCopy,ugCopy,pCopy,aCopy,prCopy } from "../styles/utils.module.constants";
import { Waypoint } from 'react-waypoint';
import { body_container, circleH, circle, copy, copy_container, header, img_container_ext } from "../styles/layout.styles";

import img_ext from '../public/images/Extension_Light.svg'
import img_menu  from '../public/images/Extension_Light_Menu.svg'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => event.preventDefault()}
    //   {...props}
    />
  );
}

export default function MenusLayout({children,darkMode }) {
    const [toggleValue, setToggle]= useState(FLV);
    const SECTION_SPACING = '2rem';
    const [id, setId] = useState(FLV);
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
return (
    <>
    <Grid container item sm={12} sx={body_container}>
            <Grid item container sm={4} className={styles.menuButtons_container} display={{xs:'none', md:'flex'}}>
                <ToggleButtonGroup
                    orientation="vertical"
                    value={alignment}
                    onChange={handleChange}
                    exclusive
                >
                    {/* <ListItem href="#FLV" value='FLV' disablePadding className={styles.a} component="a"> */}
                        <ToggleButton href="#FLV" value='FLV' disablePadding  disableRipple disableFocusRipple className={styles.a} component="a"> 
                            {/* {toggleValue === FLV ? 
                            <ListItemIcon >
                            </ListItemIcon>
                            : <></>} */}
                            {/* <ListItemText inset={toggleValue !== FLV}> */}
                            <Box className={styles.circle} sx={circle}/>
                            <ListItemText inset={circle}>
                                <Typography variant="h3">
                                    {flv}
                                </Typography>
                            </ListItemText>
                        </ToggleButton>
                    {/* </ListItem> */}

                    {/* <ListItem href="#P" disablePadding className={styles.a} component="a"> */}
                        <ToggleButton href="#P" value='P' disablePadding disableRipple disableFocusRipple className={styles.a} component="a">
                            {/* {toggleValue === P ? 
                                <ListItemIcon >
                                    <Box sx={circle}/>
                                </ListItemIcon>
                            : <></>} */}
                             <Box className={styles.circle} sx={circle}/>
                            {/* <ListItemText inset={toggleValue !== P} > */}
                            <ListItemText inset={circle}>
                                <Typography variant ="h3">  
                                    {p}
                                </Typography>
                            </ListItemText>
                        </ToggleButton>
                    {/* </ListItem> */}

                    {/* <ListItem href="#UG" disablePadding className={styles.a} component="a"> */}
                        <ToggleButton href="#UG" value='UG' disableFocusRipple disableRipple disablePadding className={styles.a} component="a">
                            {/* {toggleValue === UG ? 
                                <ListItemIcon>
                                    <Box sx={circle}/>
                                </ListItemIcon>
                            : <></>} */}
                            <Box className={styles.circle} sx={circle}/>
                            {/* <ListItemText  inset={toggleValue !== UG} > */}
                            <ListItemText inset={circle}>
                                <Typography variant ="h3">  
                                {ug}
                                </Typography>
                            </ListItemText>
                        </ToggleButton>
                    {/* </ListItem> */}
                </ToggleButtonGroup>
            </Grid>
            
        {/* COPY */}
            <Grid item container md={8} alignItems="center"   
                sx={copy_container}>
                <Grid item container pt={2.3}>
                <Waypoint display={{xs:'flex', sm:'none'}} 
                        topOffset="35%"
                        bottomOffset="55%"
                        id={id}>
                    <section id="install">
                        <Grid item container display={{xs:'flex', sm:'none'}} sx={{mb:SECTION_SPACING,}}>
                            <Grid item container sx={header}>
                                <Typography variant ='h3'> 
                                    {INST}
                                </Typography>
                            </Grid>
                            <Grid item container sx={copy}>
                                <Typography variant='body' display ="block">
                                        <InstallCopy/>
                                </Typography>
                            </Grid>
                        </Grid>
                    </section>
                </Waypoint>
                    <Waypoint 
                        topOffset="35%"
                        bottomOffset="55%"
                        id={id}
                        onEnter={()=>setToggle(FLV)}>
                    <section id="FLV">
                        <Grid item container sx={{mb:SECTION_SPACING,}}>
                            <Grid item container sx={header}>
                                <Typography variant ='h3'> 
                                    {flv}
                                </Typography>
                            </Grid>
                            <Grid item container sx={copy}>
                                <Typography variant='body' display ="block">
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
                                <Typography variant ='h3' >
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
                    <section id="UG" 
                    sx={{display: {xs:'none', sm:'flex'},}}>
                        <Grid item container sx={{display: {xs:'none', sm:'flex'}, pb:SECTION_SPACING,}}>
                            <Grid item container
                                sx={header}>
                                <Typography variant ='h3'>
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

                <Grid item container id="UG" sx={{display: {xs:'none', sm:'flex'}, mb:SECTION_SPACING,}}>
                        <Grid item container className={styles.landing_right_container} sx={copy_container}>
                            <Grid item sx={img_container_ext}>
                                <Image  src={img_ext}  alt="Web extension including controls of font legibility including boldness, spacing, letter differentiation and other options. " />
                            </Grid>
                        </Grid>
                    </Grid>

                <Grid id='LOE' item container sx={{display: {xs:'none', sm:'flex'},mb:SECTION_SPACING,}}>
                    <Grid item container sx={header}>
                        <Typography variant ='h3'>
                            {loe}
                        </Typography>
                    </Grid>

                    <Grid item container sx={ copy}>
                        <Typography variant='body'>
                            <LevelOfEnhancementCopy/>
                        </Typography>
                    </Grid>
                </Grid>

            <Grid id="Controls" item container sx={{display: {xs:'none', sm:'flex'},mb:SECTION_SPACING,}}>
                <Grid item container sx={header}>
                    <Typography variant ='h3'>
                        {c}
                    </Typography>
                </Grid>

                <Grid item container sx={copy}>
                    <Typography variant='body'>
                        <ControlsCopy/>

                    </Typography>
                </Grid>
            </Grid>

            <Grid item container sx={{display: {xs:'none', sm:'flex'},mb:SECTION_SPACING,}}>
                <Grid item container sx={header}>
                    <Typography variant ='h3'>
                        {m}
                    </Typography>
                </Grid>
                <Grid item container sx={copy}>
                    <Typography variant='body'>
                        <MenuCopy/>
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container sx={{display: {xs:'none', sm:'flex'}, pb:SECTION_SPACING, mb:10}}>
                <Grid item container className={styles.landing_right_container} sx={copy_container}>
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