import Image from 'next/image'
import React, { useEffect, useState } from "react"
import {List,ListItem,ListItemText, ListItemIcon,ListItemButton,Typography ,ToggleButton,Button, Grid, Paper, colors, Box, ToggleButtonGroup} from '@mui/material'
import styles from '../styles/layout.module.css'
import {About,FLV,UG,P,A,PR, FlvCopy, UgCopy, ProjectCopy, loe, LevelOfEnhancementCopy, c, ControlsCopy, m, MenuCopy} from '../styles/utils.module.constants'
import CircleIcon from '@mui/icons-material/Circle';
import { flv,ug,p,a,pr,flvCopy,ugCopy,pCopy,aCopy,prCopy } from "../styles/utils.module.constants";
import { Waypoint } from 'react-waypoint';
import { body_container, circle, copy, copy_container, header, img_container_ext } from "../styles/layout.styles";

import img_ext from '../public/images/Extension_Light.png'
import img_menu  from '../public/images/Extension_Light_Menu.png'



export default function MenusLayout({children,darkMode }) {
    const SECTION_SPACING = 10;
    
    const [toggleValue, setToggle]= useState(FLV);
    
    const [clicked, setClicked]= useState(false);
    const [oldToggleValue, setOldToggleValue] = useState(null);
    const [hovering, setHovering] = useState(false);

    const [scrollState, setScrollState] = useState(null);

    const enterScroll = state => {
        console.log(state);
        setScrollState(state);
    }
    const setHoverState = (newTV) =>{
        setHovering(true);
        if(oldToggleValue === null){
            setOldToggleValue(toggleValue);
        }    
        setToggle(newTV);
    }
    const leaveHoverState = () =>{
        setHovering(false);
    }
    const click = state =>{
        setToggle(state);
        setHovering(false);
        setOldToggleValue(null);
    }

    useEffect(()=>{
        if(!hovering && oldToggleValue !== null){
            setToggle(oldToggleValue);
            setOldToggleValue(null);

        }
    },[hovering])

    
    useEffect(()=>{
        if(!clicked){
            setToggle(scrollState);
        }

    },[scrollState])

return (
    <>



    <Grid container item sm={12}  
    
    sx={body_container}>
            <Grid item container sm={4} 
            
            className={styles.menuButtons_container} 
                display={{xs:'none', md:'flex'}} >
                <List >
                    <ListItem  disablePadding className={styles.a} component="a" href="#FLV" >
                        <ListItemButton onClick={()=>click(FLV)} onMouseEnter={()=>setHoverState(FLV)} onMouseLeave={()=>leaveHoverState()}> 
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
                        href="#P"
                        // onClick={()=>{setToggle(P)}}
                        >
                        <ListItemButton onClick={()=>click(P)} onMouseEnter={()=>setHoverState(P)} onMouseLeave={()=>leaveHoverState()} >
                            {toggleValue === P ? 
                                <ListItemIcon >
                                    <Box sx={circle}/>
                                </ListItemIcon>
                            : <></>}
                            <ListItemText  inset={toggleValue !== P} >
                                <Typography variant ="h4">  
                                    {p}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding 
                        className={styles.a}
                        component="a" 
                        href="#UG"
                        >
                        <ListItemButton onClick={()=>click(UG)} onMouseEnter={()=>setHoverState(UG)} onMouseLeave={()=>leaveHoverState()}>
                            {toggleValue === UG ? 
                                <ListItemIcon >
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
                sx={copy_container}
            >
                <Grid item container pt={2.3}   >

                
                <Waypoint 
                    // topOffset="35%"
                    // bottomOffset="55%"
                    // onEnter={()=>setToggle(FLV)}
                    onEnter={()=>enterScroll(FLV)}
                    onLeave={()=>console.log('exit FLV')}

                    />
                    <section id="FLV">
                        <Grid item container sx={{ mb:SECTION_SPACING}}>
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
                

                
                
                <Waypoint 
                    // topOffset="35%"
                    bottomOffset="55%"
                    // onEnter={()=>setToggle(P)}
                    onEnter={()=>enterScroll(P)}
                    onLeave={()=>console.log('exit P')}
                    />
                    <section id="P">
                        <Grid item container sx={{ mb:SECTION_SPACING}}>
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

                <Waypoint 
                    // topOffset="35%"
                    bottomOffset="45%"
                    // onEnter={()=>setToggle(UG)}
                    onEnter={()=>enterScroll(UG)}
                    onLeave={()=>console.log('exit UG')}
                    />
                    <section id="UG" >
                        <Grid item container sx={{ mb:SECTION_SPACING}}>
                            <Grid item container sx={header}>
                                <Typography variant ='h4'>
                                    {ug}
                                </Typography>
                            </Grid>
                            <Grid item container sx ={copy}>
                                <Typography variant='body'>
                                      <UgCopy/>
                                </Typography>
                            </Grid>
                        </Grid>


                <Grid item container sx={{ mb:SECTION_SPACING}}>
                    <Grid item container className={styles.landing_right_container} sx={copy_container}>
                        <Grid item sx={img_container_ext}>
                            <Image  src={img_ext}  alt="" />
                        </Grid>
                    </Grid>

                </Grid>


                <Grid item containersx={{ mb:SECTION_SPACING}}>
                    <Grid item container sx={header}>
                        <Typography variant ='h4'>
                            {loe}
                        </Typography>
                    </Grid>

                    <Grid item containersx ={ copy}>
                        <Typography variant='body'>
                            <LevelOfEnhancementCopy/>
                        </Typography>
                    </Grid>
                </Grid>


                <Grid item container sx={{ mb:SECTION_SPACING}}>
                    <Grid item container sx={header}>
                        <Typography variant ='h4'>
                            {c}
                        </Typography>
                    </Grid>

                    <Grid item container sx ={copy}>
                        <Typography variant='body'>
                            <ControlsCopy/>
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container sx={{ mb:SECTION_SPACING,}}>
                    <Grid item container sx={header}>
                        <Typography variant ='h4'>
                            {m}
                        </Typography>
                    </Grid>

                    <Grid item container sx ={ copy}>
                        <Typography variant='body'>
                            <MenuCopy/>
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container sx={{ mb:SECTION_SPACING,}}>
                    <Grid item container sx={copy_container}>
                        <Grid item sx={img_container_ext}>
                            <Image  src={img_menu}  alt="" />
                        </Grid>
                    </Grid>
                </Grid>
                </section>

            </Grid>
        </Grid>
    </Grid>
    </>
    )
}