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
        console.log(index);
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
                    <Grid item container direction ="row">
                
                        <Grid container item xs={12} md={6} alignContent={'center'} >
                            <IconButton aria-labelledby='logo' href="/" sx={logo_container} >
                                <img id='logo' src={darkMode? '/images/logoDark.svg': '/images/logo.svg'} alt='Optical project logo including an icon based on the text input cursor symbol.'/>
                            </IconButton>
                        </Grid>


                        <Grid container item  display={'flex'} xs sx={{
                            display:'flex',
                            justifyContent:{xs:'start',md:'end'},
                            pb:{xs:8,md:0},
                            pt:{xs:4,md:0},
  
                        }}>
                            <NextLink href={{
                                pathname:"/",
                                query:{darkMode:darkMode},
                            }}>
                                <Grid container item xs={'auto'}sx={{alignItems:'center',mr:2,}}>
                                    <Button aria-labelledby='Home' variant="outlined" sx={header_button}>
                                        <Typography variant='h2' sx={{position:'relative', p: '.1rem', px:2, }} alt="Home">
                                            Home
                                        </Typography>
                                    </Button>
                                </Grid>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item sm={12} sx={content_container_pp}>
                    {/* Menu */}
                    <Grid item container sm={4} display={{xs:'none', md:'flex'}} sx={menu_container}>
                        {/* menu */}
                        <Grid container item onClick={()=>clickSet('intro')} sx={menuItemStyle('intro')} >
                            <Link  href="#intro" color='inherit' underline='none' sx={focusStyle}>
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center',}}>
                                Intro
                                </Typography>
                            </Link>

                        </Grid>
                        <Grid container item onClick={()=>clickSet('Background')} sx={menuItemStyle('Background')}>
                            <Link  href="#Background" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Background
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Vision')} sx={menuItemStyle('Vision')}>
                            <Link  href="#Vision" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Vision
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('FontDesign')} sx={menuItemStyle('FontDesign')}>
                            <Link  href="#FontDesign" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Font Design
                                </Typography>
                            </Link>
                        </Grid> 
                        <Grid container item onClick={()=>clickSet('BrowerExtWeb')} sx={menuItemStyle('BrowserExtWeb')}>
                            <Link  href="#BrowserExtWeb" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Browser Extension & Website
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('NextSteps')} sx={menuItemStyle('NextSteps')}>
                            <Link  href="#NextSteps" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Next Steps
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Conclusions')} sx={menuItemStyle('Conclusions')}>
                            <Link  href="#Conclusions" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                Conclusions
                                </Typography>
                            </Link>
                        </Grid>  
                        <Grid container item onClick={()=>clickSet('Team')} sx={menuItemStyle('Team')}>
                            <Link  href="#Team" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
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
                                    <Typography variant='h3' sx={{}}
                                        >Intro</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        <p>Reading is not a trivial task. Two hundred and sixty million rods and cones in your eyes detect light and relay electrical signals to the language centres in the brain for identification and interpretation. Darwin himself struggled to reconcile the complexity of the eye with the randomness of natural selection. We depend on written language to stay informed, connected and employed, but we haven’t perfected it. Our alphabet was created for paper, for the general population. It works really well. It doesn’t work perfectly for everyone. Specific enhancements have been found to be useful for people with low vision. But low vision varies in both source and degree. There are no one size fits all solutions in accessibility.</p>
                                        <p>There are great fonts for low vision. There are great font customization tools. Optical simply combines the two.</p>
                                        <p>With this article I’d like to share a bit of the thought process behind the project. I hope Optical offers a small contribution to the conversation around the tools and techniques used to make letters a little bit better for everyone. It’s not perfect. We still have work to do. I want to note that I’ve written this both for people with low vision and for other designers and developers working with accessibility. I’ve done my best to write clearly and avoid technical terminology. There’s some jargon. I apologize in advance.</p>
                                        
                                    </Typography>
                                </Grid>
                                </Box>
                                <Box id="Background" ref={backgroundRef} tabIndex={0} sx={focusStyle} mt="2rem">
                                <Grid item container sx={header}>
                                        <Typography variant='h3'sx={{                      
                                        'MozFontFeatureSettings': '"ss05"',
                                        'WebkitFontFeatureSettings':'"ss05"',
                                        fontFeatureSettings:'"ss05"'}}
                                        > 
                                        Background
                                        </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* <section > */}
                                        <p>The project started as a design school thesis project, an eight month dive into research and a working prototype. Literature from researchers like Manfred MacKebben, Aries Arditi, and Sofie Beier suggested ways to clarify letter shapes. Prior work in design for accessibility highlighted the need for customization and feedback. The recently introduced variable font format, OpenType 1.8, gave us a mechanism to customize and use letters. (Variable fonts take two or more versions of a font, a bold and a light weight for example, and render and display hundreds of versions in between.) With a prototype, we found partners and support for continued development, research, and feedback. The Disability Alliance of BC helped coordinate feedback sessions. The Accessible Technology Program provided financial support. The Health Design Lab at Emily Carr University provided guidance, support, and a home for the project. The Shumka Centre at Emily Carr supported all of it. Tyler Hawkins started and leads Optical (and wrote this article). Mirko Velimirovic of Abyss Type Company lead font development. Quinn Keaveney and Liiift Studio signed on to run web and extension development. </p>
                                        <p>Many people have lent feedback, thoughts, advice and research and I want to thank all of them. </p>
                                        
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id="Vision" ref={visionRef} tabIndex={0} sx={focusStyle} mt="2rem">
                                <Grid item container sx={header}>
                                        <Typography variant='h3'sx={{                      
                                        'MozFontFeatureSettings': '"ss05"',
                                        'WebkitFontFeatureSettings':'"ss05"',
                                        fontFeatureSettings:'"ss05"'}}
                                        > 
                                        Vision
                                        </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* <section > */}
                                        <p>Two hundred and fifty million million rods in your eyes are sensitive to motion. Your 10 million cones are more sensitive to fine details. The centre of the retina, the fovea, contains the majority of your cones and so you see clearest in the centre of your vision. When reading, your eyes do not move smoothly through text one letter at a time. They jump through movements called saccades. We center our vision on a few letters, identify them simultaneously and then jump ahead, skimming those in between. Younger readers with clearer eyesight jump in shorter saccades, reading more letters with more clarity. Older readers and those with poorer sight jump further, missing more details, and skimming the letters in between. People with central vision loss sometimes read through other areas of the visual field. </p>
                                        <p>The eyes deliver electrical signals to the brain for identification and interpretation. We read through matching incoming visual signals to mental images, expectations of letter shapes, sub-letter shapes, and word shapes, simultaneously, with a priority on letter shapes. Expectations are informed by experience, practice and familiarity, and so we read familiar fonts faster and with better comprehension than unfamiliar fonts. (Daniel Fiset wrote that “A 45-year-old person who has read only 1 hour a day will have identified more than 1 billion letters.”) That said, familiarity can be learned, as has been shown by Sofie Beier, Kevin Larson, and others.</p>
                                        <p>I use the term ‘low vision’ to describe a broad range of vision loss rated below 20/40 acuity from a variety of sources including refractive errors, cataracts, glaucoma, diabetic retinopathy and others. Others use ‘low vision’ to describe more advanced symptoms. Low vision varies in both cause and degree of impact. One tool to manage legibility for low vision is simply magnifying text. Magnification is incredibly useful. It can disrupt the flow, layout and structure of text.</p>
                                        
                                    </Typography>
                                </Grid>
                            </Box>
                                <Box id="FontDesign" ref={fontDesignRef} tabIndex={0} sx={focusStyle} mt="2rem">
                                <Grid item container sx={header}>
                                        <Typography variant='h3'sx={{                      
                                        'MozFontFeatureSettings': '"ss05"',
                                        'WebkitFontFeatureSettings':'"ss05"',
                                        fontFeatureSettings:'"ss05"'}}
                                        > 
                                        Font Design
                                        </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* <section > */}
                                        <p>Font design for low vision balances the need for familiarity with clarity and differentiation to improve letter identification. Often this means exaggerating the legibility techniques used in fonts for general use.</p>
                                        <p>Careful balance between positive and negative space provides clarity. Optical, therefore, doesn’t offer super bold or light weights. Light weights can blur into the background, and the diminished negative space of ultra-bold weights obscures letters’ essential skeletons. Open shapes help prevent letters from blurring in on each other. Wide spacing helps minimize the effect of crowding, an effect that describes how tightly spaced letters can obscure the legibility of their neighbours, put very simply. Enlarged punctuation helps to mitigate the loss of these essential fine details. Differentiation between similar letter shapes improves letter identification. Most fonts for low vision are sans serifs (lacking the fine details seen on terminals of strokes in fonts like Times New Roman.) Sans serifs and slab serifs (think typewriter style fonts) appear to be more legible to people with low vision than serif fonts because they don’t clutter letters’ essential structures as much. These strategies come from studies published by researchers like Manfred MacKeben, Aries Arditi, Sofie Beier, Kevin Larson and others. </p>
                                        <p>Increasing clarity and differentiation can accentuate unconventional letter shapes and disrupt conventional letter spacing. For example, capital ‘I’s, lowercase ‘l’s and similar letters are often confused when they share the same vertical bar construction. So, we add differentiating characteristics: horizontal bars to an “I”, a tail to an ‘l’, a slab serif bar to the top of an ‘i’. Similar approaches exaggerate the differences between ‘O’s, ‘0’s, and ‘Q’s. Optical allows people to accentuate or minimize these features and find their own balance between exaggerated legibility and conventional familiar letter shapes. Consistent use of the extension across the Internet aims to reinforce legibility through familiarity. Beier and Larson’s work shows that practise improves familiarity, and so we encourage people to set up Optical, spend some time reading it, then return to it, make adjustments and repeat. </p>
                                        <p>Initially, the project focused on differentiation as a stand-alone adjustment. However, conversations with Sofie Beier on recent research convinced us that using adjustable width may be more useful. Width increases the negative space around letters, clarifying letter shapes. Width also often accomplishes differentiation by exaggerating the unique features in commonly misidentified narrow characters: ‘I’, ‘l’, ‘i’. So we added an adjustable width axis. Feedback from people with low vision early on highlighted the need for stronger boldness controls beyond what is currently commonly available. To our knowledge, there are no assistive tools that support fine-tuned variable font boldness (weight) control. </p>
                                        <p>The resulting font family is a sans serif with adjustable weights, widths, spacing and punctuation, with letter spacing primarily handled by the browser extension. Currently, adjustable punctuation size is set up only for commas and periods but we’ll explore other uses. Stylistically, we began with a nod to the earliest sans serifs, their details providing more differentiation than geometric fonts’ consistency and more familiarity than the slightly less common humanist style. Working to open shapes, our type designer Mirko found a way to retain the feel of grotesque sans serifs while using the openness of humanist fonts. He added a few pixels to the interiors of terminals, subtly reminiscent of the flick of the pen. It created a curve that accomplishes both. It also nods to a bit of research from Daniel Fiset suggesting that the ends, terminals, of lines may help to reinforce letter differentiation. Stylistically Optical is quite neutral but just slightly more personable than fonts like Arial.</p>
                                        
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id="BrowserExtWeb" ref={browserExtWebRef} sx={focusStyle} tabIndex={0} mt="2rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'sx={{'MozFontFeatureSettings': '"ss05"',
                                        'WebkitFontFeatureSettings':'"ss05"',
                                        fontFeatureSettings:'"ss05"'}}
                                        >Browser Extension & Website</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        <p>On the web and extension side of the project, I initially imagined a 20 questions approach: presented with two variations of a letter, choose the version which works better for you, repeat to verify, rule out less useful letter shapes, repeat and hone in on the most useful legibility characteristics. We moved away from this approach for several reasons. First, It’d be complicated to use, complicated to iterate, and complicated to create, weakening the strength of the project. Diving deeper into research, I read Sofie Beier’s Ph.D. Her work showed that first impressions are often a poor indicator of legibility. It’d be complicated and time-consuming to continue refining the font. First impressions are complex, especially this balance between unconventional exaggerated legibility techniques and the benefits of familiarity. I did speak to an eye doctor who suggested there may be a way to make a more complex vision/ legibility assessment work, but for our purposes, we changed gears. Liiift Studio’s UX expertise was a great help. </p>
                                        <p>The approach we landed on was significantly less guided.  Simple slider bars tailor the font family to each user’s needs. Settings are saved in the extension and can be returned to and adjusted. In 2004 Aries Arditi, a psychologist and neuroscientist with a Ph.D. and a postdoc from NYU created a font customization system with support from the National Institutes of Health. His tool used slider bars to control various legibility characteristics of letters for people with low vision. He tested it with 40 people, many with maculopathy, cataracts, or glaucoma and vision between 20/60 and 20/200 acuity. People created a huge range of letter styles. Arditi wasn’t able to show that his letters were more legible than established fonts, possibly because they were notably unconventional in construction. He referred to his software as spartan, didn’t release it to the public, and suggested that type designers may be able to create a more complex version of the tool. His central finding that varied letters worked for varied vision, was strong.</p>
                                        <p>Feedback early on in the project highlighted the importance of a strong dark mode for the extension and website. Light bleed in light modes can be overbearing for some, and so we spent some time with this. There are more improvements we’d like to make on this front, including possible adjustments to the font for dark mode.</p>
                                         </Typography>
                                </Grid>
                            </Box>
                            <Box id='NextSteps' ref={nextStepstRef} sx={focusStyle} tabIndex={0} mt="2rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'sx={{'MozFontFeatureSettings': '"ss05"',
                                        'WebkitFontFeatureSettings':'"ss05"',
                                        fontFeatureSettings:'"ss05"'}}
                                        >Next Steps</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* </section> */}
                                    
                                        {/* <section id='Contact' ref={contactRef}> */}
                                        <p>Currently Optical only works in the Chrome browser on desktops. We’d like to make the tool work offline and on other devices. Optical was built on literature review and feedback. Feedback sessions ranged from expert interviews to watching people with low vision use the tool through video calls and screen sharing. We’d like to conduct rigorous scientific testing. We haven’t yet. Optical doesn’t include an italic or oblique. Some research suggests that italics are poorly legible for low vision. This complexity of the project required that we spend time elsewhere. It's hard to imagine language, the internet, without italics. Optical needs an italic. Optical includes some accents and diacritics for latin based languages. The site and extension are available only in English. Improved language support is something needed in all design, Optical included. The most common letters and letter pairs in different languages play an interesting role in legibility and familiarity and deserve attention. </p>
                                        <p>One finding from research and feedback was the viability of software as a career for some with low vision. The prevalence of work from home in the industry means people don’t have to commute and can work from their own machines, set up with their own assistive tools. We’d like to expand Optical to work better for coding. This means a monospace, and possibly further refinement for dark mode to account for light bleed, hallation.</p>
                                        <p>As this phase of development comes to an end, we’re currently looking for additional partners. Please reach out if you’d like to get involved.</p>
                                        {/* </section> */}
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id='Conclusions' ref={conclusionstRef} sx={focusStyle} tabIndex={0} mt="2rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'sx={{'MozFontFeatureSettings': '"ss05"',
                                        'WebkitFontFeatureSettings':'"ss05"',
                                        fontFeatureSettings:'"ss05"'}}
                                        >Conclusions</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* </section> */}
                                    
                                        {/* <section id='Contact' ref={contactRef}> */}
                                        <p>Optical’s goal is to improve legibility through customization. We’ve built Optical on literature review and feedback and tried to make conservative decisions along the way. Vision, accessibility, type and web development are all independently complex subjects. Research is ongoing. Optical is not perfect. It will not work for everyone. It’s not a be all end all solution. We’re not trying to replace magnification or glasses. We’re trying to complement other solutions. Optical cannot address every aspect of vision. We think it’s a step in useful directions. </p>
                                        {/* </section> */}
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id='Team' ref={teamRef} sx={focusStyle} tabIndex={0} mt="2rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'sx={{'MozFontFeatureSettings': '"ss05"',
                                        'WebkitFontFeatureSettings':'"ss05"',
                                        fontFeatureSettings:'"ss05"'}}
                                        >Team</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* </section> */}
                                    
                                        {/* <section id='Contact' ref={contactRef}> */}
                                        <p>I want to give a huge thank you to everyone in the low vision and font/ design communities who lent feedback and advice. This thing wouldn’t exist without you.</p>
                                        <p>I also want to specifically thank Caylee Raber, Nadia Beyzaei, Justina Loh, Karen Martin, Kate Armstrong, Lisa Boulton, Quinn Keaveney, Mirko Velimirovic, Colby May and George Macrae. </p>
                                        <p>Finally, this project was created on the unceded land of the Coast Salish peoples, including the Musqueam, Squamish and Tsleil-Waututh nations. </p>
                                        {/* </section> */}
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <FooterLayout darkMode={darkMode}/>
                {children}
            </ThemeProvider>
        </>
    )
}