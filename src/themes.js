import { green } from "@mui/material/colors";
import { createTheme, styled, responsiveFontSizes } from "@mui/material/styles";

// import opt_dark from './public/images/opt_dark'

const landingBlue = "#CBDDFF";
const footerBlue = "#E8EFFC";
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



const footer = {
	fontWeight: 500,
	fontFamily: "Optical",
};

let parentTheme = createTheme({

});

parentTheme = responsiveFontSizes(parentTheme);

parentTheme.typography.body1 = {
	fontWeight: 110,
	fontFamily: "Optical",
	fontSize: 18
};

parentTheme.typography.h2 = {
	fontWeight: 130,
	fontFamily: "Optical",
	fontSize: '1.4rem',
	// fontSize: '1.8vw',

	[parentTheme.breakpoints.down("lg")]: {
		fontSize: '1.5rem',
		// fontSize: '4vw',
	},

	[parentTheme.breakpoints.down("md")]: {
		textAlign: "center",
		fontSize: '1.3rem',
	},
	// mobile
	[parentTheme.breakpoints.down("sm")]: {
		textAlign: "center",
		// fontSize: "1.25rem",
		fontSize: "6vw",

	},
};
parentTheme.typography.h3 = {
	fontWeight: 140,
	fontFamily: "Optical",
	fontSize: '1.4rem',
	letterSpacing: '.24em',
	textTransform: 'uppercase',
};
parentTheme.typography.h4 = {
	fontWeight: 140,
	fontFamily: "Optical",
	fontSize: '1.4rem',
};
parentTheme.typography.h1 = {
	fontSize: "4vw",
	lineHeight: 1.215,
	fontFamily: "Optical",
	fontWeight: 140,

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
			primary: black,
			link: '#4A4E58',
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
					// maxWidth: {xs:"156px", md:"152px"},
					// maxHeight: {xs:"53px", md:"53px"},
					// width:'100%',
					backgroundColor: "transparent",
					color: black,
					border: "none",
					boxShadow:'black 0px 0px 0px 3px',
					borderRadius: 50,
					"&:hover": {
						border: "none",
						backgroundColor: buttonLightBG_hover,
						color: buttonLightT_hover,
					},
					// "&:focus": {
					// 	border: '7px solid white',
					// 	boxShadow:'black 0px 0px 0px 8px',
					// 	color: yellow,
					// 	backgroundColor: black,
					// },
					"&.Mui-focusVisible":{
						border: '7px solid white',
						boxShadow:'black 0px 0px 0px 8px',
						color: yellow,
						backgroundColor: black,
					},
					h2: {
						...parentTheme.typography.h2,
						position:"relative",
						top: "0.1em",
						alignContent: "center",
					},
				},
				string: {
					// width: {xs:"90px", md:"191px"},
					// height: {xs:"53px", md:"63px"},
					backgroundColor: black,
					color: buttonLightT,
					boxShadow:'black 0px 0px 0px 3px',
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
					...parentTheme.typography.h2,
					position:"relative",
					top: "0.1em",
					alignContent: "center",
					},
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
			primary: white,
			link:'#C3D0EF',
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
					maxWidth: {xs:"156px",sm:"152px" },
					maxHeight: {xs:"53px", sm:"53px"},
					backgroundColor: "transparent",
					color: white,
					border: 'none',
					boxShadow:'white 0px 0px 0px 4px',
					borderRadius: 50,
					"&:hover": {
						backgroundColor: yellow,
						color: buttonDarkT_hover,
						boxShadow:'#FAFB45 0px 0px 0px 3px',
						border:'none',
					},
					// "&:focus": {
					// 	border: '7px solid black',
					// 	boxShadow:'yellow 0px 0px 0px 8px',
					// 	backgroundColor: yellow,
					// 	color: black,
					// },
					"&.Mui-focusVisible":{
							border: '7px solid black',
							boxShadow:'#FAFB45 0px 0px 0px 8px',
							backgroundColor: yellow,
							color: black,
							'&:hover': {
								h2: {
									...parentTheme.typography.h2,
									position:"relative",
									top: "0.1em",
									alignContent: "center",
								},
							},
					},
					h2: {
						...parentTheme.typography.h2,
						position:"relative",
						top: "0.1em",
						alignContent: "center",
					},

				},
				string: {
					maxWidth: {xs:"156px", sm:"191px"},
					maxHeight: {xs:"53px", sm:"63px"},
					backgroundColor: white,
					boxShadow:'white 0px 0px 0px 3px',
					color: black,
					"&:hover": {
						backgroundColor: buttonLightBG_hover,
						color: buttonLightT_hover,
						boxShadow:'#FAFB45 0px 0px 0px 3px',
					},
					"&.Mui-focusVisible": {
						border: '7px solid black',
						boxShadow:'#FAFB45 0px 0px 0px 8px',
						backgroundColor: yellow,
						color: black,
						'&:hover': {
							h2: {
								...parentTheme.typography.h2,
								position:"relative",
								top: "0.1em",
								alignContent: "center",
								color: black,
							},
						},
					},
					h2: {
						...parentTheme.typography.h2,
						position:"relative",
						top: "0.1em",
						alignContent: "center",
						color: black,
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

	
	},
});

darkTheme.typography.h1 = {
	...parentTheme.typography.h1,
	fontWeight: 130,
};

darkTheme.typography.body1 = {
	...parentTheme.typography.body1,
	fontWeight: 100,
};

darkTheme.typography.h2 = {
	...parentTheme.typography.h2,
	letterSpacing:'.01rem',
	fontWeight: 120,
};
darkTheme.typography.h3 = {
	...parentTheme.typography.h3,
	fontWeight: 130,
};
darkTheme.typography.h4 = {
	...parentTheme.typography.h4,
	fontWeight: 130,
};

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
