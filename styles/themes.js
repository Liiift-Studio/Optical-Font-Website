import { createGlobalStyle } from "styled-components";
import { createTheme } from '@material-ui/core/styles';

const landingBlue = "#CBDDFF";
const footerBlue ="#AFC8F8"
const black ="#000";


export const lightTheme = {
    body: "#fff",
    fontColor:"000",
};

export const darkTheme ={
    body: "#000",
    fontColor: "yellow",
};



export const darkParentTheme = createTheme({ 
        palette:{
            type: "dark",
        },
});


export const lightParentTheme = createTheme({

});


export const landingTheme = createTheme({
    palette:{
        primary:{
            main: landingBlue,
        },
        secondary:{
            main: black,
        }
    }
});
