import { green } from "@mui/material/colors";
import { createTheme, styled, responsiveFontSizes } from "@mui/material/styles";

// import opt_dark from './public/images/opt_dark'

const landingBlue = "#CBDDFF";
const footerBlue = "#C8D8F6";
const black = "#111111";
const buttonText = "#111111";
const buttonBackDark = "#FCFF55";
const white = "#FFFFFF";

export const yellow = "#FCFF55";
const buttonDarkT_hover = black;
export const buttonDarkBG = "#FCFF55";
const buttonDarkBG_hover = "#FCFF55";

const buttonLightT = white; 
const buttonLightT_hover = yellow;
const buttonLightBG = white;
const buttonLightBG_hover = black;

const toggleButtonLightT_hover = "#2c2e33";
const toggleButtonLightBG_hover = "#e8f0ff";

const button = {
	textTransform: "none",
	fontSize: 30,
};

const h1 = {
	fontSize: "6rem",
	fontWeight: 600,
	lineHeight: 1.215,
	letterSpacing: "-.1rem",
	fontFamily: "Optical",
};

const h2 = {
	fontSize: "5.7rem",
	fontWeight: 500,
	letterSpacing: "-.4rem",
	fontFamily: "Optical",
};

const h3 = {
	fontSize: "3rem",
	fontWeight: 550,
	fontFamily: "Optical",
};

// toggle buttons & menu titles
const h4 = {
	fontFamily: "Optical",
	fontSize: "1.25rem",
	fontWeight: 600,
	letterSpacing: ".1rem",
};


const footer = {
	fontSize: ".95rem",
	fontWeight: 500,
	letterSpacing: ".025rem",
	fontFamily: "Optical",
	textAlign: "start",
	bgColor: "green",
};

let parentTheme = createTheme({
	typography: {
		h1: h1,
		h2: h2,
		h3: h3,
		h4: h4,
		footer: footer,
	},
});

parentTheme = responsiveFontSizes(parentTheme);

parentTheme.typography.body1 = {
	fontWeight: 100,
	fontFamily: "Optical",
	fontSize: 18
};

