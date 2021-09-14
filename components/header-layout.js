import Head from 'next/head'
import styles from './layout.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container, Row, Col, Div} from "react-bootstrap";
import React, { useEffect, useState } from "react"
import {lightTheme, darkTheme, GlobalStyles} from "../styles/themes.js";
import styled, { ThemeProvider} from "styled-components";

import {getTheme, themeToggler} from '../pages/_app';

export const siteTitle = 'Optical Font Website'
let menu ="V";
let dmText = "dark mode OFF"

const StyledApp= styled.div`
  color: ${props => props.theme.fontColor};
`;


export default function HeaderLayout({lightSwitchOn, children }) {

  const [showMe, setShowMe] = useState(false);
  const [showDM, setShowDM] = useState(true);

  function toggle(){
    if (showMe){
        menu = "^";
    }
    else{
        menu ="v";
    }
    setShowMe(!showMe);      
  }

  function toggleDM(){      

    setShowDM(!showDM);
}

    return (
      <div>
        <ThemeProvider theme = {showDM ? lightTheme : darkTheme}>
          <GlobalStyles></GlobalStyles> 
            <StyledApp>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Optical Font"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <Container fluid className={styles.container}>
          <Row>
            <Col md={5}> left SIDE LOGO </Col>
                  
            <Col md={4}> middle  
                
                <button onClick={toggle}>
                    {menu}
                </button>

                
            </Col>
            <Col md={3}>
              {lightSwitchOn ? (
                <Form>
                  <Form.Check type ="switch"  onClick={toggleDM}/>
                </Form>
                ) :
                (<div></div>)
                }
                    
            </Col>
          </Row>
          <Row>
                <div style = {{display :showMe? "block":"none"}}>
                        <Container>
                            <Row>
                                <Col s="auto">Fonts & Low Vision</Col>
                                <Col s="auto"> Use Guide </Col>
                                <Col s="auto"> Partners</Col>
                                <Col s="auto"> Accessibility</Col>
                                <Col s="auto">Privacy</Col>
                                <Col s="auto"> CO2 </Col>
                            </Row>
                        </Container>
                        
                </div>
            </Row>

        </Container>

        {/* make children dark or light? */}

              
              {children}

          </StyledApp>
        </ThemeProvider>

        </div>
    )
  }