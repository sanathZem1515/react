import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const defaultTheme = createTheme();

const baseTheme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: "sans-serif",
    h4:{
      paddingTop: "30px",
      paddingBottom: "20px",
      fontSize: "2.2rem",
      color: "#03314B",
      fontWeight: 600
    }
  },
  spacing:10,
  container: {
    primary: {
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
    secondary: {
      borderRadius: defaultTheme.spacing(1),
      padding: defaultTheme.spacing(2),
    },
  },
  palette: {
    primary: {
      main: "#22c870",
    }
  },
  overrides:{
    MuiTypography:{
      root:{
        fontFamily:"Raleway"
      }
    },
    MuiContainer:{
      root:{
        width:944
      }
    },
    MuiAppBar:{
        root:{
          width:700,
          backgroundColor:"#FFFFFF"
        },
        colorPrimary:{
          backgroundColor:"#FFFFFF"
        }
    },
    MuiToolbar:{
      gutters:{
        padding:0,
        paddingLeft:"0px",
        paddingRight:0
      },
      root:{
        textTransform:'capitalize'
      },
      regular:{
      '@media (min-width: 600px)':{
        paddingLeft:"0px"
      }
    }
    },
    MuiList: {
      root: {
          backgroundColor: '#F1F6F4'
      },
      padding:{
        paddingLeft:"16px",
      }
    },
    MuiCardMedia :{
      media:{
        height:"100%",
        width:"100%"
      }
    },
    MuiButtonBase:{
      root:{
        borderRadius:"0px",
        paddingTop: "12px"
      }
    },
    MuiIconButton:{
      root:{
        paddingTop: "20px",
        fontSize: "2px"
      }},
    MuiButton:{
      root:{
        textTransform:'capitalize',
        disableElevation:true,
        fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1,
      color: "#03314b",
      '&:hover': {
        textDecoration:"underline #22c870",
        textDecorationThickness:"2px",
        paddingTop: "12px"
      }},
      label:{
        color:"black",
        active:{
          color: "#22c870",
        }
    
      },
      containedPrimary:{
        borderRadius:"0px",
        backgroundColor:"#FFFFFF",
        color:"#0365F2",
        width: "100px",
        height: "30px",
        '&:hover': {
          textDecoration:"none",
          textDecorationThickness:"2px",
          color:"#FFFFFF",
          backgroundColor:" #22c870"
        }
      },
      text: {
        paddingRight: "30px",
        textAlign: "center",
        paddingTop: "15px",
      },
      containedSizeSmall:{
        padding:"11px 10px",
        fontWeight:"bold"
      },
      textPrimary:{
        textAlign: "center"
      }
      
    },
    MuiCardActions:{
      root:{
        padding:"3px",
        border:"1px solid #BAC8CE",
        borderRadius:"0px",
        textAlign: "center",
        '&:hover': {
          backgroundColor:"#22c870"
        }
      }
    },
    MuiDialog:{
      paper:{
        width:"400px"
      }
    },
    MuiPaper :{
      root:{
          boxShadow: "none",
          border: "0px"
      }},
    MuiTab :{
      root:{
          fontSize: "1.125rem",
          padding:"0px",
          boxShadow: "none",
          border: "0px"
      },
      textColorPrimary: {
        
          textTransform: "none",
          minWidth: "32%",
          '&$selected': {
              color: "#22c870",
          },
          '&:hover': {
              borderColor: "#6d787e"
          },
      },
      wrapper: {
        paddingLeft:"10px",
          alignItems: "baseline",
          paddingBottom: "0px",
          '&:active': {
            color: "#22c870"
        },
        '&$selected': {
          color: "#22c870",
      },
          
      }
    },
    MuiGrid:{
      root:{
        width:"100%",
      }
    },
    MuiCardContent:{
      root:{
        border:"1px solid #BAC8CE"
      }
    },
    MuiListItemIcon:{
      root:{
        paddingRight:"0px",
        paddingLeft: "0px",
        marginLeft: "0px"
      }
    },
      MuiListItem:{
        gutters:{
          paddingLeft:"0px",
        },
      }
    }
  }
);

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;