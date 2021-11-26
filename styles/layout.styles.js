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
// export const darkIcon = (props) => (
//     <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M26.5 41.9583C25.2854 41.9583 24.2917 42.9521 24.2917 44.1667V50.7917C24.2917 52.0062 25.2854 53 26.5 53C27.7146 53 28.7083 52.0062 28.7083 50.7917V44.1667C28.7083 42.9521 27.7146 41.9583 26.5 41.9583ZM11.0417 26.5C11.0417 25.2854 10.0479 24.2917 8.83333 24.2917H2.20833C0.99375 24.2917 0 25.2854 0 26.5C0 27.7146 0.99375 28.7083 2.20833 28.7083H8.83333C10.0479 28.7083 11.0417 27.7146 11.0417 26.5ZM26.5 11.0417C27.7146 11.0417 28.7083 10.0479 28.7083 8.83333V2.20833C28.7083 0.99375 27.7146 0 26.5 0C25.2854 0 24.2917 0.99375 24.2917 2.20833V8.83333C24.2917 10.0479 25.2854 11.0417 26.5 11.0417ZM50.7917 24.2917H44.1667C42.9521 24.2917 41.9583 25.2854 41.9583 26.5C41.9583 27.7146 42.9521 28.7083 44.1667 28.7083H50.7917C52.0062 28.7083 53 27.7146 53 26.5C53 25.2854 52.0062 24.2917 50.7917 24.2917ZM12.4219 37.4313L7.72917 42.124C6.84583 43.0073 6.84583 44.3875 7.72917 45.2708C8.17083 45.7125 8.72292 45.9333 9.275 45.9333C9.82708 45.9333 10.3792 45.7125 10.8208 45.2708L15.5135 40.5781C16.3969 39.6948 16.3969 38.3146 15.5135 37.4313C14.6854 36.5479 13.3052 36.5479 12.4219 37.4313ZM38.9771 16.2312C39.5292 16.2312 40.0812 16.0104 40.5229 15.5687L45.2156 10.876C46.099 9.99271 46.099 8.6125 45.2156 7.72917C44.3323 6.84583 42.9521 6.84583 42.0687 7.72917L37.376 12.4219C36.4927 13.3052 36.4927 14.6854 37.376 15.5687C37.8729 16.0104 38.425 16.2312 38.9771 16.2312ZM12.4219 15.5687C12.8635 16.0104 13.4156 16.2312 13.9677 16.2312C14.5198 16.2312 15.0719 16.0104 15.5135 15.5687C16.3969 14.6854 16.3969 13.3052 15.5135 12.4219L10.8208 7.72917C9.9375 6.84583 8.55729 6.84583 7.67396 7.72917C6.79062 8.6125 6.79062 9.99271 7.67396 10.876L12.4219 15.5687ZM40.5781 37.4313C39.6948 36.5479 38.3146 36.5479 37.4313 37.4313C36.5479 38.3146 36.5479 39.6948 37.4313 40.5781L42.124 45.2708C42.5656 45.7125 43.1177 45.9333 43.6698 45.9333C44.2219 45.9333 44.774 45.7125 45.2156 45.2708C46.099 44.3875 46.099 43.0073 45.2156 42.124L40.5781 37.4313Z" fill="#FAFB45"/>
//         <path d="M26.5013 38.6471C33.2093 38.6471 38.6471 33.2093 38.6471 26.5013C38.6471 19.7933 33.2093 14.3555 26.5013 14.3555C19.7933 14.3555 14.3555 19.7933 14.3555 26.5013C14.3555 33.2093 19.7933 38.6471 26.5013 38.6471Z" fill="#FAFB45"/>
//     </svg>
// ); 

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
    // my:50,
    // pr:'6vw',
    alignItems:"start",
    justifyContent:"center",
    // minWidth:'100%',
    // minWidth: {xs:"750px", lg:"900px"},
    maxWidth:{xs:'40%',lg:'40%',xl:'40%'},
    // minWidth:{xs:'40%',lg:'50%',xl:'40%'},



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

