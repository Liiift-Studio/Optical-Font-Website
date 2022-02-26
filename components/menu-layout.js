import React, { createRef, useEffect, useState } from "react"
import {Typography , Grid,  Box, Button} from '@mui/material'
import {content_container, copy, copy_container, focusStyle, header, menu_container, } from "../styles/layout.styles";
// import {Link as nLink} from "next/link";
import NextLink from "next/link";
import { Link as MUILink} from "@mui/material";


export default function MenusLayout({children,darkMode,about,footerRef,changeDarkMode }) {
    const aboutRef = createRef();
    const faqRef = createRef();
    const accessRef = createRef();
    const feedbackRef = createRef();
    const privacyRef = createRef();

    const [section, setSection] = useState(null);
    const [clickSection, setClickSection] = useState(null);

    const clickSet = (section) =>{
        setClickSection(section);
        setSection(section);
    }


    const menuItemStyle = (id) =>{
        var circle = false;
        if(id===section){
            circle = true;
        }
        var marg = 3;
        if(id==='SiteMap'){
            marg = 4.5;
        }
        var style = {
            display:'flex',
            position:'relative',
            p:0,
            mb:marg,
            cursor:'pointer',

            '&:before': menuCircle(circle),
            '&:hover:after': {
                content:"''",
                position:'absolute',
                bgcolor:'text.primary',
                transformOrigin:'center center',
                top:'.35rem',
                left:'-1.5em',
                width :'.7em',
                height:'.7em',
                borderRadius:"100%",
                pt:.3,
                mb:.75, 
            }
        }
        return style
    };

    const menuCircle = (state) => {
        var style = {
            content:"''",
            // display:'hidden',
            opacity: (state ? '1' : '0'),
            position:'absolute',
            bgcolor:'text.primary',
            transformOrigin:'center center',
            top:'.35rem',
            left:'-1.5em',
            width :'.7em',
            height:'.7em',
            borderRadius:"100%",
            pt:.3,
            mb:.75,
        }
        return style;
    };
    useEffect(()=>{
        setSection('About');
    },[about])

    const handleScroll = () =>{
        try{
            var sections = [
                aboutRef.current.getBoundingClientRect().y
            , faqRef.current.getBoundingClientRect().y
            , accessRef.current.getBoundingClientRect().y
            , feedbackRef.current.getBoundingClientRect().y
            , privacyRef.current.getBoundingClientRect().y
            , footerRef.current.getBoundingClientRect().y
            ];
            var index = null;
            var smallest = null;
            for(var i = 0; i<sections.length;i++){
                if (smallest < 0 &&  sections[i]<200) {smallest = null}
                if(smallest === null){
                    smallest = sections[i];
                    index = i;
                
                }
                if(sections[i] < smallest ){
                    index= i;
                    smallest = sections[i];
                }
            }
            if( index === 0){
                setSection("About");
                setClickSection("About");
            }
            else if( index === 1){
                setSection("Faq");
                setClickSection("Faq");

            }
            else if( index === 2){
                setSection("Accessibility");
                setClickSection("Accessibility");

            }
            else if( index === 3){
                setSection("Feedback");
                setClickSection("Feedback");
            }
            else if( index === 4){
                if(clickSection ==="SiteMap"){
                    setSection("SiteMap");
                }else{
                    setSection("Privacy");
                }

            }
            else if( index === 5){
                setSection("SiteMap");
            }
        }catch(e){}
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },)


