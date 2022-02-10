import React, { createRef, useEffect, useState } from "react"
import {Typography , Grid,  Box,Link} from '@mui/material'
import {copy, copy_container, header, } from "../styles/layout.styles";


export default function MenusLayout({children,darkMode,about,footerRef }) {
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
        var style = {
            position:'relative',
            pb:'1.1rem',
            ':before': menuCircle(circle),
            ':hover': {
                cursor:'pointer',
            },
            ':hover:after': {
                content:"''",
                position:'absolute',
                bgcolor:'text.main',
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
            bgcolor:'text.main',
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
    <Grid container item sm={12} sx={{
            position:'relative',
            px:{xs:'1vw',lg:'4vw'},
            pt:{sm:8},
            pb:{sm:12},
            
    }}>
        {/* Menu */}
        <Grid item container sm={4} display={{xs:'none', md:'flex'}} sx={{
            pl: '2vw',
            pt: '0%',
            top:'5vh',
            position: '-webkit-sticky',
            position: 'sticky',
            justifyContent: 'flex-start',
            height :'100%',
            // overflow: 'hidden',
            width: '100%',
            mb:'5%',
            display:{xs:'none', md:'flex'}
        }}>
            {/* menu */}
            <Grid container item onClick={()=>clickSet('Install')} sx={menuItemStyle('Install')}>
                <Link  href="#Header" color='inherit' underline='none' sx={{width:'100%'}}>
                    <Typography variant="h3">
                    INSTALL
                    </Typography>
                    </Link>

            </Grid>
            <Grid container item onClick={()=>clickSet('About')} sx={menuItemStyle('About')}>
                <Link  href="#About" color='inherit' underline='none' sx={{width:'100%'}}>
                <Typography variant="h3">
                    ABOUT
                </Typography>
                </Link>
            </Grid>
            <Grid container item onClick={()=>clickSet('Faq')} sx={menuItemStyle('Faq')}>
                    <Link  href="#Faq" color='inherit' underline='none' sx={{width:'100%'}}>
                <Typography variant="h3">
                    FAQ
                </Typography>
                    </Link>
            </Grid>
            <Grid container item onClick={()=>clickSet('Accessibility')} sx={menuItemStyle('Accessibility')}>
                <Link  href="#Accessibility" color='inherit' underline='none' sx={{width:'100%'}}>
                <Typography variant="h3">
                    ACCESSIBILITY
                </Typography>
                </Link>

            </Grid>
            <Grid container item onClick={()=>clickSet('Feedback')} sx={menuItemStyle('Feedback')}>
                <Link  href="#Feedback" color='inherit' underline='none' sx={{width:'100%'}}>
                <Typography variant="h3">
                FEEDBACK
                </Typography>
                </Link>

            </Grid>
            <Grid container item onClick={()=>clickSet('Privacy')} sx={menuItemStyle('Privacy')}>
                <Link  href="#Privacy" color='inherit' underline='none' sx={{width:'100%'}}>
                <Typography variant="h3">
                PRIVACY
                </Typography>
                </Link>

            </Grid>
            <Grid container item onClick={()=>clickSet('SiteMap')} sx={menuItemStyle('SiteMap')}>
                <Link  href="#Footer" color='inherit' underline='none' sx={{width:'100%'}}>
                <Typography variant="h3">
                SITE MAP
                </Typography>
                </Link>

            </Grid>
            
        </Grid>

        {/* Copy */}
        <Grid item container md={8} alignItems="top" sx={{ 
            pl:'1vw', 
            pr: {xs:'1vw', md:'7vw',}, 
            justifyContent: 'center',
            }}>
                <Grid item container sx={copy_container}>

                <section id="About" ref={aboutRef}>
                    <Grid item container sx={header}>
                        <Typography variant ='h3'> 
                            ABOUT
                        </Typography>
                    </Grid>
                    <Grid item container sx={copy}>
                        <Typography variant='body1' display ="block">

                            Optical is a customizeable font and a free web tool for low vision. Install the Google Chrome browser extension, fine tune your font and read the internet in letters set to your legibility needs. It combines recent research into specific legibility goals with modern font software. <Link color="text.link" href={{pathname:"/process/",query:{darkMode:darkMode}}}>Learn more about how we made Optical.</Link>
                            <br/><br/>
                            Optical is being developed out of the 
                            <Link color="text.link" href="https://research.ecuad.ca/healthdesignlab/" target="_blank" rel="noopener">Health Design Lab</Link> at <Link color="text.link"  href="https://www.ecuad.ca/" target="_blank" rel="noopener">Emily Carr University</Link> in partnership with <Link color="text.link" href="https://disabilityalliancebc.org/" target="_blank" rel="noopener">Disability Alliance BC</Link>, <Link color="text.link" rel="noopener noreferrer" href="https://www.ic.gc.ca/eic/site/118.nsf/eng/home" target="_blank">The Accessible Technology Program</Link>, and <Link color="text.link" href="https://shumka.ecuad.ca/" target="_blank" rel="noopener" >the Shumka Centre</Link>.
                        </Typography>
                    </Grid>
                </section>
                </Grid>

                <Grid item container sx={copy_container}>
                <section id="Faq" ref={faqRef}>
                    <Grid item container sx={header}>
                        <Typography variant ='h3'> 
                            FAQ
                        </Typography>
                    </Grid>
                    <Grid item container sx={copy}>
                        <Typography variant='body1' display ="block">
                            →How do I install Optical?<br/><br/>Click <Link color="text.link" href="#Install"> Install</Link> to go to the Google Chrome Web Store. Click the blue “Add to Chrome” button at the top right. You’ll see a popup that says Optical will be able to read and change data on websites. In the pop up click the “Add Extension” button to the right. Success! You should be all set. There should be another pop up at the top right, and the Optical Icon (a stylized version of the text select cursor resembling a  capital I) next to your browser website address bar. Click the icon button and get started.
                            <Box sx={{py:'2rem'}}>
                            <img src="images/FAQ_Install 5.png" width="100%" />

                            </Box>
                            
                            →Does Optical work in other browsers or on phones or tablets?<br/><br/>For the time being, Optical works only in Chrome on desktops. 
                            <br/><br/>→Can I use Optical for my organization or project?<br/><br/>Optical was created for individuals. If you’d like to set up Optical for general use, lets chat. We’ll see what we can do. <Link color="text.link" target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com">Email us.</Link>                        
                        </Typography>
                    </Grid>
                </section>
                </Grid>

                <Grid item container sx={copy_container}>
                <section id="Accessibility" ref={accessRef}>
                    <Grid item container sx={header}>
                        <Typography variant ='h3'> 
                        ACCESSIBILITY
                        </Typography>
                    </Grid>
                    <Grid item container sx={copy}>
                        <Typography variant='body1' display ="block">
                            Optical was designed, developed, and tested with accessibility in mind. Let us know if we’ve missed something! <Link color='text.link' target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com">Email us.</Link> 
                        </Typography>
                        </Grid>
                </section>

                </Grid>

                <Grid item container sx={copy_container}>

                <section id="Feedback" ref={feedbackRef}>
                    <Grid item container sx={header}>
                        <Typography variant ='h3'> 
                        FEEDBACK / CONTACT
                        </Typography>
                    </Grid>
                    <Grid item container sx={copy}>
                        <Typography variant='body1' display ="block">
                        Do you have any feedback on our fonts, extension or site? We’d love to hear from you. <Link color="text.link" target="_blank" rel="noopener" href="mailto: Tyler@opticalfont.com">Email Tyler@opticalfont.com </Link>
                        </Typography>
                    </Grid>
                </section>

                </Grid>

                <Grid item container sx={copy_container}>

                <section id="Privacy" ref={privacyRef}>
                    <Grid item container sx={header}>
                        <Typography variant ='h3'> 
                        PRIVACY
                        </Typography>
                    </Grid>
                    <Grid item container sx={copy}>
                        <Typography variant='body1' display ="block">
                        Optical collects no data, including cookies or personal information. We rely on feedback and conversations to track Optical’s strengths and opportunities. <Link color="text.link" href={{pathname:"/privacy-policy/", query:{darkMode:darkMode},hash:'terms'}}>Read our full privacy policy.</Link>                  
                        </Typography>
                    </Grid>
                </section>
                </Grid>

        </Grid>
</Grid>
        </>
    )
}