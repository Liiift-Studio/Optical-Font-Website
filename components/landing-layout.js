import Image from 'next/image'
import { IconButton, Typography, Button, Grid, Box } from '@mui/material'
import styles from '../styles/layout.module.css'
import dials from '../public/images/opt_light.png'
import { shadows } from '@mui/system';
import { imgSource, source } from '../styles/utils.module.constants';
import { useEffect } from 'react';
import {buttonDarkT, darkTheme, lightTheme} from '../src/themes'
import logo from '../public/images/logoDark.svg'
import cursor from '../public/images/cursor.svg'
import logoType from '../public/images/logo-type.svg'
import { logo_container_mobile, img_container_mobile, img_container_tablet, landing_container_mobile, landing_container_tablet, landing_container, img_container } from '../styles/layout.styles';
import {ThemeProvider, responsiveFontSizes} from "@mui/material/styles"

export default function LandingLayout({}) {
  return (
    <>

      {/* DESKTOP */}
      <ThemeProvider theme={darkTheme}>
      <Grid container backgroundColor={'black'} py={'25%'} height={'100vh'}>
        <Grid container sx={landing_container} alignContent={'center'} alignItems={'flex-start'}>
            <Grid container item align={'center'} display={{xs:'flex', sm:'none'}} pb={3} xs={12} justifyContent={'center'}>
              <Image src={cursor}/>
            </Grid>
            <Grid container item align={'center'} display={{xs:'flex', sm:'none'}} pb={5} xs={12} justifyContent={'center'}>
              <Image src={logoType}/>
            </Grid>
            <Grid container item align={'right'} pr={15} sm={6} display={{xs:'none', sm:'flex'}} justifyContent={{xs:'center', sm:'flex-end'}}>
              <Image src={logo}/>
            </Grid>
            <Grid container item xs={12} sm={6} direction={'column'} alignItems={{xs:'center', sm:'flex-start'}}>
              <Typography color={'white'} paragraph={true}  display={{xs:'none', sm:'block'}} variant='h1'><nobr>Varied fonts for</nobr> <br /> varied vision.</Typography>
              <Typography color={'white'} display={{xs:'block', sm:'none'}} textAlign={'center'} variant='p'><nobr>Varied fonts for</nobr> <br /> varied vision.</Typography>
              <Typography color={'white'} paragraph={true} display={{xs:'none', sm:'block'}} variant='p'>In progress, check<br></br> back again&nbsp;soon.</Typography>
              <Typography color={'white'} display={{xs:'block', sm:'none'}} paragraph={true} variant='p'>in progress</Typography>
            </Grid>
          </Grid>
      </Grid>
      </ThemeProvider>
    </>
  )
}