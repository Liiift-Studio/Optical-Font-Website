import { createTheme } from '@mui/material/styles';

const landingBlue = "#CBDDFF";
const footerBlue ="#AFC8F8"
const black ="#000";


export const lightTheme = createTheme({
    palette:{
        background:{
            about : landingBlue ,
            footer : footerBlue ,
        }
        
    }
});

export const darkTheme =createTheme({ 
    palette:{
        mode: 'dark',
    },
});


