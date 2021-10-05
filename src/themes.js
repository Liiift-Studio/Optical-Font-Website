import { green } from '@mui/material/colors';
import { createTheme , styled} from '@mui/material/styles';




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


const buttonDarkT ="#FCFF55";
const buttonDarkT_hover= black;
const buttonDarkBG = "#FCFF55";
const buttonDarkBG_hover = "#FCFF55";


const button = {
    textTransform:'none',
    fontSize:30,
}
const h1 = {
    fontSize:'4.5rem',
    fontWeight:550,
    lineHeight:1.35,
    letterSpacing: '.1rem'

    // m:0,
}
const h2 = {
    fontSize:'3.7rem',
    fontWeight:500,
}
const h3 = {
    fontSize:'1.5rem',
    fontWeight:550,
}

// toggle buttons & menu titles
const h4 = {
    fontSize:'1.1125rem',
    fontWeight:600,
    letterSpacing: '.15rem'
}
const body ={
    fontSize:'1.1rem',
    fontWeight:500,
    letterSpacing: '.025rem'


}


let parentTheme = createTheme({
    typography:{
        h1 : h1,
        h2 : h2, 
        h3 : h3,
        h4 : h4,
        body:body,        

        
    },
    

})

export const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        h1 : {
            fontSize:'2.5rem',
            fontWeight:550,
            lineHeight:1.35,
            letterSpacing: '.1rem'
        
            // m:0,
        }
    },
    [theme.breakpoints.up('md')]: {
        h1 : {
            fontSize:'3.5rem',
            fontWeight:550,
            lineHeight:1.35,
            letterSpacing: '.1rem'
        
            // m:0,
        }
    },
    [theme.breakpoints.up('xl')]: {
        h1 : {
            fontSize:'4.25rem',
            fontWeight:550,
            lineHeight:1.35,
            letterSpacing: '.1rem'
        
            // m:0,
        },
    },
}));



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
        
        background:{
            about : landingBlue ,
            footer : footerBlue ,
            buttonHover : black,
            button: landingBlue,
            menuSelector: white,

        },
  
    },

    components:{
        MuiButton :{
            styleOverrides:{
                root:{
                    // textTransform: 'none',
                    // fontSize:20,
                    // borderRadius: 5,
                    // borderColor:landingBlue,
                },

                stringPrimary:{
                    backgroundColor : buttonLightBG,
                    color: buttonLightT,

                    '&:hover' : {
                        backgroundColor: buttonLightBG_hover,
                        color: buttonLightT_hover,
                        borderColor: buttonLightBG_hover,

                    },
                },

            },
        },
        MuiToggleButton:{
            styleOverrides:{
                root:{

                    backgroundColor : buttonLightBG,
                    color: buttonLightT,
                    border:0,
                    justifyContent: "flex-start",
            
                    
                    '&:hover' : {
                        // backgroundColor: toggleButtonLightBG_hover,
                        // color: toggleButtonLightT_hover,
                        // borderColor: toggleButtonLightBG_hover,
    
                    },

                },

                         
            },  
        }
    }
    

});

export let darkTheme =createTheme({ 
    ...parentTheme,

    palette:{
        mode: 'dark',
        // common:
        text:{
            primary:white
        },
        secondary:{
            main: buttonText ,

        },
        background:{
            default: black,
            button: buttonBackDark,
            buttonHover : landingBlue,
            menuSelector: black,
        },
    

        
    },
    
    components:{
        MuiButton :{
            styleOverrides:{
                root:{
                    // textTransform: 'none',
                    // fontSize:20,
                    // borderRadius: 5,
                    // borderColor:landingBlue,
                },

                stringPrimary:{
                    backgroundColor : buttonDarkBG,
                    color: buttonDarkT,

                    '&:hover' : {
                        backgroundColor: buttonDarkBG_hover,
                        color: buttonDarkT_hover,
                        borderColor:buttonDarkT_hover,

                    },
                }
                

        
            }
        },
        MuiToggleButton:{
            styleOverrides:{
                root:{
                    border:0,
                    justifyContent: "flex-start",

                    
                    '&:hover' : {
                        backgroundColor: toggleButtonLightBG_hover,
                        color: toggleButtonLightT_hover,
                        borderColor: toggleButtonLightBG_hover,
    
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
        },
    },

    components:{
        MuiButton :{
            styleOverrides:{


                stringPrimary:{
                    backgroundColor : darkTheme.palette.secondary,
                    color: buttonDarkT,

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



