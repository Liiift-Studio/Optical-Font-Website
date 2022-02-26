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
  // lightSwitch = lightSwitch || true;
  const privacyRef= createRef();
  const dataRef = createRef();
  const termsRef = createRef();
  const contactRef = createRef();

  const router = useRouter();

  const [darkMode, setDarkMode] = useState(()=>{
    if(router.query.darkMode ==="false") return false
    else return true
  });

  function chooseTheme(){
      var x =(darkMode ? responsiveFontSizes(darkTheme) : responsiveFontSizes(lightTheme));
      return x;
  }
  const [section, setSection] = useState(null);
  const clickSet = (section) =>{
      setSection(section);
  }

  const menuItemStyle = (id) =>{
    var circle = false;
    if(id===section){
        circle = true;
    }
    var style = {
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

  const handleScroll = () =>{
    try{
        var sections = [
            privacyRef.current.getBoundingClientRect().y
        , dataRef.current.getBoundingClientRect().y
        , termsRef.current.getBoundingClientRect().y
        , contactRef.current.getBoundingClientRect().y
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
            setSection("Privacy Policy");

        }
        else if( index === 1){
            setSection("Data Collection");

        }
        else if( index === 2){
            setSection("Terms");

        }
        else if( index === 3){
            setSection("Contact");

        }

    }catch(e){}
}
useEffect(()=>{
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
},)
    return(
        <>
            <ThemeProvider theme={chooseTheme()}>
                <CssBaseline/>
                <Grid container sx={header_container}>
                    <Grid item container direction ="row">
                
                        <Grid container item  sm={6}  sx={{justifyContent:'start',}}>
                            <Grid container item xs={'auto'} justifyContent={{xs:'center', sm:'center', md:'flex-start'}} >
                                <IconButton href="/" sx={logo_container} >
                                    <Image  src={darkMode? logoDark:logo}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container item  display={'flex'} sm={6} sx={{
                            display:'flex',
                            justifyContent:{xs:'start',sm:'end'},
                            my:{xs:2,sm:0},
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
                        <Grid container item onClick={()=>clickSet('Privacy Policy')} sx={menuItemStyle('Privacy Policy')} >
                            <Link  href="#Privacy" color='inherit' underline='none' sx={focusStyle}>
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center',}}>
                                    PRIVACY POLICY
                                </Typography>
                            </Link>

                        </Grid>
                        <Grid container item onClick={()=>clickSet('Data Collection')} sx={menuItemStyle('Data Collection')}>
                            <Link  href="#Data" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                DATA COLLECTION
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Terms')} sx={menuItemStyle('Terms')}>
                            <Link  href="#Terms" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                    TERMS&nbsp;& CONDITIONS
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container item onClick={()=>clickSet('Contact')} sx={menuItemStyle('Contact')}>
                            <Link  href="#Contact" color='inherit' underline='none' sx={focusStyle} >
                                <Typography variant="h3" padding='0' sx={{display:'flex',alignItems:'center'}}>
                                    CONTACT
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>

                    {/* Copy */}
                    <Grid item container md={8} alignItems="top">
                        <Grid item container sx={copy_container} >
                            <Box id="Privacy" ref={privacyRef} tabIndex={0} sx={focusStyle}>
                            {/* <section id="Privacy" ref={privacyRef}> */}
                                <Grid item container sx={header}>
                                    <span>
                                    <Typography variant ='h3'>PRIVACY POLICY</Typography>
                                        <Typography variant ='body1'>Last Revised: February 9, 2022</Typography>
                                    </span>
                                </Grid>
                            {/* </section> */}
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' display ="block">
                                    <p>By using or accessing the Service, regardless of how accessed, you signify your agreement to be legally bound by this Privacy Policy (the “Policy”). If you do not agree to the Policy, you should not access or otherwise use the Service, as defined below. The Policy applies to all visitors and others who access or use the Service (“users”).                            <br/><br/></p>
                                    <p>This Privacy Policy explains how Optical (collectively, “Optical”, “we”, “us” or “our”) collects, uses and discloses personal information that you provide to us through the website located at [opticalfont.com] together with the mobile version of the website (collectively, the “Website”).</p>
                                    <p>Through the Website, Optical aims to improve the legibility and accessibility of the internet., (together with the Website, the “Service”).</p>
                                    <p>We reserve the right, at our discretion, to amend this Privacy Policy at any time without prior individual notice. The date on which this Privacy Policy was last amended is shown at the top of this policy. You are responsible for verifying whether any amendments have been made and therefore we ask that you periodically check the date and review this Privacy Policy for the latest information on our privacy practices. If you object to any amendments, please stop using the Service, otherwise, your continued use will be taken as your consent to such amendments.</p>
                                    </Typography>
                                </Grid>
                            </Box>
                

                            <Grid item container sx={copy}>
                                <Typography variant='body1' display ="block">
                                    <Box id="Data" ref={dataRef} tabIndex={0} sx={focusStyle}>
                                        {/* <section > */}
                                        <p>1. INFORMATION WE DO NOT COLLECT</p>
                                        <p>We do not collect, store, or share personal health information.</p>
                                        <p>2. INFORMATION WE COLLECT</p>
                                        <p>We collect the information you provide to us when you contact us with feedback or troubleshooting inquiries.</p>
                                        <p>3. PURPOSES FOR COLLECTION AND USE OF YOUR INFORMATION</p>
                                        <p>To respond to your questions and concerns; To correct technical problems and malfunctions related to the Service.</p>
                                        <p>4. HOW YOUR INFORMATION IS DISCLOSED OR SHARED</p>
                                        <p>We may engage third-party external servers as well as other external services, including cloud services and cloud compatible servers. These services may independently collect information.</p>
                                        <p>We may use third-party service providers or cloud hosting located outside Canada. By using the Service, you understand your information may be transferred outside the jurisdiction in which you live. You understand that if your information is processed in a foreign country, it may be subject to foreign laws and accessible to law enforcement and national security authorities within that jurisdiction.</p>
                                        <p>5. SAFEGUARDING PERSONAL INFORMATION</p>
                                        <p>We employ reasonable physical, electronic and procedural safeguards that are designed to protect personal information under our control against unauthorized access and use.</p>
                                        <p>6. KEEPING INFORMATION ACCURATE / ACCESS AND CORRECTION</p>
                                        <p>It is important that your personal information held by us is accurate and complete so that we can provide you with good service.</p>
                                        <p>You have the right to access and correct the information we have about you after we have received your written request and authenticated your identity. Subject to legal restrictions or specific rights of refusal, we will inform you of the existence, use and disclosure of personal information relating to you and give you access to that information.</p>
                                        <p>7. CHILDREN'S PRIVACY</p>
                                        <p>You must be at least 18 years of age to use the Service. We do not knowingly collect or maintain any Personal Information from children under the age of 18. In addition, no part of this Service is designed with the purpose of attracting any person under age 18.</p>
                                        <p>8. PRIVACY CONCERNS</p>
                                        <p>If you have any questions and concerns relating to our handling of your personal information, please direct them to the Project Lead of Optical at the address listed below. We may need to ask you for personal information to verify your identity.</p>
                                        <p>Optical, Liiift Studio</p>
                                        <p>520 E 1st Ave, Vancouver, BC, V5T 1E1, Canada</p>
                                        <p>E-mail: tyler@access-font.com</p>
                                        <p>If, having shared your concerns with us, you are not satisfied with our answers, you may file a complaint with a privacy regulator, such as the Office of the Privacy Commissioner of Canada by mail at 30 Victoria Street Gatineau, Quebec K1A 1H3 or by calling 1 800 282 1376.</p>
                                        {/* </section> */}
                                    </Box>
                                    <Box id="Terms" ref ={termsRef} sx={focusStyle} tabIndex={0}>
                                        {/* <section id="Terms" ref ={termsRef}> */}
                                        <p>TERMS AND CONDITIONS</p>
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
                                        {/* </section> */}
                                    </Box>
                                    <Box id='Contact' ref={contactRef} sx={focusStyle} tabIndex={0}>
                                        {/* <section id='Contact' ref={contactRef}> */}
                                        <p>Contact Us</p>
                                        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                                        <p>By email: Tyler@opticalfont.com</p>
                                        {/* </section> */}
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <FooterLayout darkMode ={darkMode}/>
                {children}
            </ThemeProvider>
        </>
    )
}