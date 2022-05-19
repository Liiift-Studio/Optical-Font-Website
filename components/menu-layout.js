import React, { createRef, useEffect, useState } from "react"
import {Typography , Grid,  Box, Button} from '@mui/material'
import {content_container, copy, copy_container, focusStyle, header, menu_container,img_container } from "../styles/layout.styles";
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
                aboutRef.current.getBoundingClientRect().y, 
                faqRef.current.getBoundingClientRect().y, 
                accessRef.current.getBoundingClientRect().y, 
                feedbackRef.current.getBoundingClientRect().y, 
                privacyRef.current.getBoundingClientRect().y, 
                footerRef.current.getBoundingClientRect().y
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
                    <MUILink href="#Header" color='inherit' underline='none' sx={focusStyle }>
                        <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center'}}>
                            Install
                        </Typography>
                    </MUILink>
                </Grid>
                <Grid container item onClick={()=>clickSet('About')} sx={menuItemStyle('About')}>
                    <MUILink href="#About" color='inherit' underline='none' sx={focusStyle}>
                        <Typography variant="h4" sx={{display:'flex',alignItems:'center'}}>
                            About
                        </Typography>
                    </MUILink>
                </Grid>
                <Grid container item onClick={()=>clickSet('Faq')} sx={menuItemStyle('Faq')}>
                     <MUILink href="#Faq" color='inherit' underline='none' sx={focusStyle} >
                        <Typography variant="h4" sx={{display:'flex',alignItems:'center'}}>
                            FAQ
                        </Typography>
                    </MUILink>
                </Grid>
                <Grid container item onClick={()=>clickSet('Accessibility')} sx={menuItemStyle('Accessibility')}>
                    <MUILink href="#Accessibility" color='inherit' underline='none' sx={focusStyle} >
                        <Typography variant="h4" sx={{display:'flex',alignItems:'center'}}>
                            Accessibility
                        </Typography>
                    </MUILink>
                </Grid>
                <Grid container item onClick={()=>clickSet('Feedback')} sx={menuItemStyle('Feedback')}>
                    <MUILink href="#Feedback" color='inherit' underline='none' sx={focusStyle}>
                        <Typography variant="h4" sx={{display:'flex',alignItems:'center'}}>
                            Feedback
                        </Typography>
                    </MUILink>
                </Grid>
                <Grid container item onClick={()=>clickSet('Privacy')} sx={menuItemStyle('Privacy')}>
                    <MUILink href="#Privacy" color='inherit' underline='none' sx={focusStyle}>
                        <Typography variant="h4" sx={{display:'flex',alignItems:'center'}}>
                            Privacy
                        </Typography>
                    </MUILink>
                </Grid>
                <Grid container item onClick={()=>clickSet('SiteMap')} sx={menuItemStyle('SiteMap')}>
                    <MUILink href="#Footer" color='inherit' underline='none' sx={focusStyle}>
                        <Typography variant="h4" sx={{display:'flex',alignItems:'center'}}>
                            Site Map
                        </Typography>
                    </MUILink>
                </Grid>

                <Grid container item  onClick={changeDarkMode}  sx={menuItemStyle('Mode')} >
                    <Box sx={focusStyle} tabIndex={0}>
                        {(darkMode ? 
                            <Typography variant='h4' alt="LightMode" sx={{display:'flex',alignItems:'center'}} >Light&nbsp;Mode</Typography>
                        :
                            <Typography variant='h4' alt="DarkMode" sx={{display:'flex',alignItems:'center'}}>Dark&nbsp;Mode</Typography>
                        )}
                     </Box>           
                </Grid>
                
            </Grid>

            {/* Copy */}
            <Grid item container md={8} mb={8} >
                <Grid item container ref={aboutRef} tabIndex={0} sx={copy_container} display={{xs:'block', sm:'none'}}>

                    <Typography variant='body1' display="block">
                        <p>Optical is a variable font family and free web tool for varied low vision. Install the Google Chrome browser extension and adjust legibility to your needs.</p>
                        <p>Version one was developed out of the Health Design Lab at Emily Carr University in partnership with  Disability Alliance BC, the Accessible Technology Program, and the Shumka Centre. Optical combines recent research into specific legibility goals with modern font&nbsp;software.</p>
                        <p>Please open this website on your desktop to install&nbsp;Optical.</p>
                        <p>Reading is not a trivial task. Two hundred and sixty million rods and cones in your eyes detect light and relay electrical signals to the language centres in the brain for identification and interpretation. We depend on written language to stay informed, connected and employed, but we haven’t perfected it. Our alphabet was created for paper, for the general population. It works really well. It doesn’t work perfectly for everyone. Specific enhancements have been found to be useful for people with low vision. But low vision varies in both source and degree. There are no one size fits all solutions in accessibility. Optical customizes to varied low&nbsp;vision.</p>
                    </Typography>

                </Grid>
                
                <Grid item container ref={aboutRef} tabIndex={0} sx={copy_container} display={{xs: 'none!important',sm: 'flex!important' }}>
                    {/* <section id="About" ref={aboutRef} tabIndex={0} className="sectionFocus" > */}
                        <Grid item container sx={header}>
                            <Typography variant='h3'> 
                                ABOUT
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display="block">
                                <p>Optical is a variable font family and free web tool for varied low vision. Install the Google Chrome browser extension and adjust legibility to your needs. It combines recent research on legibility with modern font tools. <NextLink href={{pathname:"/process/",query:{darkMode:darkMode}}}><MUILink color="text.link" sx={focusStyle}> Learn more about how we made&nbsp;Optical.</MUILink></NextLink></p>
                                <p><span paragraph={"true"}>Version one was developed out of the <MUILink href="https://research.ecuad.ca/healthdesignlab/" target="_blank" rel="noopener" color="text.link" sx={focusStyle}>Health Design Lab</MUILink> at <MUILink color="text.link"  href="https://www.ecuad.ca/" target="_blank" rel="noopener" sx={focusStyle}>Emily Carr University</MUILink> in partnership with <MUILink color="text.link" href="https://disabilityalliancebc.org/" target="_blank" rel="noopener" sx={focusStyle}>Disability Alliance BC</MUILink>, <MUILink color="text.link" rel="noopener noreferrer" href="https://www.ic.gc.ca/eic/site/118.nsf/eng/home" target="_blank" sx={focusStyle}>the Accessible Technology Program</MUILink>, and <MUILink color="text.link" href="https://shumka.ecuad.ca/" target="_blank" rel="noopener" sx={focusStyle}>the Shumka&nbsp;Centre</MUILink>.</span></p>
                            </Typography>
                        </Grid>
                        <Grid item sx={{my:"6rem", display:'flex',maxWidth: {xs:"750px", lg:"900px"},width:'100%', justifyContent:"center"}}>
                            { darkMode ?
                                <div>
                                    <img className="box-shadow-white" src="/images/Extension_Dark.svg" alt="Web exention including font legibility controls"/>
                                </div>
                            :
                                <div>
                                    <img className="box-shadow" src="/images/Extension_Light.svg" alt="Extension Image"/>
                                </div>
                            }
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display="block">
                                <p>Boldness controls line thickness (also called weight) and balances positive and negative shapes to clarify letters' essential shapes. Width adds additional negative space to help improve legibility. Width also helps differentiate commonly misread similar narrow letters like I’s, l’s, and i’s. Spacing provides additional negative space. Resizing punctuation helps to clarify these essential small fine details and sentence structure. The preferred letter buttons alternate between available letter styles to exaggerate or improve legibility through increased differentiation (between different styles of zeros for&nbsp;example). </p>
                            </Typography>
                        </Grid>
                        <Grid item display={'flex'} sx={{maxWidth: {xs:"750px", lg:"900px"}, width: "100%", mt:"2rem", mb:"4rem"}}>
                            { darkMode ?
                                <div style={{width: "100%"}}>
                                    <img style={{width: "100%"}} src="/images/About_Diagram_001 1.svg" alt="Font features including boldness, width, letter alternatives, and resizeable punctuation."/>
                                </div>
                                    
                                :
                                <div style={{width: "100%"}}>
                                    <img style={{width: "100%"}} src="/images/About_Diagram_001 light.svg" alt="Font features including boldness, width, letter alternatives, and resizeable punctuation."/>
                                </div>
                                
                            }
                        </Grid>
                        
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display="block">
                                <p>Spend some time with your settings, then come back, keep toggling. Click on the Optical Icon in your browser window next to the address bar to open or minimize the extension. Click the Off and On button to activate Optical. Click Menu to see other options: light and dark modes and access the website and&nbsp;FAQ. </p>
                            </Typography>
                        </Grid>
                        
                    {/* </section> */}
                </Grid>

                    <Grid item container  id="Faq"  className="anchor" ref={faqRef} tabIndex={0}  display={{xs:'none', md:'flex'}} sx={copy_container}>
                    {/* <section id="Faq" ref={faqRef} tabIndex={0} className="sectionFocus"> */}
                        <Grid item container sx={header}>
                            <Typography variant='h3'> 
                                <p>FAQ</p>
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display="block">
                                → How do I Install&nbsp;Optical?
                                <Box component="span" sx={{display:"block", lineHeight:'50%'}}><br/></Box>
                                Click <MUILink color="text.link" href="#Install" sx={focusStyle}> Install</MUILink> to go to the Google Chrome Web Store. Click the blue “Add to Chrome” button at the top right. You’ll see a popup that says Optical will be able to read and change data on websites. In the pop up click the “Add Extension” button to the right. Success! You should be all set. There should be another popup at the top right, and the Optical Icon (a stylized version of the text select cursor resembling a capital I) next to your browser address bar. Click the icon button and get&nbsp;started.
                                <Box component="span" sx={{display:"block", lineHeight:'50%'}}>
                                    <br/>
                                    <img src="images/FAQ_Install.svg" width="100%" />
                                </Box>
                                <br/>
                                → Does Optical work in other browsers or on phones or&nbsp;tablets?
                                <Box component="span" sx={{display:"block", lineHeight:'50%'}}><br/></Box>
                                For the time being, Optical works only in Chrome on&nbsp;desktops. 
                                <br/><br/>
                                → Optical doesn’t seem to be working on every website.&nbsp;Why?
                                <Box component="span" sx={{display:"block", lineHeight:'50%'}}><br/></Box>

                                Websites are made in many different ways. We can’t guarantee that Optical will work perfectly in every scenario. Send us an email, let us know which sites aren’t working for you so we can keep tabs on this and hopefully address them in the next&nbsp;version.
                                <br/><br/>

                                → How do I uninstall or disable Optical?
                                <Box component="span" sx={{display:"block", lineHeight:'50%'}}><br/></Box>
                                In the Chrome browser menu bar, click “Window” then “Extensions” and then find Optical. Click either “Remove” or toggle the grey on/off switch on the right.
                                {/* Optical was created for individuals. If you’d like to set up Optical for more general use, lets chat. <MUILink color="text.link" target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com" sx={focusStyle}>Email&nbsp;us.</MUILink>                         */}

                                {/* THIS IS A DUMMY FAQ TEXT 
                                <br/>
                                → Does Optical work in other browsers or on phones or&nbsp;tablets?
                                <Box component="span" sx={{display:"block", lineHeight:'50%'}}><br/></Box>
                                For the time being, Optical works only in Chrome on&nbsp;desktops. 
                                <br/><br/>*/}

                            </Typography>
                        </Grid>
                    {/* </section> */}
                </Grid>

                    <Grid item container id="Accessibility"  className="anchor" ref={accessRef} tabIndex={0}  display={{xs:'none', md:'flex'}} sx={copy_container}>
                    {/* <section id="Accessibility" ref={accessRef} tabIndex={0} className="sectionFocus"> */}
                        <Grid item container sx={header}>
                            <Typography variant='h3'> 
                            ACCESSIBILITY
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display="block">
                            <p>Optical was designed, developed, and tested with accessibility in mind. Let us know if we’ve missed&nbsp;something! <MUILink color='text.link' target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com" sx={focusStyle}>Email&nbsp;us.</MUILink> </p>
                            </Typography>
                        </Grid>
                    {/* </section> */}

                </Grid>

                    <Grid item container id="Feedback"  className="anchor" ref={feedbackRef} tabIndex={0}  display={{xs:'none', md:'flex'}} sx={copy_container}>

                    {/* <section id="Feedback" ref={feedbackRef} tabIndex={0}className="sectionFocus"> */}
                        <Grid item container sx={header}>
                            <Typography variant='h3'> 
                            FEEDBACK / CONTACT
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display="block">
                            <p>Do you have any feedback on our fonts, extension or site? We’d love to hear from you. <MUILink color="text.link" target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com" sx={focusStyle}>Email&nbsp;Tyler@opticalfont.com </MUILink></p>
                            </Typography>
                        </Grid>
                    {/* </section> */}

                </Grid>

                    <Grid item container id='Privacy'  className="anchor" tabIndex={0} ref={privacyRef}  display={{xs:'none', md:'flex'}} sx={copy_container}>

                    {/* <section id="Privacy" ref={privacyRef} > */}
                        <Grid item container sx={header}>
                            <Typography variant='h3'> 
                            PRIVACY
                            </Typography>
                        </Grid>
                        <Grid item container sx={copy}>
                            <Typography variant='body1' display="block">
                                <Box component="p">

                                Optical tracks page views and extension installations but collects no other data from you. <NextLink 
                                href={{ pathname:"/privacy-policy/",
                                query:{darkMode:darkMode},
                            }}><MUILink color="text.link" sx={focusStyle}>Read our full privacy&nbsp;policy.</MUILink></NextLink>                  
                            </Box>
                            </Typography>
                        </Grid>
                    {/* </section> */}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
