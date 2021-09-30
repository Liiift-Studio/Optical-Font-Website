import React, { useEffect, useState } from "react"
import {List,ListItem,ListItemText, ListItemIcon,ListItemButton,Typography ,ToggleButton,Button, Grid, Paper, colors, Box, ToggleButtonGroup} from '@mui/material'
import styles from '../styles/layout.module.css'
import {About,FLV,UG,P,A,PR} from '../styles/utils.module.constants'
import CircleIcon from '@mui/icons-material/Circle';



import { Waypoint } from 'react-waypoint';


const flv = 'FONTS & LOW VISION'
const ug = "USE GUIDE"
const p = "PROJECT"
const a = "ACCESSIBILITY"
const pr = "PRIVACY"

export default function MenusLayout({children }) {
    const [toggleValue, setToggle]= useState(FLV);
    const [scrolling, setScrolling]= useState(false);
    

    const handleToggle = (e, toggle) => {
        setToggle(toggle);
      }

      const [selectedIndex, setSelectedIndex] = React.useState(1);


return (
    <>



    <Grid container item sm={12} className={styles.landing_container} spacing ={5}>

        <Grid item container sm={4} className={styles.menuButtons_container} 
            bgcolor="background.menuSelector"
            >
            <List >
                <ListItem disablePadding 
                className={styles.a}
                component="a" 
                href="#FLV" 
                // onClick={()=>{setToggle(FLV)}}
                >
                    <ListItemButton   variant ="string"> 
                         {toggleValue === FLV ? 
                            <ListItemIcon >
                                <CircleIcon fontSize='small'   />
                            </ListItemIcon>
                        : <></>}
                        <ListItemText  inset={toggleValue !== FLV}>
                            <Typography variant ="h4">
                                FONTS & LOW VISION
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding 
                    className={styles.a}
                    component="a" 
                    href="#UG"
                    // onClick={()=>{setToggle(UG)}}
                    >
                    <ListItemButton >
                        {toggleValue === UG ? 
                            <ListItemIcon >
                                <CircleIcon fontSize='small' />
                            </ListItemIcon>
                        : <></>}
                        <ListItemText  inset={toggleValue !== UG} >
                            <Typography variant ="h4">  
                                USER GUIDE
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
                    <ListItemButton >
                        {toggleValue === P ? 
                            <ListItemIcon >
                                <CircleIcon fontSize='small' />
                            </ListItemIcon>
                        : <></>}
                        <ListItemText  inset={toggleValue !== P} >
                            <Typography variant ="h4">  
                                PROJECT
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                
                <ListItem disablePadding 
                    className={styles.a}
                    component="a" 
                    href="#A"
                    // onClick={()=>{setToggle(A)}}
                    >
                    <ListItemButton >
                        {toggleValue === A ? 
                            <ListItemIcon >
                                <CircleIcon fontSize='small' />
                            </ListItemIcon>
                        : <></>}
                        <ListItemText  inset={toggleValue !== A} >
                            <Typography variant ="h4">  
                                ACCESSIBILITY
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding 
                    className={styles.a}
                    component="a" 
                    href="#PR"
                    // onClick={()=>{setToggle(PR)}}
                    >
                    <ListItemButton >
                        {toggleValue === PR ? 
                            <ListItemIcon >
                                <CircleIcon fontSize='small' />
                            </ListItemIcon>
                        : <></>}
                        <ListItemText  inset={toggleValue !== PR} >
                            <Typography variant ="h4">  
                                PRIVACY
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>

            </List>
        </Grid>

        
            <Grid item container sm={8} alignItems="center" >
                <Grid item container pt={2.3}>
                {/* <section id="about" className={styles.about_sections}  >
                    <Typography variant='body'>
                        "Optical is a free set of font and a web tools for low vision created out of a research project in the Health Design Lab at Emily Carr University with support from The Accessible Technology Program and Disability Alliance BC. Start with a base font, then fine tune it to your specific needs using either our simple or advanced customization tools. Then use your font with a browser extension to use it online, or download it to use on your desktop. > Learn More"
                    </Typography>
                </section> */}
                
                <Waypoint 
                  topOffset="35%"
                  bottomOffset="55%"
                onEnter={()=>setToggle(FLV)}
                >
                <section id="FLV" className={styles.about_sections}>
                    <Grid item>
                        <Typography variant ='h4'>
                        {flv}<br /><br />
                        </Typography>

                        <Typography variant='body' display ="block">

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. USE GUIDELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etc...                        <br /><br />
                            <br /> <br />
                        </Typography>
                    </Grid>
                </section>
                
                </Waypoint>

                <Waypoint 
                    topOffset="35%"
                    bottomOffset="55%"
                    onEnter={()=>setToggle(UG)}>

                    <section id="UG" className={styles.about_sections}>
                        <Grid item>
                            <Typography variant ='h4'>
                            {ug}<br /><br />
                            </Typography>
                        
                            <Typography variant='body'>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. USE GUIDELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etc...                        <br /><br />
                        <br /> <br />
                            </Typography>
                        </Grid>
                    </section>
                </Waypoint>
                
                <Waypoint 
                    topOffset="35%"
                    bottomOffset="55%"
                    onEnter={()=>setToggle(P)}>
                <section id="P" className={styles.about_sections}>
                    <Grid item>
                    <Typography variant ='h4'>
                       {p}<br /><br />
                    </Typography>
                    <Typography variant='body'>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. USE GUIDELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etc...                        <br /><br />
                        <br /> <br />
                    </Typography>
                    </Grid>
                </section>
                </Waypoint>
                
                <Waypoint 
                    topOffset="35%"
                    bottomOffset="55%"
                    onEnter={()=>setToggle(A)}>
                <section id="A" className={styles.about_sections}>
                    <Grid item>
                    <Typography variant ='h4'>
                       {a}<br /><br />
                    </Typography>
                    <Typography variant='body'>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. USE GUIDELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etc...                        <br /><br />
                        <br /> <br />
                    </Typography>
                    </Grid>
                </section>

                </Waypoint>
                
                <Waypoint 
                    topOffset="35%"
                    bottomOffset="55%"
                    onEnter={()=>setToggle(PR)}>
                <section id="PR" className={styles.about_sections}>
                    <Grid item>
                    <Typography variant ='h4'>
                       {pr} <br /><br />
                    </Typography>
                    <Typography variant='body'>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. USE GUIDELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etc...                        <br /><br />
                        <br /> <br />
                    </Typography>
                    </Grid>
                </section>
                </Waypoint>

                </Grid>
            </Grid>
            </Grid>
        </>
    )
}