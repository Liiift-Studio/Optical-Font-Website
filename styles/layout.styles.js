import { flexbox } from "@mui/system"


const margin_xs='12vw';
const margin_md='6vw';
//Header Bar

export const header_container={
    height:'20vh',
    // pt:{xs:'50px',sm:'100px'},
    px:{xs:margin_xs,md:margin_md},
    py:8,
    alignItems: 'flex-end',
}
export const dm_icon ={
    display:'flex',
}

export const logo_container={
    py: 2,
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

export const landing_container={
    px:{md:margin_md,},
    alignItems:'center',
    minHeight:'55vh',
    justifyContent:'center',
}
export const landing_container_mobile = {
    pt: 8,
    px:margin_xs,
    alignContent:'center',
    justifyContent:'center',
    minHeight:'80vh',
}

export const landing_container_tablet = {
    mt:5,
    px:margin_xs,

    minHeight:'80vh',
    // maxWidth:'426px !important',
    alignContent:'center',
    justifyContent:'center',
}

export const img_container ={
    alignItems:"start",
    justifyContent:"center",
    pt:2,
    pb:2,
    filter: 'drop-shadow(0 0 5rem grey)',
    display:'flex',

    minWidth:'auto',
    minHeight:'auto',
    maxHeight:'auto',
    maxWidth:'515px !important',
}

export const img_container_mobile ={
    pt:2,
    pb:2,
    filter: 'drop-shadow(0 0 5rem grey)',
    display:'flex',
    justifyContent:'center',

}

export const img_container_tablet ={
    pt:2,
    pb:2,
    // width:'426px !important',
    display:'flex',
    justifyContent:'center',
    filter: 'drop-shadow(0 0 5rem grey)',

}

//COPY (menu)
export const img_container_ext={
    display:"flex",
    alignItems:"start",
    justifyContent:"center",
    maxWidth:{xs:'40%',lg:'40%',xl:'40%'},
}

export const content_container={
    position:'relative',
    px:{xs:margin_xs,md:margin_md},
    pt:{sm:8},
    pb:{sm:12},
}

export const copy_container ={
    pb:'3rem',
    display:'flex',
    alignContent:'center',
    '&:focus-visible':{
        p:'1rem',
        mt:'1rem',
        mb:'4rem',
        borderRadius:'5px',
        border: '4px solid',
        outline:'none'
    },
}
export const header ={
    display:"flex",
    justifyContent:'start',
    pb:4
}
export const copy ={
    // diplay"flex
    justifyContent:{md:"start",sm:"center",xs:"center"},
    maxWidth: {xs:"750px", lg:"900px"}
}
export const focusStyle = {
    '&:focus-visible':{
        m: '.25rem',
        p:'.1em .2em',
        borderRadius:'5px',
        outline: '4px solid',
    },
}


export const listItems={
    display:'flex',
    alignItems:'start',
}
export const menu_container={
    pt: '0%',
    top:'5vh',
    position: '-webkit-sticky',
    position: 'sticky',
    justifyContent: 'flex-start',
    height :'100%',
    // overflow: 'hidden',
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
    px:margin_md,
    borderColor:"background.footerBorder",
    textAlign:{xs:'left',lg:'left'},
}