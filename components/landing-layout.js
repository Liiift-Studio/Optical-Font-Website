import Image from 'next/image'
import { Typography, Button, Grid, Box } from '@mui/material'
import styles from '../styles/layout.module.css'

import { img_container_mobile, img_container_tablet, landing_container_mobile, landing_container_tablet, landing_container, img_container } from '../styles/layout.styles';



export default function LandingLayout({ children, aboutClick, imgSrc }) {

  // const [imgSource,setSource] = useState(false);
  return (
    <>
      
      {/* DESKTOP */}
      <Grid container item display={{xs: 'none', sm:'none', md: 'flex'}}>
        <Grid container item sx={landing_container}>
            <Grid container item md={6} sx={img_container}  >
                <Image src={imgSrc}  alt="Web extension illustration, a simplified 3d rendering showing three buttons, a slider and a digital screen with a lowercase a. " />
            </Grid>
            <Grid container item md={6} pl={10} display={'block'}>
                <Typography variant='h1'>
                  <nobr>Varied fonts for</nobr> <br /> varied vision
                </Typography>
                <Button variant="string" href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad"
                  sx={{
                    my: 2,
                    px:5,
                    py:2,
                    border: 0,
                    borderRadius: 10,
                    minWidth: "145px",
                    minHeight: "55px",
                    }}>

                    <Typography sx={{position:'relative', top: '.1rem',}} variant="h2" alt="install">
                      Install
                    </Typography>
                </Button>
            </Grid>
          </Grid>
      </Grid>

      {/* TABLET */}
      <Grid container item display={{ sm: 'flex', xs: 'none', md: 'none' }} >
        <Grid container item sx={landing_container_tablet} >

          <Grid container item sm={12} justifyContent="center"  >
            <Grid item container sx={img_container_tablet}>
              <Image src={imgSrc} alt="Web extension illustration, a simplified 3d rendering showing three buttons, a slider and a digital screen with a lowercase a. "/>
            </Grid>
          </Grid>

          <Grid container item sm={12}
            sx={{
              pb: 8,
              pt: 4,
              justifyContent: 'center',
            }}>
            <Typography variant='h1'>
              Varied&nbsp;fonts&nbsp;for<br /> varied vision
            </Typography>
          </Grid>

          <Grid container item sm={12} display='flex' justifyContent='center' spacing={2}>
            <Grid container item sm={6} sx={{display:'flex', justifyContent:'center'}} >
              <Button
                href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad"
                variant="string"
                sx={{
                  my: 1,
                  border: 0,
                  borderRadius: 10,
                  minWidth: "156px",
                  minHeight: "53px",
                }}>
                <Typography variant="h2">
                  Install
                </Typography>
              </Button>
            </Grid>

            <Grid container item sm={6} sx={{display:'flex', justifyContent:'center'}} >
              <Button
                href="#About"
                variant="outlined"
                onClick={aboutClick}
                sx={{
                  my: 1,
                  borderRadius: 10,
                  minWidth: "156px",
                  minHeight: "53px",
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
          <Grid item xs={12} sx={img_container_mobile}>
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
              }}>Varied&nbsp;fonts&nbsp;for <br/> varied vision</Typography>
          </Grid>

          <Grid container item xs={12} pb={10} spacing={2}  >
            <Grid xs={6} item sx={{display:'flex', minWidth:'55px'}} >
              <Button
                href="https://chrome.google.com/webstore/detail/optical/jgnimjfkbkjejchhmpocakifegpakcad"
                variant="string"
                sx={{
                  my: 1,
                  px:5,
                  // mx:10,
                  border: 0,
                  borderRadius: 10,
                  // minWidth: "146px",
                  // maxWidth: "53px",
                  
                }}>
                <Typography variant="h2">
                  Install
                </Typography>
              </Button>
            </Grid>

            <Grid item xs={6} sx={{display:'flex'}} >
              <Button
                href="#About"
                variant="outlined"
                onClick={aboutClick}
                sx={{
                  my: 1,
                  px:5,
                  borderRadius: 10,
                  // width:'100%',
                  // minWidth: "146px",
                  // maxWidth: "53px",
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
