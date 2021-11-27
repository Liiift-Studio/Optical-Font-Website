import Image from 'next/image'
import { Typography, Button, Grid, Box } from '@mui/material'
import styles from '../styles/layout.module.css'
import dials from '../public/images/opt_light.png'
import { shadows } from '@mui/system';
import { imgSource, source } from '../styles/utils.module.constants';
import { useEffect } from 'react';

import { img_container_mobile, img_container_tablet, landing_container_mobile, landing_container_tablet, landing_container, img_container } from '../styles/layout.styles';



export default function LandingLayout({ children, imgSrc }) {

  // const [imgSource,setSource] = useState(false);

  return (
    <>

      {/* DESKTOP */}
      <Grid container display={{ xs: 'none', md: 'flex' }}>
        <Grid container item
          sx={landing_container}
        >
          <Grid container item
            sx={{
              display: "flex",
            }}>
            <Grid container item md={7} className={styles.landing_right_container}>
              <Grid item sx={img_container} justifyContent={'center'}>
                <Image src={imgSrc} alt="" />
              </Grid >
            </Grid>

            <Grid container item md={5}>
              <Grid item>
                <Typography variant='h1'>
                  <nobr>Varied fonts for</nobr> <br /> varied vision.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="string"
                  sx={{
                    my: 3,
                    px: 4,
                    py: 1.25,
                    // py:1,
                    border: 0,
                    borderRadius: 10,
                  }}
                >
                  <Typography variant="h3" sx={{ alignContent: 'center' }}>
                    Install
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* MOBILE */}

      <Grid container display={{ xs: 'flex', sm: 'none', md: 'none' }} >
        <Grid container item sx={landing_container_mobile}>
          <Grid container item xs={12} justifyContent="center" className={styles.landing_right_container} >
            <Grid item container
              sx={img_container_mobile}
            >
              <Image src={imgSrc} alt="" />
            </Grid>
          </Grid>

          <Grid container item xs={12}
            sx={{
              pb: 5,
              justifyContent: 'center',

            }} >
            <Typography variant='h1'
              sx={{
                // fontSize: '1vw',
                textAlign: "center",
              }}>Varied fonts for <br/> varied vision.</Typography>
          </Grid>

          <Grid container justifyContent="space-evenly" px={1} >
            <Grid item xs={12} align={'center'}>
              <Button display={'inline-block'} variant="string"
                sx={{
                  my: 5,
                  px: '10%',
                  mx: 1,
                  borderRadius: 11,
                }}
              >
                <Typography variant="h3">Install</Typography>
              </Button>
              <Button display={'inline-block'}  variant="text"
                sx={{
                  my: 5,
                  px: '10%',
                  mx: 1,
                  borderRadius: 11,
                }}
              >
                <Typography variant="h3">About</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>




      {/* TABLET */}

      <Grid container display={{ sm: 'flex', xs: 'none', md: 'none' }} >
        <Grid container item sx={landing_container_tablet} >

          <Grid container item xs={12} justifyContent="center" className={styles.landing_right_container} >
            <Grid item container
              sx={img_container_tablet}
            >
              <Image src={imgSrc} alt="" />
            </Grid>
          </Grid>
          <Grid container item xs={12}
            sx={{
              // pt:4,
              pb: 8,
              justifyContent: 'center',

            }} >
            <Typography variant='h1'
              sx={{
                fontSize: '200vw',
                textAlign: "center",
              }}>
              Varied fonts for<br /> varied vision.
            </Typography>
          </Grid>
          <Grid container xs={12} align={'center'} px={5} >
            <Grid item sm={6}>
              <Button
                variant="string"
                sx={{
                  // padding:1,
                  // paddingRight:2,
                  my: 5,
                  px: "20%",
                  // pt:1.5,
                  borderRadius: 11,
                }}
              >
                <Typography variant="h3">
                  Install
                </Typography>
              </Button>
            </Grid>
            <Grid item sm={6}>
              <Button
                variant="text"
                sx={{
                  // padding:1,
                  // paddingRight:2,
                  my: 5,
                  px: "20%",
                  // pt:1.5,
                  borderRadius: 11,
                }}
              >
                <Typography variant="h3">
                  About
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}