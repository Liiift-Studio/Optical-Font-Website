import styles from '../styles/layout.module.css'
import React, { useEffect, useState } from "react"
import Image from 'next/image'
import Link from "next/link";

import {ToggleButton,ToggleButtonGroup, Icon,IconButton, Grid, Box, CssBaseline, Button, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material/'
import { Waypoint } from 'react-waypoint';
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'
import logo from '../public/images/logo.svg'
import logoDark from '../public/images/logoDark.svg'
import {ReactComponent as Logo} from '../public/images/moon.svg'
import lightIcon from '../public/images/sun.svg'
import darkIcon from '../public/images/moon.svg'

import imgLight from '../public/images/Optical_3D.png'
import imgDark from '../public/images/Optical_3D.png'

import HeaderLayout from '../components/header-layout'
import LandingLayout from '/components/landing-layout'
import MenusLayout from '../components/menu-layout'
import FooterLayout from '../components/footer-layout'
import {dm_icon, header_container,logo_container, body_container, circle, copy, copy_container, header, img_container_ext } from "../styles/layout.styles";
import {About,FLV,UG,P,A,PR, FlvCopy, UgCopy, ProjectCopy, loe, LevelOfEnhancementCopy, c, ControlsCopy, m, MenuCopy} from '../styles/utils.module.constants'
import { flv,ug,p,a,pr,flvCopy,ugCopy,pCopy,aCopy,prCopy } from "../styles/utils.module.constants";

import { useRouter } from 'next/router'

export default function Home({ children}) {
  // lightSwitch = lightSwitch || true;
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(()=>{
    if(router.query.darkMode ==="false") return false
    else return true
  });


  const [toggleValue, setToggle]= useState(FLV);
  const SECTION_SPACING = '2rem';
  const SECTION_SPACING_BOTTOM = '0.5rem';

  function chooseTheme(){
      var x =(darkMode ? responsiveFontSizes(darkTheme) : responsiveFontSizes(lightTheme));
      return x;
  }
  const [alignment, setAlignment] = React.useState('web');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    return(
        <>
            <ThemeProvider theme={chooseTheme()}>
              <CssBaseline/>
              <Grid container sx={header_container}>
                <Grid item container direction ="row" >
                  <Grid container item  xs={8} sm={6} md={6} justifyContent={{xs:'center', sm:'center', md:'flex-start'}}>
                    <Grid container item xs={8} md={4} justifyContent={{xs:'center', sm:'center', md:'flex-start'}} >
                        <IconButton href="/"
                        sx={logo_container} >
                            <Image  src={darkMode? logoDark:logo}/>
                        </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container item  display={'flex'} xs={4} sm={4} md={5} justifyContent="flex-end"  alignItems="center" >
                    <Link href={{
                    pathname:"/",
                    query:{darkMode:darkMode},
                    }}>
                      <Button variant="outlined" >
                          <Typography variant='h2' sx=
                              {{position:'relative',
                              top: '.1rem',
                              px:2}}
                              alt="About">
                              home</Typography>
                      </Button>
                      </Link>
                  </Grid>
                  {/* <Grid container item  display={{xs:'none', sm:'flex'}} sm={2} md={1} justifyContent="flex-end" alignItems="center">
                      {( lightSwitch ) ? (
                      <IconButton
                          onClick={changeDarkMode}
                          >
                              {(darkMode ? <Image src={lightIcon} alt="Light Mode"
                                              sx={dm_icon}/> :
                                            <Image src={darkIcon} alt="Dark Mode"
                                            sx={dm_icon}
                                            />)}
                      </IconButton>
                      ) : (<></>)}
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid container item sm={12} sx={body_container}>
                <Grid item container sm={4} className={styles.menuButtons_container} display={{xs:'none', md:'flex'}}>
                  <ToggleButtonGroup
                  orientation="vertical"
                  value={alignment}
                  onChange={handleChange}
                  exclusive>
                    <ToggleButton href="#intro" value='intro'  disableRipple disableFocusRipple className={styles.a} component="a"> 
                      {/* {toggleValue === PRIVACY ?  */}
                      <Box className={styles.circle} sx={circle}/>
                          <ListItemText inset={circle}>
                          {/* inset={toggleValue !== PRIVACY} */}
                              <Typography variant ="h3" sx={{textTransform:'uppercase'}}>
                                INTRO
                              </Typography>
                          </ListItemText>
                      </ToggleButton>
                        <ToggleButton href="#foundations" value='foundations'  disableRipple disableFocusRipple className={styles.a} component="a"
                        // onClick={()=>{setToggle(FLV)}}
                        >
                            {/* {toggleValue === PRIVACY ?  */}
                            {/* <ListItemIcon >
                                <Box sx={circle}/>
                            </ListItemIcon> */}
                            <Box className={styles.circle} sx={circle}/>
                            <ListItemText inset={circle}>
                            {/* inset={toggleValue !== PRIVACY} */}
                                <Typography variant ="h3" sx={{textTransform:'uppercase'}}>
                                  FOUNDATIONS
                                </Typography>
                            </ListItemText>
                        </ToggleButton>

                        <ToggleButton href="#feedback" value='feedback'  disableRipple disableFocusRipple className={styles.a} component="a"
                        // onClick={()=>{setToggle(FLV)}}
                        >
                            {/* {toggleValue === PRIVACY ?  */}
                            {/* <ListItemIcon >
                                <Box sx={circle}/>
                            </ListItemIcon> */}
                            <Box className={styles.circle} sx={circle}/>
                            <ListItemText inset={circle}>
                            {/* inset={toggleValue !== PRIVACY} */}
                                <Typography variant ="h3" sx={{textTransform:'uppercase'}}>
                                  FEEDBACK
                                </Typography>
                            </ListItemText>
                        </ToggleButton>

                        <ToggleButton href="#refinement" value='refinement'  disableRipple disableFocusRipple className={styles.a} component="a"
                        // onClick={()=>{setToggle(FLV)}}
                        >
                            {/* {toggleValue === PRIVACY ?  */}
                            {/* <ListItemIcon >
                                <Box sx={circle}/>
                            </ListItemIcon> */}
                            <Box className={styles.circle} sx={circle}/>
                            <ListItemText inset={circle}>
                            {/* inset={toggleValue !== PRIVACY} */}
                                <Typography variant ="h3" sx={{textTransform:'uppercase'}}>
                                  REFINEMENT
                                </Typography>
                            </ListItemText>
                        </ToggleButton>
                      </ToggleButtonGroup>
                  </Grid>
                
          {/* Copy */}
                <Grid item container md={8} alignItems="center"   
                  sx={copy_container}>
                  <Grid item container pt={2.3}>
                      <Waypoint 
                          topOffset="35%"
                          bottomOffset="55%"
                          // onEnter={()=>setToggle(PRIVACY)}
                          >
                        <section id="privacy">
                          <Grid item container sx={{mb:SECTION_SPACING_BOTTOM}}>
                                <Grid item container sx={header}>
                                    <Typography variant ='h2'sx={{textTransform:'uppercase'}}> 
                                      Privacy Policy
                                    </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      Last Revised: January 12, 2022 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      By using or accessing the Service, regardless of how accessed, you signify your agreement to be legally bound by this Privacy Policy (the “Policy”). If you do not agree to the Policy, you should not access or otherwise use the Service, as defined below. The Policy applies to all visitors and others who access or use the Service (“users”). 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      This Privacy Policy explains how Optical (collectively, “Optical”, “we”, “us” or “our”) collects, uses and discloses personal information that you provide to us through the website located at [opticalfont.com] together with the mobile version of the website (collectively, the “Website”). 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      Through the Website, Optical aims to improve the legibility and accessibility of the internet., (together with the Website, the “Service”). 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We reserve the right, at our discretion, to amend this Privacy Policy at any time without prior individual notice. The date on which this Privacy Policy was last amended is shown at the top of this policy. You are responsible for verifying whether any amendments have been made and therefore we ask that you periodically check the date and review this Privacy Policy for the latest information on our privacy practices. If you object to any amendments, please stop using the Service, otherwise, your continued use will be taken as your consent to such amendments. 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      1. INFORMATION WE DO NOT COLLECT
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We do not collect, store, or share personal health information.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We collect Device Information using the following technologies:
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      2. INFORMATION WE COLLECT
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We collect the information you provide to us when you contact us with feedback or troubleshooting inquiries.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      3. INFORMATION COLLECTED WHEN YOU USE OUR SERVICE
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      Technical and Usage Information
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      When you visit the Website, web servers automatically collect certain information about your visit to a website, including your Internet Protocol (“IP”) address. IP addresses are unique numbers assigned by Internet Service Providers (“ISP”) to all devices used to access the Internet. Web servers automatically log the IP addresses of visitors to their sites. The IP address, on its own, may not identify you but can do so when combined with other data automatically collected when you request a web page, such as the name of the page you visited and the date and time of your visit.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      Google Analytics
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      This Website uses Google Analytics, a web analytics tool provided by Google, Inc. (“Google”) that helps us understand how visitors engage with our website.  Google Analytics uses cookies and IP addresses. The information generated by cookies about the use of our website (including your IP address) will be transmitted and stored by Google on servers in the United States.  Google will use this information for the purpose of evaluating how visitors use our website, compiling reports on website activity for us and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf.  Google Analytics collects information anonymously and will not associate your IP address with any other data held by Google.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      To opt out of Google Analytics, you can install Google Analytics Opt out Browser Add-On. You can also refuse the use of cookies by selecting the appropriate settings on your browser – however, if you do so, you may not be able to use the full functionality of this website.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      For more information related to Google Analytics, click here: <a href='http://www.google.com/intl/en/analytics/privacyoverview.html'>http://www.google.com/intl/en/analytics/privacyoverview.html</a>
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                    For information about and to install Google Analytics Opt out Browser Add-on, click here: <a href='http://tools.google.com/dlpage/gaoptout?hl=en'>http://tools.google.com/dlpage/gaoptout?hl=en</a>
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      4. PURPOSES FOR COLLECTION AND USE OF YOUR INFORMATION
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We may collect and use personal information for the purposes identified at the time of collection, as otherwise permitted or required by applicable law, or for any of the following purposes:
                                      <ul>
                                        <li>To establish, maintain and manage our relationship with you so that we can provide you with a customized font and/or access to our Service;</li>
                                        <li>To comply with our legal obligations and regulatory requirements;</li> 
                                        <li>To develop and manage our business and operations;</li>
                                        <li>To respond to your questions and concerns;</li>
                                        <li>To detect and protect us and you from error, negligence, breach of contract, fraud, theft or other illegal activity, and which may include sharing personal information with our insurers;</li>
                                        <li>To create aggregate information for analytics purposes, including to analyze the success, effectiveness, usability or popularity of the product or Service;</li>
                                        <li>For internal, external and regulatory audit purposes; and</li>
                                        <li>To correct technical problems and malfunctions related to the Service.</li>
                                      </ul>
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      5. HOW YOUR INFORMATION IS DISCLOSED OR SHARED
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We may disclose personal information in the following circumstances: 
                                      <ul>
                                        <li>As described in this Privacy Policy;</li>
                                        <li>To investigate suspected fraud, harassment or other violations of any law, rule or regulation, or the policies for the Service;</li> 
                                        <li>To meet or comply with any applicable law, regulation, legal process, audit or enforceable request from a government agency or regulatory body;</li>
                                        <li>In connection with a bankruptcy proceeding or the sale, merger or change of control of Optical;</li>
                                        <li>In the event of a merger, acquisition sale or reorganization, or the potential thereof, we may disclose information about you to the extent the personal information is necessary to carry on the business or activity that was the object of the transaction. In the event of a completed transaction, notice will be given to affected users.</li>
                                      </ul>
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We do not sell client lists or personal information to others. 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We may retain third-party service providers, such as cloud storage services, to help us provide the Service to you. We may need to transfer your personal information to these third-party service providers. We use contractual means to ensure these providers provide safeguards that are comparable to our own while your personal information is in their possession. These service providers make no independent use of your personal information. 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We may engage third-party external servers as well as other external services, including cloud services and cloud compatible servers. 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We may use third-party service providers or cloud hosting located outside Canada. By using the Service, you understand your information may be transferred outside the jurisdiction in which you live. You understand that if your information is processed in a foreign country, it may be subject to foreign laws and accessible to law enforcement and national security authorities within that jurisdiction.  
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      6. RETENTION AND DESTRUCTION OF PERSONAL INFORMATION
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We will store personal information collected via the Service only as long as is necessary for the purposes for which the information was collected. Thereafter, we will keep your information for a reasonable time in accordance with our standard procedures to comply with our legal obligations, to resolve disputes, prevent fraud and abuse and to enforce our agreements, or as necessary for archival/audit purposes. 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      Even if we delete some or all of your personal information, we may continue to create, retain or use aggregate or anonymous data. 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      7. SAFEGUARDING PERSONAL INFORMATION 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      We employ reasonable physical, electronic and procedural safeguards that are designed to protect personal information under our control against unauthorized access and use. 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      8. KEEPING INFORMATION ACCURATE / ACCESS AND CORRECTION 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      It is important that your personal information held by us is accurate and complete so that we can provide you with good service. 
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      You have the right to access and correct the information we have about you after we have received your written request and authenticated your identity. Subject to legal restrictions or specific rights of refusal, we will inform you of the existence, use and disclosure of personal information relating to you and give you access to that information.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      9. CHILDREN'S PRIVACY
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      You must be at least 18 years of age to use the Service. We do not knowingly collect or maintain any Personal Information from children under the age of 18. In addition, no part of this Service is designed with the purpose of attracting any person under age 18.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      10. PRIVACY CONCERNS
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      If you have any questions and concerns relating to our handling of your personal information, please direct them to the Project Lead of Optical at the address listed below. We may need to ask you for personal information to verify your identity.
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                    Optical, Liiift Studio<br></br>
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                    520 E 1st Ave, Vancouver, BC, V5T 1E1, Canada<br></br>
                                    E-mail: <a href='mailto:tyler.w.hawkins@gmail.com'>tyler.w.hawkins@gmail.com</a><br></br>
                                    </Typography>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                      If, having shared your concerns with us, you are not satisfied with our answers, you may file a complaint with a privacy regulator, such as the Office of the Privacy Commissioner of Canada by mail at 30 Victoria Street Gatineau, Quebec K1A 1H3 or by calling 1 800 282 1376.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </section>
                    </Waypoint>
                  </Grid>
                <Grid item container pt={2.3}>
                      <Waypoint 
                          id='terms'
                          topOffset="35%"
                          bottomOffset="55%"
                          // onEnter={()=>setToggle(TERMS)}
                          >
                        <section id="terms">
                            <Grid item container sx={{mb:SECTION_SPACING,}}>
                                <Grid item container sx={header}>
                                    <Typography variant ='h3'sx={{textTransform:'uppercase'}}> 
                                     Terms and Conditions
                                    </Typography>
                                </Grid>
                                <Grid item container sx={copy}>
                                    <Typography variant='body1' paragraph={true} display ="block">
                                    <p>Last updated: October 28, 2021</p>
                                      <p>
                                        Please read these terms and conditions carefully before using Our
                                        Service.
                                      </p>
                                      <h1>Interpretation and Definitions</h1>
                                      <h2>Interpretation</h2>
                                      <p>
                                        The words of which the initial letter is capitalized have meanings
                                        defined under the following conditions. The following definitions
                                        shall have the same meaning regardless of whether they appear in
                                        singular or in plural.
                                      </p>
                                      <h2>Definitions</h2>
                                      <p>For the purposes of these Terms and Conditions:</p>
                                      <ul>
                                        <li>
                                          <p>
                                            <strong>Affiliate</strong> means an entity that controls, is
                                            controlled by or is under common control with a party, where
                                            &quot;control&quot; means ownership of 50% or more of the shares,
                                            equity interest or other securities entitled to vote for election
                                            of directors or other managing authority.
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <strong>Country</strong> refers to: British Columbia, Canada
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <strong>Company</strong> (referred to as either &quot;the
                                            Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
                                            in this Agreement) refers to Optical Font.
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <strong>Device</strong> means any device that can access the
                                            Service such as a computer, a cellphone or a digital tablet.
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <strong>Service</strong> refers to the Website.
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <strong>Terms and Conditions</strong> (also referred as
                                            &quot;Terms&quot;) mean these Terms and Conditions that form the
                                            entire agreement between You and the Company regarding the use of
                                            the Service. This Terms and Conditions agreement has been created
                                            with the help of the{" "}
                                            <a
                                              href="https://www.termsfeed.com/terms-conditions-generator/"
                                              target="_blank"
                                            >
                                              Terms and Conditions Generator
                                            </a>
                                            .
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <strong>Third-party Social Media Service</strong> means any
                                            services or content (including data, information, products or
                                            services) provided by a third-party that may be displayed,
                                            included or made available by the Service.
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <strong>Website</strong> refers to Optical Font, accessible from{" "}
                                            <a
                                              href="https://opticalfont.com/"
                                              rel="external nofollow noopener"
                                              target="_blank"
                                            >
                                              https://opticalfont.com/
                                            </a>
                                          </p>
                                        </li>
                                        <li>
                                          <p>
                                            <strong>You</strong> means the individual accessing or using the
                                            Service, or the company, or other legal entity on behalf of which
                                            such individual is accessing or using the Service, as applicable.
                                          </p>
                                        </li>
                                      </ul>
                                      <h1>Acknowledgment</h1>
                                      <p>
                                        These are the Terms and Conditions governing the use of this Service
                                        and the agreement that operates between You and the Company. These
                                        Terms and Conditions set out the rights and obligations of all users
                                        regarding the use of the Service.
                                      </p>
                                      <p>
                                        Your access to and use of the Service is conditioned on Your
                                        acceptance of and compliance with these Terms and Conditions. These
                                        Terms and Conditions apply to all visitors, users and others who
                                        access or use the Service.
                                      </p>
                                      <p>
                                        By accessing or using the Service You agree to be bound by these Terms
                                        and Conditions. If You disagree with any part of these Terms and
                                        Conditions then You may not access the Service.
                                      </p>
                                      <p>
                                        You represent that you are over the age of 18. The Company does not
                                        permit those under 18 to use the Service.
                                      </p>
                                      <p>
                                        Your access to and use of the Service is also conditioned on Your
                                        acceptance of and compliance with the Privacy Policy of the Company.
                                        Our Privacy Policy describes Our policies and procedures on the
                                        collection, use and disclosure of Your personal information when You
                                        use the Application or the Website and tells You about Your privacy
                                        rights and how the law protects You. Please read Our Privacy Policy
                                        carefully before using Our Service.
                                      </p>
                                      <h1>Links to Other Websites</h1>
                                      <p>
                                        Our Service may contain links to third-party web sites or services
                                        that are not owned or controlled by the Company.
                                      </p>
                                      <p>
                                        The Company has no control over, and assumes no responsibility for,
                                        the content, privacy policies, or practices of any third party web
                                        sites or services. You further acknowledge and agree that the Company
                                        shall not be responsible or liable, directly or indirectly, for any
                                        damage or loss caused or alleged to be caused by or in connection with
                                        the use of or reliance on any such content, goods or services
                                        available on or through any such web sites or services.
                                      </p>
                                      <p>
                                        We strongly advise You to read the terms and conditions and privacy
                                        policies of any third-party web sites or services that You visit.
                                      </p>
                                      <h1>Termination</h1>
                                      <p>
                                        We may terminate or suspend Your access immediately, without prior
                                        notice or liability, for any reason whatsoever, including without
                                        limitation if You breach these Terms and Conditions.
                                      </p>
                                      <p>
                                        Upon termination, Your right to use the Service will cease
                                        immediately.
                                      </p>
                                      <h1>Limitation of Liability</h1>
                                      <p>
                                        Notwithstanding any damages that You might incur, the entire liability
                                        of the Company and any of its suppliers under any provision of this
                                        Terms and Your exclusive remedy for all of the foregoing shall be
                                        limited to the amount actually paid by You through the Service or 100
                                        USD if You haven't purchased anything through the Service.
                                      </p>
                                      <p>
                                        To the maximum extent permitted by applicable law, in no event shall
                                        the Company or its suppliers be liable for any special, incidental,
                                        indirect, or consequential damages whatsoever (including, but not
                                        limited to, damages for loss of profits, loss of data or other
                                        information, for business interruption, for personal injury, loss of
                                        privacy arising out of or in any way related to the use of or
                                        inability to use the Service, third-party software and/or third-party
                                        hardware used with the Service, or otherwise in connection with any
                                        provision of this Terms), even if the Company or any supplier has been
                                        advised of the possibility of such damages and even if the remedy
                                        fails of its essential purpose.
                                      </p>
                                      <p>
                                        Some states do not allow the exclusion of implied warranties or
                                        limitation of liability for incidental or consequential damages, which
                                        means that some of the above limitations may not apply. In these
                                        states, each party's liability will be limited to the greatest extent
                                        permitted by law.
                                      </p>
                                      <h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>
                                      <p>
                                        The Service is provided to You &quot;AS IS&quot; and &quot;AS
                                        AVAILABLE&quot; and with all faults and defects without warranty of
                                        any kind. To the maximum extent permitted under applicable law, the
                                        Company, on its own behalf and on behalf of its Affiliates and its and
                                        their respective licensors and service providers, expressly disclaims
                                        all warranties, whether express, implied, statutory or otherwise, with
                                        respect to the Service, including all implied warranties of
                                        merchantability, fitness for a particular purpose, title and
                                        non-infringement, and warranties that may arise out of course of
                                        dealing, course of performance, usage or trade practice. Without
                                        limitation to the foregoing, the Company provides no warranty or
                                        undertaking, and makes no representation of any kind that the Service
                                        will meet Your requirements, achieve any intended results, be
                                        compatible or work with any other software, applications, systems or
                                        services, operate without interruption, meet any performance or
                                        reliability standards or be error free or that any errors or defects
                                        can or will be corrected.
                                      </p>
                                      <p>
                                        Without limiting the foregoing, neither the Company nor any of the
                                        company's provider makes any representation or warranty of any kind,
                                        express or implied: (i) as to the operation or availability of the
                                        Service, or the information, content, and materials or products
                                        included thereon; (ii) that the Service will be uninterrupted or
                                        error-free; (iii) as to the accuracy, reliability, or currency of any
                                        information or content provided through the Service; or (iv) that the
                                        Service, its servers, the content, or e-mails sent from or on behalf
                                        of the Company are free of viruses, scripts, trojan horses, worms,
                                        malware, timebombs or other harmful components.
                                      </p>
                                      <p>
                                        Some jurisdictions do not allow the exclusion of certain types of
                                        warranties or limitations on applicable statutory rights of a
                                        consumer, so some or all of the above exclusions and limitations may
                                        not apply to You. But in such a case the exclusions and limitations
                                        set forth in this section shall be applied to the greatest extent
                                        enforceable under applicable law.
                                      </p>
                                      <h1>Governing Law</h1>
                                      <p>
                                        The laws of the Country, excluding its conflicts of law rules, shall
                                        govern this Terms and Your use of the Service. Your use of the
                                        Application may also be subject to other local, state, national, or
                                        international laws.
                                      </p>
                                      <h1>Disputes Resolution</h1>
                                      <p>
                                        If You have any concern or dispute about the Service, You agree to
                                        first try to resolve the dispute informally by contacting the Company.
                                      </p>
                                      <h1>For European Union (EU) Users</h1>
                                      <p>
                                        If You are a European Union consumer, you will benefit from any
                                        mandatory provisions of the law of the country in which you are
                                        resident in.
                                      </p>
                                      <h1>United States Legal Compliance</h1>
                                      <p>
                                        You represent and warrant that (i) You are not located in a country
                                        that is subject to the United States government embargo, or that has
                                        been designated by the United States government as a &quot;terrorist
                                        supporting&quot; country, and (ii) You are not listed on any United
                                        States government list of prohibited or restricted parties.
                                      </p>
                                      <h1>Severability and Waiver</h1>
                                      <h2>Severability</h2>
                                      <p>
                                        If any provision of these Terms is held to be unenforceable or
                                        invalid, such provision will be changed and interpreted to accomplish
                                        the objectives of such provision to the greatest extent possible under
                                        applicable law and the remaining provisions will continue in full
                                        force and effect.
                                      </p>
                                      <h2>Waiver</h2>
                                      <p>
                                        Except as provided herein, the failure to exercise a right or to
                                        require performance of an obligation under this Terms shall not effect
                                        a party's ability to exercise such right or require such performance
                                        at any time thereafter nor shall be the waiver of a breach constitute
                                        a waiver of any subsequent breach.
                                      </p>
                                      <h1>Translation Interpretation</h1>
                                      <p>
                                        These Terms and Conditions may have been translated if We have made
                                        them available to You on our Service. You agree that the original
                                        English text shall prevail in the case of a dispute.
                                      </p>
                                      <h1>Changes to These Terms and Conditions</h1>
                                      <p>
                                        We reserve the right, at Our sole discretion, to modify or replace
                                        these Terms at any time. If a revision is material We will make
                                        reasonable efforts to provide at least 30 days' notice prior to any
                                        new terms taking effect. What constitutes a material change will be
                                        determined at Our sole discretion.
                                      </p>
                                      <p>
                                        By continuing to access or use Our Service after those revisions
                                        become effective, You agree to be bound by the revised terms. If You
                                        do not agree to the new terms, in whole or in part, please stop using
                                        the website and the Service.
                                      </p>
                                      <h1>Contact Us</h1>
                                      <p>
                                        If you have any questions about these Terms and Conditions, You can
                                        contact us:
                                      </p>
                                      <ul>
                                        <li>By email: info@opticalfont.com</li>
                                      </ul>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </section>
                    </Waypoint>
                  </Grid>
                </Grid>
              </Grid>
              <FooterLayout darkMode ={darkMode}/>
              {children}
            </ThemeProvider>
        </>
        )
}