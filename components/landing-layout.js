import Image from 'next/image'
import { Typography, Button, Grid, Box } from '@mui/material'
import styles from '../styles/layout.module.css'
import { shadows } from '@mui/system';
import { imgSource, source } from '../styles/utils.module.constants';
import { useEffect } from 'react';

import { img_container_mobile, img_container_tablet, landing_container_mobile, landing_container_tablet, landing_container, img_container } from '../styles/layout.styles';



export default function LandingLayout({ children, imgSrc }) {

  // const [imgSource,setSource] = useState(false);
  return (
    <>
      
      {/* DESKTOP */}
      <Grid container display={{xs: 'none', sm:'none', md: 'flex'}}>
        <Grid container sx={landing_container}>
            <Grid item md={6} sx={img_container}  className={styles.landing_right_container}>
                <Image src={imgSrc} alt="Web extension illustration, a simplified 3d rendering showing three buttons, a slider and a digital screen with a lowercase a. " />
            </Grid>
            <Grid item md={6} pl={10} display={'block'}>
                <Typography variant='h1'>
                  <nobr>Varied fonts for</nobr> <br /> varied vision.
                </Typography>
                <Button variant="string" href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad"
                  sx={{
                    my: 2,
                    border: 0,
                    borderRadius: 10,
                    width: "191px",
					          height: "63px",
                    }}>

                    <Typography sx={{position:'relative', top: '.1rem',}} variant="h2" alt="install">
                      Install
                    </Typography>
                </Button>
            </Grid>
          </Grid>
      </Grid>

      {/* TABLET */}
      <Grid container justifyContent={'center'} display={{ sm: 'flex', xs: 'none', md: 'none' }} >
        <Grid container item sx={landing_container_tablet} >

          <Grid container item sm={12} justifyContent="center" className={styles.landing_right_container} >
            <Grid item container sx={img_container_tablet}>
              <Image src={imgSrc} alt="Web extension illustration, a simplified 3d rendering showing three buttons, a slider and a digital screen with a lowercase a. "/>
            </Grid>
          </Grid>

          <Grid container item sm={12}
            sx={{
              pb: 8,
              pt: 4,
              maxWidth: '426px',
              justifyContent: 'center',
            }}>
            <Typography variant='h1'
              sx={{
                fontSize: '100vw',
                textAlign: "center",
              }}>
              Varied&nbsp;fonts&nbsp;for<br /> varied vision.
            </Typography>
          </Grid>

          <Grid container sm={12} align={'center'} spacing={2}maxWidth={'426px'}>
            <Grid item sm={6}>
              <Button
                href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad"
                variant="string"
                sx={{
                  my: 1,
                  border: 0,
                  borderRadius: 10,
                  width: "156px",
                  height: "53px",
                }}>
                <Typography variant="h2">
                  Install
                </Typography>
              </Button>
            </Grid>

            <Grid item sm={6}>
              <Button
                href="#FLV"
                variant="outlined"
                sx={{
                  my: 1,
                  borderRadius: 10,
                  width: "156px",
                  height: "53px",
                }}>
                <Typography variant="h2">
                  About
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* MOBILE */}
      <Grid container display={{ xs: 'flex', sm: 'none', md: 'none' }}>
        <Grid container item sx={landing_container_mobile}>
          <Grid item xs={12} sx={img_container_mobile} className={styles.landing_right_container} >
              <Image src={imgSrc} alt="Web extension illustration, a simplified 3d rendering showing three buttons, a slider and a digital screen with a lowercase a. " />
          </Grid>

          <Grid item xs={12}
            sx={{
              pb: 10,
              minWidth: '326px',
              maxWidth: '426px',
            }}>
            <Typography variant='h1'
              sx={{               
                textAlign: "center",
              }}>Varied&nbsp;fonts&nbsp;for <br/> varied vision.</Typography>
          </Grid>

          <Grid container sm={12} pb={10} align={'center'} justifyContent={'space-around'} maxWidth={'426px'}>
            <Grid item sm={6}>
              <Button
                href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad"
                variant="string"
                sx={{
                  my: 1,
                  border: 0,
                  borderRadius: 10,
                  width: "156px",
                  height: "53px",
                }}>
                <Typography variant="h2">
                  Install
                </Typography>
              </Button>
            </Grid>

            <Grid item sm={6}>
              <Button
                href="#FLV"
                variant="outlined"
                sx={{
                  my: 1,
                  borderRadius: 10,
                  width: "156px",
                  height: "53px",
                }}>
                <Typography variant="h2">
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
