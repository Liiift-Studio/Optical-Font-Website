import { flexbox } from "@mui/system"

//Header Bar
export const dm_icon ={
    display:'flex',
    fontSize:{lg:"2em",md:"1.70em",sm:"1.5em",xs:"1.5em"},
    mb:{lg:".75em",md:".35em",sm:".2em",xs:".2em"},
    // alignContent:"start",
    alignItems:"stretch",

}

export const logo_container={
    pb:{lg:'1em',md:'1.5em',sm:'2em',xs:'3em'},
    position:'relative',
     height:{lg:'9em',md:'9em',sm:'9em',xs:'12em'},
    width:{lg:'9em',md:'9em',sm:'9em',xs:'12em'}
}

//Landing
export const landing_container_mobile = {

    height:'90vh',
    alignContent:'center',
}

export const landing_container_tablet = {
    // pt:10,
    mt:10,
    height:'75vh',
    alignContent:'center',
}

export const img_container_mobile ={
    
        pt:5,
        pb:10,
        px:5,

        maxWidth:'75%',
        minWidth:'17em'

}

export const img_container_tablet ={
    
    pt:5,
    pb:10,
    px:5,

    maxWidth:'60%',
    minWidth:'70%'

}

//COPY (menu)


export const copy_container ={
    pl: {xs:'6vw', md:'2vw',lg:'10vw'},
    pr: {xs:'6vw', md:'6vw',},
    justifyContent: 'center',
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
    height:300,
    // pb:'2.5%',
    pt:'10vh',
    pb:'3vh',

    alignContent:'center',
    borderTopStyle:'solid',
    borderWidth:'1px',
    borderColor:"background.footerBorder"
      
}

export const footer_container_mobile={
    display:{xs:'flex', md:'none'},
    bgcolor:"background.footer",
    justifyContent:'center',
    pt:'5vh',
    pb:'3vh',

    px:'6vw',
    borderTopStyle:'solid',
    borderWidth:'1px',
    borderColor:"background.footerBorder"

}
