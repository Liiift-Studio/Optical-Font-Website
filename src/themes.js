import { green } from "@mui/material/colors";
import { createTheme, styled, responsiveFontSizes } from "@mui/material/styles";

// import opt_dark from './public/images/opt_dark'

const landingBlue = "#CBDDFF";
const footerBlue = "#C8D8F6";
const black = "#111111";
const buttonText = "#111111";
const buttonBackDark = "#FCFF55";
const white = "#FFFFFF";

export const yellow = "#FAFB45";
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
	fontSize: "3rem",
	fontWeight: 550,
	fontFamily: "Optical",
};

// toggle buttons & menu titles
const h3 = {
	fontFamily: "Optical",
	fontSize: "1.25rem",
	fontWeight: 600,
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
		h2: h2,
		h3: h3,
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
parentTheme.typography.h2 = {
	fontWeight: 120,
	fontFamily: "Optical",
	fontSize: '1.5rem',
};
parentTheme.typography.h3 = {
	fontWeight: 600,
	fontFamily: "Optical",
	fontSize: '1.4rem',
	letterSpacing: '.24em',
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
		MuiButtonBase: {
			disableFocusRipple: true,
			disableRipple: true,
		},
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
					// border: "black solid 4px",
					boxShadow:'black 0px 0px 0px 4px',
					borderRadius: 50,
					"&:hover": {
						// border: "black solid 4px",
						backgroundColor: buttonLightBG_hover,
						color: buttonLightT_hover,
					},
					"&.Mui-focusVisible": {
						border: '7px solid white',
						boxShadow:'black 0px 0px 0px 8px',
						color: yellow,
						backgroundColor: black,
					},
					h2: {
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
					boxShadow:'black 0px 0px 0px 4px',
					"&:hover": {
						backgroundColor: buttonLightBG_hover,
						color: buttonLightT_hover,
					},
					"&.Mui-focusVisible": {
						border: '7px solid white',
						boxShadow:'black 0px 0px 0px 8px',
						color: yellow,
						backgroundColor: black,
					},

					h2: {
					position:"relative",
					top: "0.1em",
					alignContent: "center",
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
					justifyContent: "flex-start",
					"&.Mui-focusVisible": {
						boxShadow:'black 0px 0px 0px 4px',
						borderRadius: 50,
						backgroundColor: 'transparent',
						color: black,
					},
					"&:hover": {
						backgroundColor: 'transparent',
					},
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
						top: "0.1em",
						borderRadius:50,
						"&:hover": {
							stroke: 'black',
							strokeWidth: '5px',
							fill: yellow,
						},
					},
					"&.Mui-focusVisible": {
						backgroundColor: "transparent",
						boxShadow:'black 0px 0px 0px 8px', 
						svg: {
							stroke: 'black',
							strokeWidth: '5px',
							fill: yellow,
						},
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
		MuiToggleButton:{
			styleOverrides: {
				root: {
					color: black,
					border: "none",
					'&.Mui-selected': {
						backgroundColor: "transparent",
						'&:hover': {
							backgroundColor: "transparent",
						},
					},
					'&:hover': {
						backgroundColor: "transparent",
						color: black,
					},
					"&.Mui-focusVisible": {
						'.MuiTypography-root': {
							padding: '0.5em',
							boxShadow:'black 0px 0px 0px 4px',
							borderRadius: 100,
							backgroundColor: 'transparent',
							color: black,
						},
					},
				},
			},
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
					Width: {xs:"156px",sm:"152px" },
					Height: {xs:"53px", sm:"53px"},
					backgroundColor: "transparent",
					color: white,
					border: ' none',
					boxShadow:'white 0px 0px 0px 4px',
					borderRadius: 50,
					"&:hover": {
						backgroundColor: buttonDarkBG_hover,
						color: buttonDarkT_hover,
						boxShadow:'yellow 0px 0px 0px 3px',
						border:'none',
					},
					"&:focus": {
						border: '7px solid black',
						boxShadow:'yellow 0px 0px 0px 8px',
						backgroundColor: yellow,
						color: black,
					},
					h2: {
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
						border: '7px solid black',
						boxShadow:'yellow 0px 0px 0px 8px',
						backgroundColor: yellow,
						color: black,
						'&:hover': {
							h2: {
								color: black,
							},
						},
					},
					h2: {
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
					justifyContent: "flex-start",
					"&.Mui-focusVisible": {
						backgroundColor: 'transparent',
						boxShadow:'white 0px 0px 0px 4px',
						borderRadius: 50,
						color: white,
					},
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
						top: "0.1em",
						borderRadius:50,
						"&:hover": {
							stroke: 'transparent',
							fill: white,
						},
					},
					"&.Mui-focusVisible": {
						backgroundColor: "transparent",
						boxShadow:'white 0px 0px 0px 7px', 
						svg: {
							stroke: 'transparent',
							fill: white,
						},

					},
				},
			},
		},
		MuiToggleButton:{
			styleOverrides: {
				root: {
					border: "none",
					'&.Mui-selected': {
						backgroundColor: "transparent",
						'&:hover': {
							backgroundColor: "transparent",
						},
					},
					'&:hover': {
						backgroundColor: "transparent",
						color: white,
					},
					"&.Mui-focusVisible": {
						'.MuiTypography-root': {
							padding: '0.5em',
							boxShadow:'white 0px 0px 0px 4px',
							borderRadius: 100,
							backgroundColor: 'transparent',
							color: white,
						},
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
