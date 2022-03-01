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
import {dm_icon, header_container,logo_container, content_container, circle, copy, copy_container, header, img_container_ext, menu_container, focusStyle, header_button } from "../styles/layout.styles";

import { useRouter } from 'next/router'

import NextLink from 'next/link'

export default function Home({ children}) {
  // lightSwitch= lightSwitch || true;
  const introRef= createRef();
  const foundationsRef= createRef();
  const feedbackRef= createRef();
  const refinementRef= createRef();

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
        , foundationsRef.current.getBoundingClientRect().y
        , feedbackRef.current.getBoundingClientRect().y
        , refinementRef.current.getBoundingClientRect().y
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
                smallest= sections[i];
            }
        }
        if( index=== 0){
            setSection("Intro");

        }
        else if( index=== 1){
            setSection("Foundations");

        }
        else if( index=== 2){
            setSection("Feedback");

        }
        else if( index=== 3){
            setSection("Refinement");

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
                                            home
                                        </Typography>
                                    </Button>
                                </Grid>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item sm={12} sx={content_container}>
                    {/* Menu */}
                    <Grid item container sm={4} display={{xs:'none', md:'flex'}} sx={menu_container}>
                        {/* menu */}
                        <Grid container item onClick={()=>clickSet('Intro')} sx={menuItemStyle('Intro')} >
                            <Link  href="#Intro" color='inherit' underline='none' sx={focusStyle}>
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center',}}>
                                    1. INTRO
                                </Typography>
                            </Link>

                        </Grid>
                        <Grid container item onClick={()=>clickSet('Foundations')} sx={menuItemStyle('Foundations')}>
                            <Link  href="#Foundations" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                2. FOUNDATIONS
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Feedback')} sx={menuItemStyle('Feedback')}>
                            <Link  href="#Feedback" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                3. FEEDBACK
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Refinement')} sx={menuItemStyle('Refinement')}>
                            <Link  href="#Refinement" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                    4. REFINEMENT
                                </Typography>
                            </Link>
                        </Grid> 
                    </Grid>

                    {/* Copy */}
                    <Grid item container md={8} alignItems="top">
                        <Grid item container sx={copy_container} >
                            <Box id="Intro" ref={introRef} tabIndex={0} sx={focusStyle}>
                                <Grid item container sx={header}>
                                    <Typography variant='h3'>1. INTRO</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        <p>Reading is not a trivial task. Two hundred and sixty million rods and cones in your eyes detect light and relay electrical signals to the language centres in your brain for identification and interpretation. Darwin himself struggled to reconcile the complexity of the eye with the random mutations that lead to natural selection. We depend on written language to stay informed, connected and employed, but we haven’t perfected it                        </p>
                                        <p>Our alphabet was created for paper, for the general population. It works really well, but it doesn’t work really well for everyone. Specific adjustments have been found to be useful for people with low vision. Low vision varies in both source and degree. There are no one size fits all solutions in accessibility. Optical allows people to tailor fonts to their needs.                        </p>
                                        <p>With this article I’d like to share a bit of the thought process behind making Optical. I think its important that we’re open about the decisions we’ve made, what led to our final files. I want to note that I’ve written this article both for people with low vision and for other designers interested in accessibility. I’ve done my best to write clearly and avoid technical terminology. I’m not a perfect writer. I should also say the science of sight, web accessibility, and type design are all independently complex subjects that continue to evolve. There are precedents, but in my opinion the specific area hasn’t yet been explored thoroughly. Optical will not solve everything. It won’t work for some people. Its adjustments are sometimes subtle. Optical isn’t the be all end all, but we think its a valuable step in useful directions.                        </p>
                                        <p>The project started as a design school thesis project, an eight month dive into research and a working prototype. Literature suggested ways to clarify letter shapes for low vision. Prior work in  design for accessibility highlighted the need for customization, variation, inclusivity and feedback. The variable font format, Opentype 1.8, introduced an improved mechanism to tailor letters. With a prototype, we found partners and support for continued development, research, and feedback sessions. Tyler Hawkins started and leads the project. Mirko Velimirovic of Abyss Type Company lead the font’s development. Quinn Keaveney and Liiift Studio signed on to run web development. The Disability Alliance of BC helped coordinate feedback sessions. The Health Design Lab at Emily Carr provided guidance and a home for the project. The Shumka Centre supported all of it.                        </p>
                                    </Typography>
                                </Grid>
                                </Box>
                
                                <Box id="Foundations" ref={foundationsRef} tabIndex={0} sx={focusStyle} mt="2rem">
                                <Grid item container sx={header}>
                                        <Typography variant='h3'> 
                                        2. RESEARCH FOUNDATIONS
                                        </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* <section > */}
                                        <p>The 250 million rods in your eyes are sensitive to motion. Your 10 million cones are more sensitive to fine details. The centre of the retina, the fovea, contains the majority of your cones and so you see clearest in the centre of your vision. When reading, your eyes do not move smoothly through text one letter at a time. They jump through movements called saccades. We center our vision on a few letters, identify them simultaneously and then jump ahead, skimming those in between. Younger readers with clearer eyesight jump in shorter saccades, reading more letters with more clarity. Older readers and those with poorer sight jump further, missing more details, and skimming the letters in between. People with impaired central foveal vision read through their parafoveal or peripheral fields.</p>
                                        <p>The eyes deliver electrical signals to the brain for identification and interpretation. We read through matching incoming visual signals to mental images, expectations of letter shapes, sub-letter shapes, and word shapes, simultaneously, with a priority on letter shapes (Kevin Larson). Expectations are informed by experience, practise and familiarity, and so we read familiar fonts faster and with better comprehension than unfamiliar fonts. That said, familiarity can be improved, as has been shown by Beier, Larson, and others.                        </p>
                                        <p>I use the term ‘low vision’ to describe a broad range of vision below 20/40 acuity from a variety of sources including refractive errors, cataracts, glaucoma, diabetic retinopathy and others. Others use ‘low vision’ to describe more advanced symptoms closer to legal blindness. Low vision impacts various parts of the visual field. Currently, people with low vision use a variety of tools to improve font legibility. The most effective is magnification. Magnification is great, but it can disrupt the flow of text. Fonts like FS Me, Inclusive Sans, and Atkinson Hyperlegible all offer valuable approaches to legibility for low vision. Other fonts not designed specifically for low vision offer useful approaches as well (Work Sans). Lexend provides strong customization for new readers.                         </p>
                                        <p>Many type design techniques that improve legibility for a general audience appear to be valuable to those with low vision. Balance between positive and negative space provides clarity. Open shapes help prevent letters from blurring in on each other. Optical therefore uses open apertures. Wide spacing helps minimize the effect of crowding, letters blurring out their neighbours. Subtle differentiations like a tail on a lowercase l, or a two story lowercase a construction appear help minimize confusion between similar letter shapes.                         </p>
                                        <p>Improving legibility for low vision requires balancing the need for familiarity with clarifying and sometimes exagerating letters’ essential identifying characteristics.</p>
                                        <p>Work from Mackebben, Beier, and others has shown benefit to increasing the differentiation between commonly misidentified letters:  I, l, 1, i, and !, O and 0 for example.  Work from .... has highlights the utility of increasing letter spacing.</p>
                                        <p>Spend time on concepts, ideas, research</p>
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id="Feedback" ref={feedbackRef} sx={focusStyle} tabIndex={0} mt="2rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'>3. FEEDBACK</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        <p>FILLER</p>
                                        <p>Last updated: October 28, 2021</p>
                                        <p>Please read these terms and conditions carefully before using Our Service.</p>
                                        <p>Interpretation and Definitions</p>
                                        <p>Interpretation</p>
                                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                                        <p>Definitions</p>
                                        <p>For the purposes of these Terms and Conditions:</p>
                                        <p>Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                                        <p>Country refers to: British Columbia, Canada</p>
                                        <p>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Optical Font.</p>
                                        <p>Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                                        <p>Service refers to the Website.</p>
                                        <p>Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.</p>
                                        <p>Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                                        <p>Website refers to Optical Font, accessible from https://opticalfont.com/</p>
                                        <p>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                                        <p>Acknowledgment</p>
                                        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
                                        <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                                        <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                                        <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                                        <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service</p>
                                        <p>Links to Other Websites</p>
                                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                                        <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                                        <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>
                                        <p>Termination</p>
                                        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                                        <p>Upon termination, Your right to use the Service will cease immediately.</p>
                                        <p>Limitation of Liability</p>
                                        <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                                        <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                                        <p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>
                                        <p>"AS IS" and "AS AVAILABLE" Disclaimer</p>
                                        <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected</p>
                                        <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                                        <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
                                        <p>Governing Law</p>
                                        <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                                        <p>Disputes Resolution</p>
                                        <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                                        <p>For European Union (EU) Users</p>
                                        <p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
                                        <p>United States Legal Compliance</p>
                                        <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                                        <p>Severability and Waiver</p>
                                        <p>Severability</p>
                                        <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                                        <p>Waiver</p>
                                        <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach</p>
                                        <p>Translation Interpretation</p>
                                        <p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
                                        <p>Changes to These Terms and Conditions</p>
                                        <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                                        <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
                                    </Typography>
                                </Grid>
                            </Box>
                            <Box id='Refinement' ref={refinementRef} sx={focusStyle} tabIndex={0} mt="2rem">
                                <Grid item container sx={header}>
                                    <Typography variant='h3'>3. REFINEMENT</Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display="block">
                                        {/* </section> */}
                                    
                                        {/* <section id='Contact' ref={contactRef}> */}
                                        <p>Contact Us</p>
                                        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                                        <p>By email: Tyler@opticalfont.com</p>
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