parentTheme.typography.footer = {
	fontSize: ".95rem",
	fontWeight: 500,
	letterSpacing: ".025rem",
	fontFamily: "Optical",
	textAlign: "start",
	[parentTheme.breakpoints.down("sm")]: {
		textAlign: "center",
	},
};
parentTheme.typography.h3 = {
	fontWeight: 100,
	fontFamily: "Optical",
	fontSize: '1.5rem',
};
parentTheme.typography.h4 = {
	fontWeight: 600,
	fontFamily: "Optical",
	fontSize: '1.4rem',
};
parentTheme.typography.h1 = {
	fontSize: "4vw",
	fontWeight: 600,
	lineHeight: 1.215,
	fontFamily: "Optical",

	[parentTheme.breakpoints.down("lg")]: {
		fontSize: "5vw",
	},

	[parentTheme.breakpoints.down("md")]: {
		textAlign: "center",
		fontSize: "6vw",
	},

	// mobile
	[parentTheme.breakpoints.down("sm")]: {
		textAlign: "center",
		fontSize: "10vw",
	},
};
////////////////////////////////////////////////////////////////////////////////
// LightMode
////////////////////////////////////////////////////////////////////////////////
export let lightTheme = createTheme({
	...parentTheme,
	palette: {
		mode: "light",

		// buttons
		primary: {
			main: black,
		},
		secondary: {
			light: white,
			main: buttonText,
		},
		text: {
			main: black,
		},
		background: {
			about: landingBlue,
			footer: footerBlue,
			buttonHover: black,
			button: landingBlue,
			menuSelector: white,
			footerBorder: footerBlue,
		},
	},

	components: {
		MuiButton: {
			defaultProps: {
				disableFocusRipple: true,
				disableTouchRipple: true,
			},
			styleOverrides: {
				root: {},
				outlined: {
					width: {xs:"156px", md:"152px"},
					height: {xs:"53px", md:"53px"},
					backgroundColor: "transparent",
					color: black,
					border: "none",
					boxShadow:'black 0px 0px 0px 3px',
					borderRadius: 50,
					"&:hover": {
						backgroundColor: buttonLightBG_hover,
						color: buttonLightT_hover,
					},
					"&.Mui-focusVisible": {
						backgroundColor: 'transparent',
						borderColor: black,
						boxShadow:'black 0px 0px 0px 8px',
						color: black,
					},
					h3: {
						position:"relative",
						top: "0.1em",
						alignContent: "center",
					},
				},
				stringPrimary: {
					width: {xs:"156px", md:"191px"},
					height: {xs:"53px", md:"63px"},
					backgroundColor: black,
					color: buttonLightT,
					boxShadow:'black 0px 0px 0px 3px',
					"&:hover": {
						backgroundColor: buttonLightBG_hover,
						color: buttonLightT_hover,
					},
					"&.Mui-focusVisible": {
						backgroundColor: 'transparent',
						borderColor: black,
						boxShadow:'black 0px 0px 0px 8px',
						// border: ".5em solid black",
						color: black,
					},

					h3: {
					position:"relative",
					top: "0.1em",
					alignContent: "center",
					},
				},
			},
		},
		MuiIconButton: {
			defaultProps: {
				disableRipple: true,
				disableFocusRipple: true,
			},
			styleOverrides: {
				root: {
					"&:hover": {
						backgroundColor: 'transparent',
					},
					svg: {
						borderRadius: 50,
						color: black,
						"&:hover": {
							stroke: 'black',
							fill: landingBlue,
						},
					},
					"&.Mui-focusVisible": {
						backgroundColor: "transparent",
						border:'none',
						boxShadow:'black 0px 0px 0px 3px',
					},
				},	
			},
		},
		MuiListItemButton: {
			defaultProps: {
				disableFocusRipple: true,
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					"&.Mui-focusVisible": {
						border: ".3em solid black",
						borderRadius: 50,
						color: black,
						px: 1,
						py: 1,
						backgroundColor: 'transparent',
					},
					"&:hover": {
						alignContent:"center",
						backgroundColor:'black',
						// bgcolor:'white',
						color:'text.main',
						width :'.7em',
						height:'.7em',
						borderRadius:'100',
						pt:.3,
						mb:.75,
					},
					justifyContent: "flex-start",
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				root:{
					position:"relative",
					top: "0.1em",
					alignContent: "center",
				},
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					position:"relative",
					top: "0.1em",
					alignContent: "center",
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					background: "linear-gradient(0deg, #f6f6f6 30%, #f6f6f6 90%)",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
				},
			},
		},
		MuiIconButton: {
			defaultProps: {
				disableRipple: true,
				disableFocusRipple: true,
			},
			styleOverrides: {
				root: {
					color: black,
					"&:hover": {
						backgroundColor: "transparent",
					},
					svg: {
						borderRadius:50,
						"&:hover": {
							stroke: 'black',
							fill: landingBlue,
						},
					},
					"&.Mui-focusVisible": {
						backgroundColor: "transparent",
						border: '.2em solid black',
					},
				},
			},
		},
		MuiOutlinedInput: {
			disabled: true,
			styleOverrides: {
				root: {
					backgroundColor: "transparent",
					border: "none",
					outline: "none",
				}
			}
		},
	},
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DarkMode
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export let darkTheme = createTheme({
	...parentTheme,

	palette: {
		mode: "dark",
		text: {
			main: white,
		},
		secondary: {
			main: buttonText,
		},
		background: {
			default: black,
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableFocusRipple: true,
			},
			styleOverrides: {
				root: {
				},
				outlined: {
					Width: {xs:"156px",sm:"152px"},
					Height: {xs:"53px", sm:"53px"},
					backgroundColor: "transparent",
					color: white,
					border: ' none',
					boxShadow:'white 0px 0px 0px 3px',
					borderRadius: 50,
					"&:hover": {
						backgroundColor: buttonDarkBG_hover,
						color: buttonDarkT_hover,
						boxShadow:'yellow 0px 0px 0px 3px',
						border:'none',
					},
					"&:focus": {
						border: ".5em solid black",
					},
					h3: {
						position:"relative",
						top: "0.1em",
						alignContent: "center",
					},
				},
				string: {
					Width: {xs:"156px", sm:"191px"},
					Height: {xs:"53px", sm:"63px"},
					backgroundColor: white,
					boxShadow:'white 0px 0px 0px 3px',
					color: black,
					"&:hover": {
						backgroundColor: buttonLightBG_hover,
						color: buttonLightT_hover,
						boxShadow:'yellow 0px 0px 0px 3px',
					},
					"&.Mui-focusVisible": {
						backgroundColor: 'transparent',
						boxShadow:'white 0px 0px 0px 3px',
						h3: {
							color: white,
						},
						'&:hover': {
							h3: {
								color: black,
							},
						},
					},
					h3: {
						color: black,
						position:"relative",
						top: "0.1em",
						alignContent: "center",
					},
				},
				text: {
					'&:hover': {
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
				}
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				defaultProps: {
					disableFocusRipple: true,
				},
				root: {
					"&.Mui-focusVisible": {
						backgroundColor: 'transparent',
						border: ".3em solid white",
						borderRadius: 50,
						color: white,
					},
					
					justifyContent: "flex-start",
					"&:hover": {
						backgroundColor: "transparent",
					},
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
					position:"relative",
					top: "0.1em",
					alignContent: "center",
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					position:"relative",
					top: "0.1em",
					alignContent: "center",
				},
			},
		},
		MuiIconButton: {
			defaultProps: {
				disableRipple: true,
				disableFocusRipple: true,
			},
			styleOverrides: {
				root: {
					color: yellow,
					"&:hover": {
						backgroundColor: "transparent",
					},
					img:{
						borderRadius: 5,
					},
					svg: {
						borderRadius:50,
						"&:hover": {
							stroke: 'black',
							fill: landingBlue,
						},
					},
					"&.Mui-focusVisible": {
						backgroundColor: "transparent",
						border: '.2em solid white',
					},
				},
			},
		},
	},
});
darkTheme = createTheme(darkTheme, {
	palette: {
		mode: "dark",
		background: {
			menuSelector: "#1e1e1e",
			footerBorder: darkTheme.palette.primary,
		},
	},

	components: {
		MuiButton: {
			styleOverrides: {
				stringPrimary: {
					backgroundColor: darkTheme.palette.secondary,
					color: yellow,

					"&:hover": {
						backgroundColor: buttonDarkBG_hover,
						color: buttonDarkT_hover,
						borderColor: buttonDarkT_hover,
					},
				},
			},
		},
	},
});
