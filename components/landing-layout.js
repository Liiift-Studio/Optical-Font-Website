import Image from 'next/image'
import {Typography ,Button, Grid, } from '@mui/material'
import styles from '../styles/layout.module.css'
import dials from '../public/images/lightGraphic.png'
import { shadows } from '@mui/system';

export default function LandingLayout({ children }) {
  return (
    <>

    {/* DESKTOP */}
    <Grid container display={{xs:'none', md:'block'}}>
      <Grid container item  className={styles.landing_container}>
        <Grid container item md={7} direction="column" className={styles.landing_left_container}>
            <Grid container item >
                <Typography variant = 'h1'>
                    Varied fonts for <br /> varied vision. 
                  </Typography> 
              </Grid>
            <Grid container item >
              <Button
                variant ="string"
                sx={{
                    my:5,
                    px:4,
                    py:1,
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

        <Grid container item md={5} className={styles.landing_right_container} >
          <Grid item>

            <Image  src={dials} alt=""/>
          </Grid> 
        </Grid>
    </Grid>
  </Grid>

  {/* MOBILE */}

  <Grid container display={{xs:'block', md:'none'}} >
      <Grid container item  sx={{display:"flex", alignItems: 'center'}}>
        <Grid container item xs={12} 
          sx={{
            pt:4,
            // pb:2,
            justifyContent:'center',

          }} >
            <Typography variant = 'h1'
              sx={{
                fontSize:50,
                textAlign: "center", 
              }}>
                Varied fonts for <br /> varied vision. 
            </Typography> 
        </Grid>

        <Grid container item xs={12} justifyContent="center" px={5}  className={styles.dials_container}>
          <Grid item p={10}>
              <Image elevation={2} src={dials} alt=""/>
          </Grid> 
        </Grid>

        <Grid container item xs={12} justifyContent="center" px={5} >
          <Button
                variant ="string"
                sx={{
                    // padding:1,
                    // paddingRight:2,
                    mb:5,
                    px:"20%",
                    py:1,
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