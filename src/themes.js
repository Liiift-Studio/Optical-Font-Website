import { green } from '@mui/material/colors';
import { createTheme , styled,responsiveFontSizes} from '@mui/material/styles';

// import opt_dark from './public/images/opt_dark'



const landingBlue = "#CBDDFF";
const footerBlue ="#AFC8F8"
const black ="#000";
const buttonText = "#111111"
const buttonBackDark= "#FCFF55"
const white = "#FFFFFF"

const buttonLightT = black;
const buttonLightT_hover= black;
const buttonLightBG = white;
const buttonLightBG_hover =landingBlue;

const toggleButtonLightT_hover= "#2c2e33";
const toggleButtonLightBG_hover= "#e8f0ff";


export const yellow ="#FCFF55";
const buttonDarkT_hover= black;
export const buttonDarkBG = "#FCFF55";
const buttonDarkBG_hover = "#FCFF55";


const button = {
    textTransform:'none',
    fontSize:30,
}
const h1 = {
    fontSize:'6rem',
    fontWeight:600,
    lineHeight:1.215,
    letterSpacing: '-.1rem',
    fontFamily:'Optical02'

    // m:0,
}
const h2 = {
    fontSize:'5.7rem',
    
    fontWeight:500,
    letterSpacing:'-.4rem',
    fontFamily:'Optical02'

}
const h3 = {
    fontSize:'3rem',
    fontWeight:550,
    // letterSpacing:'-.2rem',

    fontFamily:'Optical02'
}

// toggle buttons & menu titles
const h4 = {
    fontFamily:'Optical02',
    fontSize:'1.25rem',
    fontWeight:600,
    letterSpacing: '.1rem',
}
const body ={
    fontSize:'1.1rem',
    fontWeight:500,
    letterSpacing: '.025rem',
    fontFamily:"Optical02",
    // color:black,


}

const footer ={
    fontSize:'.95rem',
    fontWeight:500,
    letterSpacing: '.025rem',
    fontFamily:"Optical02",
    // justifyContent:{sm:'center'},
    textAlign:'start',
    bgColor:"green",



}


let parentTheme = createTheme({
    typography:{
        h1 : h1,
        h2 : h2, 
        h3 : h3,
        h4 : h4,
        body:body,  
        footer:footer,   
           

        
    },
    

})

parentTheme=responsiveFontSizes(parentTheme);

    parentTheme.typography.body ={
        fontSize:'1.1rem',
        fontWeight:500,
        letterSpacing: '.025rem',
        fontFamily:"Optical02",
        [parentTheme.breakpoints.down('md')]:{
            fontSize:'.95rem',

        },
    }

        
    parentTheme.typography.footer ={
        fontSize:'.95rem',
        fontWeight:500,
        letterSpacing: '.025rem',
        fontFamily:"Optical02",
        // justifyContent:{sm:'center'},
        textAlign:'start',
        [parentTheme.breakpoints.down('sm')]:{
            textAlign:'center',
        }
    }

    parentTheme.typography.h1 ={
        fontSize:'5.5vw',
        fontWeight:600,
        lineHeight:1.215,
        letterSpacing: '-.1rem',
        fontFamily:'Optical02',
        
        [parentTheme.breakpoints.down('lg')]:{
            fontSize:'5vw',

        },

        [parentTheme.breakpoints.down('md')]:{
            textAlign:'center',
            fontSize:'8vw',

        },
        //mobile
        [parentTheme.breakpoints.down('sm')]:{
            textAlign:'center',
            fontSize:'10vw',

        }
    }

    







