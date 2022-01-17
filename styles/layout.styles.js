import { flexbox } from "@mui/system"

//Header Bar

export const header_container={
    height: {xs:'100px',sm:'200px'},
    px:{xs:'6vw', lg:'9vw'},
    verticalAlign: 'bottom',
    alignItems: 'flex-end',
}
export const dm_icon ={
    display:'flex',
}

export const logo_container={
    p: 2,
    position:'relative',
    fontSize:{lg:'1.2rem',md:'1.1rem',sm:'1rem',xs:'.75rem'},
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    width: 'auto',
    height: 'auto',
    borderRadius: 2,
}
export const logo_container_mobile={
    pb:'3em',
    height:'100%',
    width:'100%'
}

//Landing - this could be condensed into just 1 container function & 1 img container
// 

export const landing_container={
    px:{md:'6vw',lg:'9vw'},
    alignItems:'center',
    height:'85vh',
    justifyContent:'center',
}
export const landing_container_mobile = {
    mt: 8,
    alignContent:'center',
    justifyContent:'center',
}

export const landing_container_tablet = {
    mt:5,
    height:'85vh',
    maxWidth:'426px !important',
    alignContent:'center',
    justifyContent:'center',
}

export const img_container ={
    alignItems:"start",
    justifyContent:"center",
    minWidth:'auto',
    minHeight:'auto',
    maxHeight:'auto',
    maxWidth:'515px !important',
}

export const img_container_mobile ={
    pt:2,
    pb:2,
    minWidth:'326px!important',
    maxWidth:'326px !important',
}

export const img_container_tablet ={
    width:'426px !important',
}

//COPY (menu)
export const img_container_ext={
    display:"flex",
    alignItems:"start",
    justifyContent:"center",
    maxWidth:{xs:'40%',lg:'40%',xl:'40%'},
}
export const body_container={
    px:{xs:'1vw',lg:'4vw'},
    pt:{sm:8},

}
export const copy_container ={
    // pl: {xs:'6vw', md:'2vw',lg:'10vw'},
    pl:'1vw',
    pr: {xs:'1vw', md:'7vw',},
    justifyContent: 'center',
    
}
export const header ={
    display:"flex",
    justifyContent:{md:"start",sm:"start",xs:"start"},
    px:{md:0,sm:4,xs:2},
    pt:"2rem",
    pb:"2rem"
}
export const copy ={
    // diplay"flex
    justifyContent:{md:"start",sm:"center",xs:"center"},
    px:{md:0,sm:4,xs:2},
    maxWidth: {xs:"750px", lg:"900px"}
}
export const circle ={
    alignContent:"center",
    bgcolor:'text.main',
    // bgcolor:'white',
    color:'text.main',
    width :'.7em',
    height:'.7em',
    borderRadius:"50%",
    pt:.3,
    mb:.75,
}
export const circleH ={
    display:"none",
    alignContent:"center",
    bgcolor:'text.main',
    // bgcolor:'white',
    color:'text.main',
    width :'.7em',
    height:'.7em',
    borderRadius:"50%",
    pt:.3,
    mb:.75,
    "&:hover": {
        display:"flex",
    },
}

export const circle2 ={
    alignContent:"center",
    bgcolor:'text.main',
    // bgcolor:'white',
    color:'text.main',
    width :'.3em',
    height:'.3em',
    borderRadius:"100%",
    
    pt:.3,
    mb:.75,
    mt:1.75,
    ml:{xs:5,sm:4},
    
}

export const listItems={
    display:'flex',
    alignItems:'start',
}
//left menu

//?? stick not working -> still using css for this rn
export const menuButtons_container={
    pl: '2vw',
    pt: '0%',
    position: '-webkit-sticky',
    position: 'sticky',
    justifyContent: 'flex-start',
    height :'100%',
    overflow: 'hidden',
    width: '100%',
    mb:'5%',
    display:{xs:'none', md:'flex'}

}


//FOOTER
export const footer_container={
    display:{xs:'none',sm:'flex'},
    bgcolor:"background.footer",
    pt:'8vh',
    pb:'3vh',
    px:{lg:'4vw'},
    borderColor:"background.footerBorder",
    textAlign:{xs:'center',lg:'left'},
}