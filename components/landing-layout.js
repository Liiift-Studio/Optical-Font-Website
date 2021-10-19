import Image from 'next/image'
import {Typography ,Button, Grid, Box } from '@mui/material'
import styles from '../styles/layout.module.css'
import dials from '../public/images/opt_light.png'
import { shadows } from '@mui/system';
import { imgSource, source } from '../styles/utils.module.constants';
import { useEffect } from 'react';



export default function LandingLayout({children,imgSrc}) {

  // const [imgSource,setSource] = useState(false);

  return (
    <>

    {/* DESKTOP */}
    <Grid container display={{xs:'none', md:'block'}}>
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
                  <Typography variant = "h3" sx={{pt:.65, alignContent:'center'}}>
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

  <Grid container display={{xs:'block', md:'none'}} >
      <Grid container item  className={styles.mobile_landing_container}>
        <Grid container item xs={12} 
          sx={{
            pt:4,
            // pb:2,
            justifyContent:'center',

          }} >
            <Typography variant = 'h1'
              sx={{
                // fontSize:50,
                textAlign: "center", 
              }}>
                Varied fonts for <br /> varied vision. 
            </Typography> 
        </Grid>

        <Grid container item xs={12} justifyContent="center"  >
          <Grid item py={5} px={10}>
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
                    pt:1.5,
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