export let lightTheme = createTheme({
    ...parentTheme,
    palette:{
        mode: 'light',
        
        //   buttons
        primary:{
            main:black,
        },
        secondary:{
            light: white ,
            main: buttonText
        },
        text:{
            main: black,
            
        },
        background:{
            about : landingBlue ,
            footer : footerBlue ,
            buttonHover : black,
            button: landingBlue,
            menuSelector: white,
            footerBorder: footerBlue,


        },
  
    },

    components:{
        MuiButton :{
            styleOverrides:{
                root:{

                },

                stringPrimary:{
                    // backgroundColor : buttonLightBG,
                    color: buttonLightT,

                    '&:hover' : {
                        backgroundColor: buttonLightBG_hover,
                        color: buttonLightT_hover,
                        borderColor: buttonLightBG_hover,

                    },
                },

            },
        },


        MuiIcon:{
            styleOverrides:{
                root:{

                    [parentTheme.breakpoints.down('sm')]:{
                        fontSize:'.75rem',
                
                    },
                    [parentTheme.breakpoints.up('sm')]:{
                        fontSize:'1rem',
                
                    },
                    [parentTheme.breakpoints.up('md')]:{
                        fontSize:'1.1rem',
                
                    },
                    [parentTheme.breakpoints.up('lg')]:{
                        fontSize:'1.2rem',
                
                    }
                    // fontSize:"1vw"
                }
            }
        },

        MuiIconButton:{
            styleOverrides:{
                root:{
                    color:black,

                    '&:hover' : {
                        backgroundColor: "transparent",
    
                    },

                },

                         
            },  
        },
        MuiListItemButton:{
            styleOverrides:{
                root:{

                    justifyContent: "flex-start",
            
                    
                    '&:hover' : {
                        backgroundColor: "transparent",
    
                    },


                },

                         
            },  
        },

        MuiCssBaseline:{
            styleOverrides: {
                body: {
                    background: 'linear-gradient(0deg, #f6f6f6 30%, #f6f6f6 90%)',
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                },
            }
        }
        
    }
    

});

export let darkTheme =createTheme({ 
    ...parentTheme,

    palette:{
        mode: 'dark',
        // common:
        text:{
            main:white
        },
        secondary:{
            main: buttonText ,

        },
        background:{
            default: black,
            // button: buttonBackDark,
            // menuSelector: black,
        },
    

        
    },
    
    components:{
        

        MuiListItemButton:{
            styleOverrides:{
                root:{

                    // backgroundColor : buttonLightBG,
                    // color: buttonLightT,
                    // border:0,
                    justifyContent: "flex-start",
            
                    
                    '&:hover' : {
                        backgroundColor: "transparent",
                        // color: toggleButtonLightT_hover,
                        // borderColor: toggleButtonLightBG_hover,
    
                    },


                },

                         
            },  
        },

        MuiIcon:{
            styleOverrides:{
                root:{

                    [parentTheme.breakpoints.down('sm')]:{
                        fontSize:'.75rem',
                
                    },
                    [parentTheme.breakpoints.up('sm')]:{
                        fontSize:'1rem',
                
                    },
                    [parentTheme.breakpoints.up('md')]:{
                        fontSize:'1.1rem',
                
                    },
                    [parentTheme.breakpoints.up('lg')]:{
                        fontSize:'1.2rem',
                
                    }
                    // fontSize:"1vw"
                }
            }
        },

        MuiIconButton:{
            styleOverrides:{
                root:{
                    color:yellow,
                    '&:hover' : {
                        backgroundColor: "transparent",
    
                    },

                },

                         
            },  
        }

        
    }
    
});
 darkTheme = createTheme(darkTheme,{
    palette:{
        mode:'dark',
        background:{
            menuSelector: "#1e1e1e",
            footerBorder: darkTheme.palette.primary,

        },
    },

    components:{
        MuiButton :{
            styleOverrides:{


                stringPrimary:{
                    backgroundColor : darkTheme.palette.secondary,
                    color: yellow,

                    '&:hover' : {
                        backgroundColor: buttonDarkBG_hover,
                        color: buttonDarkT_hover,
                        borderColor:buttonDarkT_hover,

                    },
                }
                

        
            }
        },
    }
 });



