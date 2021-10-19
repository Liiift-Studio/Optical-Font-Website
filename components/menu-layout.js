import React, { useEffect, useState } from "react"
import {List,ListItem,ListItemText, ListItemIcon,ListItemButton,Typography ,ToggleButton,Button, Grid, Paper, colors, Box, ToggleButtonGroup} from '@mui/material'
import styles from '../styles/layout.module.css'
import {About,FLV,UG,P,A,PR} from '../styles/utils.module.constants'
import CircleIcon from '@mui/icons-material/Circle';
import { flv,ug,p,a,pr,flvCopy,ugCopy,pCopy,aCopy,prCopy } from "../styles/utils.module.constants";
import { Waypoint } from 'react-waypoint';

export default function MenusLayout({children,darkMode }) {
    const [toggleValue, setToggle]= useState(FLV);


return (
    <>



    <Grid container item sm={12} className={styles.menu_container} >
        {/* <Grid item container sm={4}> */}
            <Grid item container sm={4} className={styles.menuButtons_container} 
                display={{xs:'none', md:'block'}}
                // bgcolor="background.default"

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
                                    <CircleIcon sx={{marginLeft:"1.5em",marginBottom:".2em", fontSize:".8em", color:'text.main'}}   />
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
                        href="#UG"
                        // onClick={()=>{setToggle(UG)}}
                        >
                        <ListItemButton >
                            {toggleValue === UG ? 
                                <ListItemIcon >
                                    <CircleIcon sx={{marginLeft:"1.5em",marginBottom:".2em", fontSize:".8em",color:'text.main'}} />
                                </ListItemIcon>
                            : <></>}
                            <ListItemText  inset={toggleValue !== UG} >
                                <Typography variant ="h4">  
                                {ug}
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
                                    <CircleIcon sx={{marginLeft:"1.5em",marginBottom:".2em", fontSize:".8em",color:'text.main'}} />
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
                        href="#A"
                        // onClick={()=>{setToggle(A)}}
                        >
                        <ListItemButton >
                            {toggleValue === A ? 
                                <ListItemIcon >
                                    <CircleIcon sx={{marginLeft:"1.5em",marginBottom:".2em", fontSize:".8em",color:'text.main'}} />
                                </ListItemIcon>
                            : <></>}
                            <ListItemText  inset={toggleValue !== A} >
                                <Typography variant ="h4">  
                                    {a}
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
                                <ListItemIcon  >
                                    <CircleIcon  sx={{marginLeft:"1.5em",marginBottom:".2em", fontSize:".8em",color:'text.main'}}/>
                                </ListItemIcon>
                            : <></>}
                            <ListItemText  inset={toggleValue !== PR} >
                                <Typography variant ="h4">  
                                    {pr}
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                </List>
            </Grid>
        {/* </Grid> */}

        
            <Grid item container md={8} alignItems="center" className={styles.menu_text_container}  
            // 
            >
                <Grid item container pt={2.3} px = {{xs:5}}  >

                
                <Waypoint 
                  topOffset="35%"
                  bottomOffset="55%"
                onEnter={()=>setToggle(FLV)}
                >
                    <section id="FLV" className={styles.about_sections}>
                        <Grid item container>
                            <Typography variant ='h4' display={{xs:'none', md:'block'}}>
                            {flv}<br /><br />
                            </Typography>

                            <Grid item container
                                sx={{justifyContent:'center'}} 
                            >
                            <Typography variant ='h4' 
                            
                                display={{xs:'block', md:'none'}}>
                                {flv}<br /><br />
                            </Typography>
                            </Grid>

                            <Typography variant='body' display ="block">
                                <div className={styles.body_type}>

                                    {flvCopy}
                                    <br /> <br />
                                </div>
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
                            <Typography variant ='h4' display={{xs:'none', md:'block'}}>
                            {ug}<br /><br />
                            </Typography>
                            
                            <Grid item container
                                sx={{justifyContent:'center'}} 
                            >
                                <Typography variant ='h4' 
                                
                                    display={{xs:'block', md:'none'}}>
                                    {ug}<br /><br />
                                </Typography>
                            </Grid>


                            <Typography variant='body'>
                                <div className={styles.body_type}>

                                    {ugCopy}
                                    <br /> <br />
                                </div>
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
                    <Typography variant ='h4' display={{xs:'none', md:'block'}}>
                            {p}<br /><br />
                    </Typography>

                    <Grid item container
                        sx={{justifyContent:'center'}} 
                    >
                        <Typography variant ='h4'                             
                            display={{xs:'block', md:'none'}}>
                            {p}<br /><br />
                        </Typography>
                    </Grid>
                        <Typography variant='body'>
                            <div className={styles.body_type}>
                                {pCopy}
                                <br /> <br />
                            </div>
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
                    <Typography variant ='h4' display={{xs:'none', md:'block'}}>
                        <div className={styles.body_type}>

                            {a}<br /><br />
                        </div>
                    </Typography>

                    <Grid item container
                        sx={{justifyContent:'center'}} 
                    >
                        <Typography variant ='h4' 
                        
                            display={{xs:'block', md:'none'}}>
                            {a}<br /><br />
                        </Typography>
                    </Grid>
                    <Typography variant='body'>
                        <div className={styles.body_type}>

                            {aCopy}
                            <br /> <br />
                        </div>
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
                        <Typography variant ='h4' display={{xs:'none', md:'block'}}>
                        <div className={styles.body_type}>

                            {pr} <br /><br />
                        </div>
                        </Typography>

                    <Grid item container
                        sx={{justifyContent:'center'}} 
                        >
                            <Typography variant ='h4' 
                            
                                display={{xs:'block', md:'none'}}>
                                {pr}<br /><br />
                            </Typography>
                    </Grid>
                        <Typography variant='body' >
                            <div className={styles.body_type}>
                                {prCopy}
                            </div>
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