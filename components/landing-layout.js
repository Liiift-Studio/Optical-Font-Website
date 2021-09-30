import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import {Typography ,ToggleButton,Button, Grid, Paper, colors, Box, ToggleButtonGroup} from '@mui/material'
import styles from '../styles/layout.module.css'

import dials from '../public/images/dials.png'

export default function LandingLayout({ children }) {
  return (
    <>

    {/* DESKTOP */}
    <Grid container display={{xs:'none', md:'block'}}>
      <Grid container spacing={10} >
        <Grid container item md={6} alignItems = "flex-start">
          <Grid item className={styles.landing_container}>
            <Grid item >
              <Typography variant = 'h1'>
                Varied fonts for <br /> varied vision. 
              </Typography> 
              </Grid>
            <Button
              variant ="string"
              sx={{
                  // padding:1,
                  // paddingRight:2,
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
            {/* <Grid item className={styles.subtext}>
              <Typography variant="h5">
                Install the extension and {'\n'} customize your fonts
              </Typography>
            </Grid>         */}
          </Grid>
        </Grid>

        <Grid container item md={6}  >
          <Grid item  className={styles.dials_container}>
            <Image src={dials} alt=""/>
          </Grid>
        </Grid>
    </Grid>
  </Grid>

  {/* MOBILE */}

  <Grid container display={{xs:'block', md:'none'}}  >
      <Grid container item sx={{display:"flex", alignItems: 'center'}}>
      <Grid container item xs={12}  >
        <Typography variant = 'h1'
          sx={{
            px:"20%",
            fontSize:30,
          }}>
            Varied fonts for <br /> varied vision. 
        </Typography> 
      </Grid>

      <Grid container item xs={12} justifyContent="center" px={5} >
        <Grid item  className={styles.dials_container}>
            <Image src={dials} alt=""/>
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