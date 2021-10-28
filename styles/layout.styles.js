import { flexbox } from "@mui/system"

//Header Bar

export const header_container={
    height: '15vh',
    px:{xs:'6vw',lg:'9vw'},
    verticalAlign: 'bottom',
}
export const dm_icon ={
    display:'flex',
    // fontSize:{lg:"1.2em",md:"1.2em",sm:"1.3em",xs:"1.3em"},
    fontSize:"1.3em",
    mb:{lg:".75em",md:".35em",sm:".2em",xs:".2em"},
    // alignContent:"start",
    alignItems:"stretch",

}

export const logo_container={
    pb:{lg:'1em',md:'1.5em',sm:'2em',xs:'3em'},
    position:'relative',

    fontSize:{lg:'1.2rem',md:'1.1rem',sm:'1rem',xs:'.75rem'},
    height:{lg:'9em',md:'9em',sm:'9em',xs:'12em'},
    width:{lg:'9em',md:'9em',sm:'9em',xs:'12em'}
}

//Landing - this could be condensed into just 1 container function & 1 img container
// 

export const landing_container={
    // pt: '17vh',
    px:{md:'6vw',lg:'9vw'},
    // bgcolor:'blue',
    alignItems:'center',
    height:'85vh',
}
export const landing_container_mobile = {
    
    height:'85vh',
    alignContent:'center',
}

export const landing_container_tablet = {
    // pt:10,
    mt:5,
    height:'85vh',
    alignContent:'center',
}

export const img_container ={
    display:"flex",
    // pt:5,
    pb:15,
    // pl:10,
    // pl:'10vw',
    // bgcolor:"green",
    alignItems:"start",
    justifyContent:"end",

    // maxWidth:'75%',
    minWidth:'100%'

}

export const img_container_mobile ={
    
        pt:5,
        pb:10,
        px:5,

        maxWidth:'75%',
        minWidth:'17em'

}

export const img_container_tablet ={
    
    pt:3,
    pb:5,
    px:5,

    maxWidth:'55%',
    minWidth:'50%'

}

//COPY (menu)
export const img_container_ext={
    display:"flex",
    // py:5,
    // pr:'6vw',
    alignItems:"start",
    justifyContent:"center",
    // minWidth:'100%',
    bgColor:'green',
    // minWidth: {xs:"750px", lg:"900px"},
    width:'inherit'


    // maxHeight:'50%'
    
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
    justifyContent:{md:"start",sm:"center",xs:"center"},
    pb:"2.5em"
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
    
    bgcolor:"background.footer",
    // display:'flex',
    display:{xs:'none', md:'flex'},
    // height:300,
    // pb:'2.5%',
    pt:'8vh',
    pb:'3vh',
    px:{md:'3vw',lg:'6vw'},

    alignContent:'center',
    borderTopStyle:'solid',
    borderWidth:'1px',
    borderColor:"background.footerBorder"
      
}

export const footer_container_mobile={
    display:{xs:'flex', sm:'none'},
    bgcolor:"background.footer",
    justifyContent:'center',
    pt:'5vh',
    pb:'3vh',

    px:'6vw',
    borderTopStyle:'solid',
    borderWidth:'1px',
    borderColor:"background.footerBorder"

}


export const footer_container_tablet={
    display:{xs:'none', sm:'flex',md:'none'},
    bgcolor:"background.footer",
    // justifyContent:'center',
    pt:'5vh',
    pb:'3vh',

    px:'6vw',
    borderTopStyle:'solid',
    borderWidth:'1px',
    borderColor:"background.footerBorder"

}
