import { ArrowLeft } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
// import grey from '@mui/material/colors/grey'
import {  Button,alpha, styled,makeStyles} from '@mui/styles'
import { typography } from '@mui/system';



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
    fontSize:45,
    fontWeight:550,
    lineHeight:1.35,
}
const h2 = {
    fontSize:45,
    fontWeight:400,
}
const h3 = {
    fontSize:25,
    fontWeight:550,
}

// toggle buttons & menu titles
const h4 = {
    fontSize:17,
    fontWeight:600,
}
const body ={
    fontSize:20,
}


const parentTheme = createTheme({
    typography:{
        h1 : h1,
        h2 : h2, 
        h3 : h3,
        h4 : h4,
        // button: button,
        body:body,        
    },
    components:{
        
        MuiListItemButton :{
            styleOverrides:{
                stringPrimary:{
                '&:hover' : {
                    backgroundColor: landingBlue,
                },
            }

            },
        }
    }
})


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



        secondary:{
            main: buttonText ,

        },
        background:{
            button: buttonBackDark,
            buttonHover : landingBlue,
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


// darkTheme.overrides ={
//     ...darkTheme.overrides,
//         MuiButton :{
//             ...darkTheme.MuiButton,
            
//             // ...parentTheme.MuiButton,
//             root:{
//                 ...darkTheme.root,
//                 letterSpacing: '0.05em',

//                 '& .hover' : landingBlue,
//             },
//         },
// }


// export const buttonStyle = makeStyles(theme =>({
//     button:{
//         color:"red",
//         '&:hover': {
//             backgroundColor: 'background.buttonHover',
//             color:"black",
//         }
//     }
// }));

// export const styledButton = styled(Button)(({theme}=>){
//     '& .MuiButton':{
//         '&:hover':{

//         }
//     }
// })

