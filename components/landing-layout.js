import Image from 'next/image'
import {Typography ,Button, Grid, Box } from '@mui/material'
import styles from '../styles/layout.module.css'
import dials from '../public/images/opt_light.png'
import { shadows } from '@mui/system';
import { imgSource, source } from '../styles/utils.module.constants';
import { useEffect } from 'react';

import { img_container_mobile, img_container_tablet, landing_container_mobile, landing_container_tablet } from '../styles/layout.styles';



export default function LandingLayout({children,imgSrc}) {

  // const [imgSource,setSource] = useState(false);

  return (
    <>

    {/* DESKTOP */}
    <Grid container display={{xs:'none', md:'flex'}}>
      <Grid container item  className={styles.landing_container}>
        <Grid container item md={7} direction="column" className={styles.landing_left_container}>
            <Grid container item >
                <Typography variant = 'h1'>
                    <nobr>Varied fonts for</nobr> <br /> varied vision. 
                  </Typography> 
              </Grid>
            <Grid container item >
              <Button
                variant ="string"
                sx={{
                    my:2.5,
                    px:4,
                    py:1.25,

                    // py:1,
                    border:4,
                    borderRadius:10,
                }}

                >
                  <Typography variant = "h3" sx={{ alignContent:'center'}}>
                    Install
                  </Typography>
              </Button>
            </Grid>


        </Grid>

        <Grid container item md={5} className={styles.landing_right_container} >
          <Grid item >

            <Image  src={imgSrc}  alt="" />
          </Grid > 
        </Grid>
    </Grid>
  </Grid>

  {/* MOBILE */}

  <Grid container display={{xs:'flex', sm:'none'}} >
      <Grid container item  sx={landing_container_mobile} >
        <Grid container item xs={12} 
          sx={{
            // pt:4,
            pb:8,
            justifyContent:'center',

          }} >
            <Typography variant = 'h1'
              sx={{
                fontSize:'10vw',
                textAlign: "center", 
              }}>
                Varied fonts for <br /> varied vision. 
            </Typography> 
        </Grid>

        <Grid container item xs={12} justifyContent="center" className={styles.landing_right_container} >
          <Grid item container
          sx={img_container_mobile}
          >
              <Image  src={imgSrc} alt=""/>
          </Grid> 
        </Grid>

        <Grid container item xs={12} justifyContent="center" px={5} >
          <Button
                variant ="string"
                sx={{
                    // padding:1,
                    // paddingRight:2,
                    my:5,
                    px:"20%",
                    // pt:1.5,
                    border:3,
                    borderRadius:11,
                }}

                >
                  <Typography variant = "h3">
                    Install
                  </Typography>
              </Button>
          </Grid>
        </Grid>
    </Grid>


      

    {/* TABLET */}

    <Grid container display={{sm:'flex', xs:'none',md:'none'}} >
      <Grid container item  sx={landing_container_tablet} >
        <Grid container item xs={12} 
          sx={{
            // pt:4,
            pb:8,
            justifyContent:'center',

          }} >
            <Typography variant = 'h1'
              sx={{
                fontSize:'200vw',
                textAlign: "center", 
              }}>
                Varied fonts for <br /> varied vision. 
            </Typography> 
        </Grid>

        <Grid container item xs={12} justifyContent="center" className={styles.landing_right_container} >
          <Grid item container
          sx={img_container_tablet}
          >
              <Image  src={imgSrc} alt=""/>
          </Grid> 
        </Grid>

        <Grid container item xs={12} justifyContent="center" px={5} >
          <Button
                variant ="string"
                sx={{
                    // padding:1,
                    // paddingRight:2,
                    my:5,
                    px:"20%",
                    // pt:1.5,
                    border:3,
                    borderRadius:11,
                }}

                >
                  <Typography variant = "h3">
                    Install
                  </Typography>
              </Button>
          </Grid>
        </Grid>
    </Grid>
  </>
  )
}