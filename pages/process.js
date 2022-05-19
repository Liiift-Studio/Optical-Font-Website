import styles from '../styles/layout.module.css'
import React, { createRef, useEffect, useState } from "react"
import Image from 'next/image'
import {Link} from '@mui/material'

import {ToggleButton,ToggleButtonGroup, Icon,IconButton, Grid, Box, CssBaseline, Button, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material/'
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"

import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'

import FooterLayout from '../components/footer-layout'
import {dm_icon,content_container_pp, header_container,logo_container, content_container, circle, copy, copy_container, header, img_container_ext, menu_container, focusStyle, header_button } from "../styles/layout.styles";

import { useRouter } from 'next/router'

import NextLink from 'next/link'
import logoText from '../public/images/logo-type.svg'
import logoTextDark from '../public/images/logo-type-white.svg'
import cursor from '../public/images/cursorLight_noBG.svg'
import cursorDark from '../public/images/cursorDark_noBG.svg'

export default function Home({ children}) {
  // lightSwitch= lightSwitch || true;
  const introRef= createRef();
  const backgroundRef = createRef();
  const visionRef = createRef();
  const fontDesignRef = createRef();
  const browserExtWebRef = createRef();
  const nextStepstRef= createRef();
  const conclusionstRef = createRef();
  const teamRef=createRef();

  const router= useRouter();

  const [darkMode, setDarkMode]= useState(()=>{
    if(router.query.darkMode==="false") return false
    else return true
  });

  function chooseTheme(){
      var x=(darkMode ? responsiveFontSizes(darkTheme) : responsiveFontSizes(lightTheme));
      return x;
  }
  const [section, setSection]= useState(null);
  const clickSet= (section)=>{
      setSection(section);
  }

  const menuItemStyle= (id)=>{
    var circle= false;
    if(id===section){
        circle= true;
    }
    var style= {
        display:'flex',
        position:'relative',
        p:0,
        mb:'1.1rem',

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

const menuCircle= (state)=> {
    var style= {
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

  const handleScroll= ()=>{
    try{
        var sections= [
        introRef.current.getBoundingClientRect().y
        , backgroundRef.current.getBoundingClientRect().y
        , visionRef.current.getBoundingClientRect().y
        , fontDesignRef.current.getBoundingClientRect().y
        , browserExtWebRef.current.getBoundingClientRect().y
        , nextStepstRef.current.getBoundingClientRect().y
        , conclusionstRef.current.getBoundingClientRect().y
        , teamRef.current.getBoundingClientRect().y
        ];
        var index= null;
        var smallest= null;
        for(var i= 0; i<sections.length;i++){
            if (smallest < 0 &&  sections[i]<200) {smallest= null}
            if(smallest=== null){
                smallest= sections[i];
                index= i;
            
            }
            if(sections[i] < smallest ){
                index= i;
                smallest = sections[i];
            }
        }
        if( index=== 0){
            setSection("intro");

        }
        else if( index=== 1){
            setSection("Background");

        }
        else if( index=== 2){
            setSection("Vision");

        }
        else if( index=== 3){
            setSection("FontDesign");

        }
        else if ( index === 4){
            setSection("BrowserExtWeb");
        }
        else if ( index === 5){
            setSection("NextSteps");
        }else if ( index === 6){
            setSection("Conclusions");
        }else if ( index === 7){
            setSection("Team");
        }

    }catch(e){}
}
useEffect(()=>{
    window.addEventListener('scroll', handleScroll, { passive: true });
    return ()=> {
        window.removeEventListener('scroll', handleScroll);
    };
},)
    return(
        <>
            <ThemeProvider theme={chooseTheme()}>
                <CssBaseline/>
                <Grid container sx={header_container}>
                    <Grid item container direction="row">
                        {/* Mobile Logo */}
                        <Grid container item display={{xs:'flex', sm:'none'}} >
                            
                            <Grid item xs={6} px={0} sx={{paddingTop:{xs:'2rem',md:'0'},paddingBottom:{xs:'2rem',md:'0'}}} display='flex'>
                                <IconButton href="/" aria-labelledby='logotxt' justifycontent='flex-start' sx={{width:'100%',minWidth:'120px',px:0,borderRadius:0,alignItems:'end'}}>
                                    <Image id='logotxt' src={darkMode? logoTextDark:logoText} alt='Optical project logo' />
                                </IconButton>
                            </Grid>  
                            <Grid item xs={5}/>
                            <Grid item xs={1} justifyContent='flex-end' sx={{paddingTop:{xs:'2rem',md:'0'},paddingBottom:{xs:'2rem',md:'0'}}} display='flex'>
                                <IconButton href="/" aria-labelledby='logotxt' justifycontent='flex-start'  sx={{width:'100%', minWidth:'20px',borderRadius:0,alignItems:'start',px:0}}>
                                    <Image id='cursor' src={darkMode? cursorDark:cursor} alt='An icon based on the text input cursor symbol.' />
                                </IconButton>
                            </Grid>
                        </Grid>

                        {/* Desktop */}
                        <Grid container sx={{textAlign: "right"}} display={{xs:'none', sm:'flex'}}>
                            <Grid item xs={6} sx={{textAlign: "left"}}>
                                <IconButton href="/" aria-labelledby='logotxt' sx={{p:0, borderRadius:0, justifyContent:'flex-start','&:focus-visible':{
                                    // m: '.25rem',
                                    p:'.25em .25em',
                                    borderRadius:'5px',
                                    // outline: '4px solid',
                                },}}>
                                    <img id='logo' style={{display: "inline-block", maxWidth: "300px"}} src={darkMode? '/images/logoDark.svg': '/images/logo.svg'} alt='Optical project logo including an icon based on the text input cursor symbol.'/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={6} sx={{textAlign: "right"}}>
                                <NextLink href={{
                                    pathname:"/",
                                    query:{darkMode:darkMode},
                                }}>
                                    <Button aria-labelledby='Home' variant="outlined" sx={header_button}>
                                        <Typography variant='h2' alt="Home" sx={{position:'relative', top: '.1rem'}}>Home</Typography>
                                    </Button>
                                </NextLink>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid container item sm={12} sx={content_container_pp}>
                    {/* Menu */}
                    <Grid item container sm={4} display={{xs:'none', md:'flex'}} sx={menu_container}>
                        {/* menu */}
                        <Grid container item onClick={()=>clickSet('intro')} sx={menuItemStyle('intro')} >
                            <Link  href="#intro" color='inherit' underline='none' sx={focusStyle}>
                                <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center',}}>
                                Introduction
                                </Typography>
                            </Link>

                        </Grid>
                        <Grid container item onClick={()=>clickSet('Background')} sx={menuItemStyle('Background')}>
                            <Link  href="#Background" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Background
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Vision')} sx={menuItemStyle('Vision')}>
                            <Link  href="#Vision" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Vision
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('FontDesign')} sx={menuItemStyle('FontDesign')}>
                            <Link  href="#FontDesign" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Font Design
                                </Typography>
                            </Link>
                        </Grid> 
                        <Grid container item onClick={()=>clickSet('BrowerExtWeb')} sx={menuItemStyle('BrowserExtWeb')}>
                            <Link  href="#BrowserExtWeb" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Extension & Website
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Conclusions')} sx={menuItemStyle('Conclusions')}>
                            <Link  href="#Conclusions" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Conclusions
                                </Typography>
                            </Link>
                        </Grid>  
                        <Grid container item onClick={()=>clickSet('NextSteps')} sx={menuItemStyle('NextSteps')}>
                            <Link  href="#NextSteps" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Next Steps
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Team')} sx={menuItemStyle('Team')}>
                            <Link  href="#Team" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h4" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Team 
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>

                    {/* Copy */}
                    <Grid item container md={8} alignItems="top">
                        <Grid item container sx={copy_container} >
                            <Box id="intro" ref={introRef} tabIndex={0} sx={focusStyle}>
                                <Grid item container sx={header}>
                                    <Typography variant='h3'>INTRODUCTION</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        <p>Reading is not a trivial task. Two hundred and sixty million rods and cones in your eyes detect light and relay electrical signals to the language centres in the brain for identification and interpretation. Darwin himself struggled to reconcile the complexity of the eye with the randomness of natural selection. We depend on written language to stay informed, connected and employed, but we haven’t perfected it. Our alphabet was created for paper, for the general population. It works really well. It doesn’t work perfectly for everyone. Research suggests ways to improve letters for low vision. But low vision varies in both source and degree. There are no one size fits all solutions in accessibility.</p>
                                        <p>There are great fonts for low vision. There are great font customization tools. Optical simply combines the two.</p>
                                        <p>With this article, I’d like to share a bit of the thought process behind the project. I hope Optical offers a small contribution to the conversation around the tools and techniques used to make letters a little bit better for everyone. I want to note that I’ve written this both for people with low vision and for other designers and developers working with accessibility. I’ve done my best to write clearly and avoid technical terminology. There’s some jargon. I apologize in advance.</p>
                                        <br/>
                                        { darkMode ?
                                            <img  style={{width : '100%'}} src="/images/Optical_Process_2.svg" alt="Process Image letters A and B"/>
                                        :
                                            <img  style={{width : '100%'}} src="/images/Optical_Process_1.svg" alt="Process Image letters A and B"/>
                                        }
                                        <br/><br/>   
                                    </Typography>
                                </Grid>
                                </Box>
                                <Box id="Background" ref={backgroundRef} tabIndex={0} sx={focusStyle} mt="1.5rem">
                                <Grid item container sx={header}>
                                        <Typography variant='h3' > 
                                        BACKGROUND
                                        </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* <section > */}
                                        <p>The project started as a design school thesis project, an eight month dive into research and a working prototype. Literature suggested ways to clarify letters for low vision. Prior work in design for accessibility highlighted the need for customization and feedback. The variable font format, OpenType 1.8, provided a mechanism to customize and display letters. (Variable fonts take two or more versions of a font, a bold and a light weight for example, and render hundreds of versions in between.) With a prototype, I found partners and support for continued development, research, and feedback. The Accessible Technology Program provided financial support. The Disability Alliance of BC helped coordinate feedback sessions. The Health Design Lab at Emily Carr University provided guidance, support, and a home for the project. The Shumka Centre at Emily Carr supported all of it. Tyler Hawkins started and leads Optical (and wrote this article). Mirko Velimirovic of Abyss Type Company lead font development. Quinn Keaveney and Liiift Studio signed on to run web and extension development.</p>
                                        
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id="Vision" ref={visionRef} tabIndex={0} sx={focusStyle} mt="1.5rem">
                                <Grid item container sx={header}>
                                        <Typography variant='h3'> 
                                        VISION
                                        </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* <section > */}
                                        <p>Two hundred and fifty million million rods in your eyes are sensitive to motion. Your 10 million cones are more sensitive to fine details. The centre of the retina, the fovea, contains the majority of your cones and so you see clearest in the centre of your vision. When reading, your eyes do not move smoothly through text one letter at a time. They jump through movements called saccades. We center our vision on a few letters, identify them simultaneously and then jump ahead, skimming those in between. Younger readers with clearer eyesight jump in shorter saccades, reading more letters with more clarity. Older readers and those with poorer sight jump further, missing more details and skimming the letters in between. People with central (foveal) vision loss sometimes read through other areas of the visual field.</p>
                                        <p>The eyes deliver electrical signals to the brain for identification and interpretation. We read through matching incoming visual signals to mental images, expectations of letter shapes, sub-letter shapes, and word shapes, simultaneously, with a priority on letter shapes. Expectations are informed by experience, practice and familiarity, and so we read familiar fonts faster and with better comprehension than unfamiliar fonts. (Daniel Fiset wrote that “A 45-year-old person who has read only 1 hour a day will have identified more than 1 billion letters.”) That said, familiarity can be improved through practice.</p>
                                        <img  style={{width : '100%'}} src="/images/Eye_001.png" alt="3D rendering of an eye ball"/>
                                        <br/>
                                        <p>It's important to note, I use the term ‘low vision’ to describe a broad range of vision loss rated below 20/40 acuity from a variety of sources including refractive errors, cataracts, glaucoma, diabetic retinopathy and others. Others use ‘low vision’ to describe more advanced symptoms.</p>
                                        <p>We expect Optical to be most useful to those whose primary assistive tool is screen magnification. Magnification is the most effective tool for improving legibility for low vision. It can, however, disrupt the flow and layout of text and so Optical complements magnification by enhancing letterforms.</p>
                                    </Typography>
                                </Grid>
                            </Box>
                                <Box id="FontDesign" ref={fontDesignRef} tabIndex={0} sx={focusStyle} mt="1.5rem">
                                <Grid item container sx={header}>
                                        <Typography variant='h3'> 
                                        FONT DESIGN
                                        </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* <section > */}
                                        <p>Font design for low vision balances the need for familiarity with clarity and differentiation to improve letter identification. Often this means exaggerating the legibility techniques used in fonts made for general use.</p>
                                        <p>Careful balance between positive and negative space provides clarity. Optical doesn’t offer super bold or light weights. Light weights can blur into the background, and the diminished negative space of ultra-bold weights obscures letters’ essential identifying features. Open shapes help prevent letters from blurring in on each other. Wide letter spacing helps minimize “crowding”, an effect that describes how tightly spaced letters can obscure the legibility of their neighbours, simply put. Enlarged punctuation helps to mitigate the loss of these essential fine details. Differentiation between similar letter shapes improves letter identification. Most fonts for low vision are sans serifs (lacking the fine details and high contrast found in fonts like Times New Roman.) Sans serifs and slab serifs (think typewriter-style fonts) appear to be more legible to people with low vision than serif fonts because they don’t clutter letters’ essential recognizable structures. These strategies come from research by Manfred MacKeben, Aries Arditi, Sofie Beier, and others.</p>
                                        <p>Increasing differentiation can accentuate unconventional letter shapes and disrupt conventional letter spacing. For example, capital ‘I’s, lowercase ‘l’s and similar letters are often confused when they share the same vertical bar construction. So, we add differentiating characteristics: horizontal bars to an ‘I’, a tail to an ‘l’, a slab serif bar to the top of an ‘i’. Similar approaches exaggerate the differences between ‘O’s, ‘0’s, and ‘Q’s. Optical allows people to accentuate or minimize these differentiations and find their own balance between exaggerated legibility and conventional, familiar letter shapes. Consistent use of the extension across the Internet aims to reinforce legibility through familiarity. Sofie Beier’s work shows that practice improves familiarity, and so we encourage people to set up Optical, spend time reading it, then return to it, make adjustments and repeat.</p>
                                        <p>Initially, the project focused on differentiation as a stand-alone adjustment. However, conversations with Beier convinced us that using adjustable width may be more useful. Width increases the negative space around letters, clarifying letter shapes. Width also often accomplishes differentiation by exaggerating the unique features in commonly misidentified narrow characters: ‘I’, ‘l’, ‘i’. So we made an adjustable width axis and incorporated much of our work on differentiation. </p>
                                        <p>Feedback from people with low vision early on in the project highlighted the need for stronger boldness controls beyond what is currently commonly available. To our knowledge, there are no assistive tools that support fine-tuned variable font boldness (weight) control. </p>
                                        { darkMode ?
                                            <img  style={{width : '100%'}} src="/images/Optical_Process_03_DarkMode.svg" alt="Optical Font Process Image"/>
                                        :
                                            <img  style={{width : '100%'}} src="/images/Optical_Process_04_LightMode.svg" alt="Optical Font Process Image"/>
                                        } 
                                        <p>The resulting font family is a sans serif with adjustable weights, widths, spacing and punctuation, with letter spacing primarily handled by the browser extension for now. Stylistically, the project takes cues from the earliest sans serifs, their imperfections providing more differentiation than geometric fonts’ consistency and more familiarity than the slightly less common humanist style. Working to open shapes, our type designer found a way to marry the strengths of the grotesque and humanist sans serif styles. He added a few pixels to the interiors of terminals, subtly nodding to the flick of the pen. It created a curve that feels like a familiar grotesque but retains much of the openness of humanist fonts. (It also nods to a bit of research from Daniel Fiset suggesting that the ends, terminals, of lines, may help to reinforce letter differentiation. This technique is untested, so we kept this really quite subtle). Stylistically, Optical is quite neutral but just slightly more personable than the most common sans serifs. </p>
                                        
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id="BrowserExtWeb" ref={browserExtWebRef} sx={focusStyle} tabIndex={0} mt="1.5rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'>EXTENSION & WEBSITE</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        <p>On the extension side of the project, simple slider bars fine-tune the legibility of the font family. Settings are saved in the extension and can be returned to and adjusted. We’ve been careful to offer adjustments that have academic support. Still, vision is complex and subjective preferences are a poor indicator of legibility. For now, we follow the lead of much of the rest of the assistive technology community in which user adjustment, self-assessments, and customization are expected. We did get feedback on a version of the project with more guidance, but it didn’t test well. We're not convinced that we have the tools to do this properly right now. There is precedent for our approach. In 2004, Aries Arditi, a psychologist with a Ph.D. and a postdoc from NYU, created a font customization system with support from the U.S. National Institutes of Health. His tool used slider bars to control various legibility characteristics of letters for people with low vision. He tested it with 40 people, many with maculopathy, cataracts, or glaucoma and vision between 20/60 and 20/200 acuity. People created a huge range of letter styles. His main finding was that people with varied low vision benefited from varied letters. Arditi wasn’t able to show that his letters were more legible than established fonts, possibly because they were really quite unconventional in construction. He referred to his software as spartan, didn’t release it to the public, and suggested that font designers could create tools with more fine-tuned control. It's important to note that this aspect of the project is unfinished. Version 1 is not the be-all-end-all. There are very intelligent people working on this very issue right now, for example, those involved with the Readability Consortium. I'm excited to see where these technologies go and we're hopeful Optical will be able to offer more sophisticated customization in the future.</p>
                                        <img  style={{width : '100%'}} src="/images/Optical_Mock_034_B.jpg" alt="3D rendered mockup of the extension in use"/>
                                        <br/>
                                        <p>Early on in the project, the Shumka Centre connected us with a team of lawyers to discuss data privacy. Collecting data on our users would benefit the project. It could give us insight into the most useful settings for specific needs. However, collecting data that could be considered personal health data would require significant care. I decided that as a relatively small university-based project, we didn’t have the interest or resources to do this properly. I want Optical to be highly respectful to privacy and so we only collect data on page views and downloads. (For feedback and testing purposes, we did ask participants about their vision. We worked with the Canadian Research Ethics Board to make sure we handled this properly).</p>
                                        <p>One last note on web and extension design: feedback early on in the project from a few people with low vision highlighted the importance of strong dark modes. Light bleed in light mode can be overbearing and so we spent some time dialling this in.</p>
                                         </Typography>
                                </Grid>
                            </Box>
                            
                            <Box id='Conclusions' ref={conclusionstRef} sx={focusStyle} tabIndex={0} mt="1.5rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'>CONCLUSIONS</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* </section> */}
                                    
                                        {/* <section id='Contact' ref={contactRef}> */}
                                        <p>The result of our work is a seemingly simple font and browser extension smaller in kilobytes than most of the out of focus photos on your phone. It looks like a couple of slider bars and a font that’s not wildly different than any other. There’s a bit more to it than you might expect. Ultimately, we’d like Optical to contribute to conversations on improving the design and accessibility of the written word. We’d love to play a small part in making the built environment a little bit better for everyone.</p>
                                        {/* </section> */}
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id='NextSteps' ref={nextStepstRef} sx={focusStyle} tabIndex={0} mt="1.5rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'>NEXT STEPS</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* </section> */}
                                    
                                        {/* <section id='Contact' ref={contactRef}> */}
                                        <p>Optical is not done. The problem is not solved. Vision, accessibility, type and the internet are all independently complex subjects that continue to evolve. The diversity of experiences of low vision and the sheer complexity of devices and tools in this space means it won’t work perfectly for everyone, every website, in every situation. There are more than a few ways to continue making this thing better.</p>
                                        <p>Optical was built on literature review and feedback. Feedback sessions ranged from expert interviews to watching people with low vision use versions of the tool through video calls and screen sharing. We’d like to conduct more rigorous scientific testing. Sofie Beier has offered to lead this testing for us. We're currently looking for support to do so.</p>
                                        <p>One finding from research and feedback was the benefit of a career in software for some with low vision. By one estimate, people with vision loss are employed and educated at half the rate of the general population. The prevalence of work-from-home in the software industry means people don’t have to commute, they can use computers set up with their own suite of assistive tools and can control room lighting. We’d like to expand Optical to work for coding. This means a monospace version of the font family, and customization tools that work in code editors.</p>
                                        <p>Currently Optical works in the Chrome browser on desktops and for a variety of Latin-based alphabets. Eventually, we’d like to make Optical work offline, on other devices, in other software, with more language support.</p>
                                        <p>As this phase of development comes to an end, we’re looking for partners to collaborate to continue pushing the project.</p>
                                        {/* </section> */}
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id='Team' ref={teamRef} sx={focusStyle} tabIndex={0} mt="1.5rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'>TEAM</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* </section> */}
                                    
                                        {/* <section id='Contact' ref={contactRef}> */}
                                        <p>I want to thank everyone in the low vision community who lent feedback. Your work on Optical was essential.</p>
                                        <p>I also want to specifically thank Caylee Raber, Nadia Beyzaei, Kate Armstrong, Justina Loh, Karen Martin, Quinn Keaveney, Mirko Velimirovic, Colby May, George Macrae, and Lisa Boulton for their work. Lastly, a note of appreciation is owed to Sofie Beier, Stephen Nixon, Dr. Peter Renke, Thomas Jockin, Kevin Larson and the Advanced Reading Technologies team at Microsoft for sharing feedback and expertise.</p>
                                        <p>Finally, Optical was largely created on the unceded land of the Coast Salish peoples, including the Musqueam, Squamish and Tsleil-Waututh Nations in coastal British Columbia. Land acknowledgements are a small step in a complex history, but it’d be a mistake not to share appreciation for the incredible land where we’re privileged to live and work.</p>
                                        {/* </section> */}
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Logos */}
                    <Grid item container md={4}/>
                    <Grid item container md={8} alignItems="top" sx={{pt:15,pb:20}} >
                            <Box sx={{maxWidth:{xs:"750px", lg:"900px"}}}>

                                { darkMode ?
                                    <img  style={{width : '100%'}} src="/images/Logos_004_OffWhite.svg" alt="Funding Partner Logos"/>
                                    :
                                    <img  style={{width : '100%'}} src="/images/Logos_003_OffBlack.svg" alt="Funding Partner Logos"/>
                                }    
                            </Box>
                    </Grid>
                </Grid>

                <FooterLayout darkMode={darkMode}/>
                {children}
            </ThemeProvider>
        </>
    )
}