return (
    <>
    <Grid container item sm={12} sx={content_container}>
        <Grid item container id="About" position='absolute' sx={{top:'1rem'}}/>

            {/* Menu */}
            <Grid item container sm={4} display={{xs:'none', md:'flex'}} sx={menu_container}>
                {/* menu */}
                <Grid container item  onClick={()=>clickSet('Install')} sx={menuItemStyle('Install')}>
                    <MUILink  href="#Header" color='inherit' underline='none' sx={focusStyle }>
                        <Typography variant="h3" padding='0'    sx={{display:'flex',alignItems:'center'}}>
                            INSTALL
                        </Typography>
                        </MUILink>

                </Grid>
                <Grid container item onClick={()=>clickSet('About')} sx={menuItemStyle('About')}>
                    <MUILink  href="#About" color='inherit' underline='none' sx={focusStyle}>
                    <Typography variant="h3"  sx={{display:'flex',alignItems:'center'}}>
                        ABOUT
                    </Typography>
                    </MUILink>
                </Grid>
                <Grid container item onClick={()=>clickSet('Faq')} sx={menuItemStyle('Faq')}>
                        <MUILink  href="#Faq" color='inherit' underline='none' sx={focusStyle} >
                    <Typography variant="h3"  sx={{display:'flex',alignItems:'center'}}>
                        FAQ
                    </Typography>
                        </MUILink>
                </Grid>
                <Grid container item onClick={()=>clickSet('Accessibility')} sx={menuItemStyle('Accessibility')}>
                    <MUILink  href="#Accessibility" color='inherit' underline='none' sx={focusStyle} >
                    <Typography variant="h3"  sx={{display:'flex',alignItems:'center'}}>
                        ACCESSIBILITY
                    </Typography>
                    </MUILink>

                </Grid>
                <Grid container item onClick={()=>clickSet('Feedback')} sx={menuItemStyle('Feedback')}>
                    <MUILink  href="#Feedback" color='inherit' underline='none' sx={focusStyle}>
                    <Typography variant="h3"  sx={{display:'flex',alignItems:'center'}}>
                    FEEDBACK
                    </Typography>
                    </MUILink>

                </Grid>
                <Grid container item onClick={()=>clickSet('Privacy')} sx={menuItemStyle('Privacy')}>
                    <MUILink  href="#Privacy" color='inherit' underline='none' sx={focusStyle}>
                    <Typography variant="h3"  sx={{display:'flex',alignItems:'center'}}>
                    PRIVACY
                    </Typography>
                    </MUILink>

                </Grid>
                <Grid container item onClick={()=>clickSet('SiteMap')} sx={menuItemStyle('SiteMap')}>
                    <MUILink  href="#Footer" color='inherit' underline='none' sx={focusStyle}>
                    <Typography variant="h3"  sx={{display:'flex',alignItems:'center'}}>
                    SITE MAP
                    </Typography>
                    </MUILink>
                </Grid>

                <Grid container item  onClick={changeDarkMode}  sx={menuItemStyle('Mode')} >
                        <Box sx={focusStyle} tabIndex={0}>
                        {(darkMode ? 
                            <Typography variant='h3' alt="LightMode"  sx={{display:'flex',alignItems:'center'}} >Light&nbsp;Mode</Typography>
                                :
                                <Typography variant='h3' alt="DarkMode" sx={{display:'flex',alignItems:'center'}}>Dark&nbsp;Mode</Typography>
                                )}
                        </Box>           
                </Grid>
                
            </Grid>

            {/* Copy */}
            <Grid item container md={8}  >
                    <Grid item container ref={aboutRef} tabIndex={0} sx={copy_container}>
                    {/* <section id="About" ref={aboutRef} tabIndex={0} className="sectionFocus" > */}
                        <Grid item container sx={header}>
                            <Typography variant ='h3'> 
                                ABOUT
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display ="block">
                                Optical is a customizeable font and a free web tool for low vision. Install the Google Chrome browser extension, fine tune your font and read the internet in letters set to your legibility needs. It combines recent research into specific legibility goals with modern font software. <NextLink href={{pathname:"/process/",query:{darkMode:darkMode}}}><MUILink color="text.link" sx={focusStyle}> Learn more about how we made&nbsp;Optical.</MUILink></NextLink>
                                <br/><br/>
                                <span>Optical is being developed out of the <MUILink href="https://research.ecuad.ca/healthdesignlab/" target="_blank" rel="noopener" color="text.link" sx={focusStyle}>Health Design Lab</MUILink> at <MUILink color="text.link"  href="https://www.ecuad.ca/" target="_blank" rel="noopener" sx={focusStyle}>Emily Carr University</MUILink> in partnership with <MUILink color="text.link" href="https://disabilityalliancebc.org/" target="_blank" rel="noopener" sx={focusStyle}>Disability Alliance BC</MUILink>, <MUILink color="text.link" rel="noopener noreferrer" href="https://www.ic.gc.ca/eic/site/118.nsf/eng/home" target="_blank" sx={focusStyle}>The Accessible Technology Program</MUILink>, and <MUILink color="text.link" href="https://shumka.ecuad.ca/" target="_blank" rel="noopener" sx={focusStyle}>the Shumka&nbsp;Centre</MUILink>.</span>
                            </Typography>
                        </Grid>
                    {/* </section> */}
                    </Grid>

                    <Grid item container  id="Faq"  className="anchor" ref={faqRef} tabIndex={0}  sx={copy_container}>
                    {/* <section id="Faq" ref={faqRef} tabIndex={0} className="sectionFocus"> */}
                        <Grid item container sx={header}>
                            <Typography variant ='h3'> 
                                FAQ
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display ="block">
                                → How do I install&nbsp;Optical?
                                <Box sx={{lineHeight:'50%'}}><br/></Box>
                                Click <MUILink color="text.link" href="#Install" sx={focusStyle}> Install</MUILink> to go to the Google Chrome Web Store. Click the blue “Add to Chrome” button at the top right. You’ll see a popup that says Optical will be able to read and change data on websites. In the pop up click the “Add Extension” button to the right. Success! You should be all set. There should be another pop up at the top right, and the Optical Icon (a stylized version of the text select cursor resembling a capital I) next to your browser website address bar. Click the icon button and get&nbsp;started.
                                <Box sx={{lineHeight:'50%'}}>
                                    <br/>
                                    <img src="images/FAQ_Install.svg" width="100%" />
                                </Box>
                                <br/>
                                → Does Optical work in other browsers or on phones or&nbsp;tablets?
                                <Box sx={{lineHeight:'50%'}}><br/></Box>
                                For the time being, Optical works only in Chrome on&nbsp;desktops. 
                                <br/><br/>
                                → Optical doesn’t seem to be working on every website.&nbsp;Why?
                                <Box sx={{lineHeight:'50%'}}><br/></Box>

                                Websites are made in many different ways. We can’t guarentee that Optical will work perfectly in every scenario. Send us an email, let us know which sites aren’t perfect so we can keep tabs on this and hopefully address them in the next&nbsp;version.
                                <br/><br/>

                                → Can I use Optical for my organization or project?
                                <Box sx={{lineHeight:'50%'}}><br/></Box>
                                Optical was created for individuals. If you’d like to set up Optical for general use, lets chat. We’ll see what we can do. <MUILink color="text.link" target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com" sx={focusStyle}>Email&nbsp;us.</MUILink>                        
                            </Typography>
                        </Grid>
                    {/* </section> */}
                    </Grid>

                    <Grid item container id="Accessibility"  className="anchor" ref={accessRef} tabIndex={0} sx={copy_container}>
                    {/* <section id="Accessibility" ref={accessRef} tabIndex={0} className="sectionFocus"> */}
                        <Grid item container sx={header}>
                            <Typography variant ='h3'> 
                            ACCESSIBILITY
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display ="block">
                                Optical was designed, developed, and tested with accessibility in mind. Let us know if we’ve missed something! <MUILink color='text.link' target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com" sx={focusStyle}>Email&nbsp;us.</MUILink> 
                            </Typography>
                            </Grid>
                    {/* </section> */}

                    </Grid>

                    <Grid item container id="Feedback"  className="anchor" ref={feedbackRef} tabIndex={0} sx={copy_container}>

                    {/* <section id="Feedback" ref={feedbackRef} tabIndex={0}className="sectionFocus"> */}
                        <Grid item container sx={header}>
                            <Typography variant ='h3'> 
                            FEEDBACK / CONTACT
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display ="block">
                            Do you have any feedback on our fonts, extension or site? We’d love to hear from you. <MUILink color="text.link" target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com" sx={focusStyle}>Email&nbsp;Tyler@opticalfont.com </MUILink>
                            </Typography>
                        </Grid>
                    {/* </section> */}

                    </Grid>

                    <Grid item container id='Privacy'  className="anchor" tabIndex={0} ref={privacyRef} sx={copy_container}>

                    {/* <section id="Privacy" ref={privacyRef} > */}
                        <Grid item container sx={header}>
                            <Typography variant ='h3'> 
                            PRIVACY
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display ="block">
                            Optical collects no data, including cookies or personal information. We rely on feedback and conversations to track Optical’s strengths and&nbsp;opportunities.<NextLink 
                                href={{ pathname:"/privacy-policy/",
                                query:{darkMode:darkMode},
                            }}><MUILink color="text.link" sx={focusStyle}>Read our full privacy&nbsp;policy.</MUILink></NextLink>                  
                            </Typography>
                        </Grid>
                    {/* </section> */}
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}