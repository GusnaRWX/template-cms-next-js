import { createTheme } from '@mui/material/styles'

import EncodeTextBlack from '@/fonts/EncodeSans-Black.ttf'
import EncodeTextBold from '@/fonts/EncodeSans-Bold.ttf'
import EncodeTextExtraBold from '@/fonts/EncodeSans-ExtraBold.ttf'
import EncodeTextExtraLight from '@/fonts/EncodeSans-ExtraLight.ttf'
import EncodeTextLight from '@/fonts/EncodeSans-Light.ttf'
import EncodeTextMedium from '@/fonts/EncodeSans-Medium.ttf'
import EncodeTextRegular from '@/fonts/EncodeSans-Regular.ttf'
import EncodeTextSemiBold from '@/fonts/EncodeSans-SemiBold.ttf'
import EncodeTextThin from '@/fonts/EncodeSans-Thin.ttf'

export const palette = {
  primary: {
    light: '#8D9EFF',
    main: '#8D72E1',
    dark: '#6C4AB6',
    contrastText: '#fff'
  },
  secondary: {
    light: '#F2F7DA',
    main: '#BDD646',
    dark: '#262B0E',
    contrastText: '#fff'
  },
  info: {
    light: '#CCEDF8',
    main: '#00A3DD',
    dark: '#00212C#00212C',
    contrastText: '#fff'
  },
  success: {
    light: '#E8F6EE',
    main: '#18A957',
    dark: '#021109',
    contrastText: '#fff'
  },
  warning: {
    light: '#FFF8EB',
    main: '#FFBB38',
    dark: '#191306',
    contrastText: '#fff'
  },
  error: {
    light: '#FCE8EC',
    main: '#DF1642',
    dark: '#160207',
    contrastText: '#fff'
  },
  grey: {
    light: '#F5F5F5',
    main: '#BDBDBD',
    dark: '#323232',
    contrastText: '#fff'
  },
  background: {
    default: '#f5f5f5'
  },
  white: {
    light: '#fff',
    main: '#fff',
    dark: '#fff',
    contrastText: '#000'
  }
}

const initialStateTheme = {
  palette: palette,
  typography: {
    fontFamily: 'Comfortaa Regular, Roboto',
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
       @font-face {
        font-family: 'Comfortaa Black';
        font-style: normal;
        font-weight: 300;
        src: url(${EncodeTextBlack}) format('truetype')
       }

       @font-face {
        font-family: 'Comfortaa Bold';
        font-style: normal;
        font-weight: 400;
        src: url(${EncodeTextBold}) format('truetype')
       }

       @font-face {
        font-family: 'Comfortaa ExtraBold';
        font-style: normal;
        font-weight: 700;
        src: url(${EncodeTextExtraBold}) format('truetype')
       }

       @font-face {
        font-family: 'Comfortaa ExtraLight';
        font-style: normal;
        font-weight: 300;
        src: url(${EncodeTextExtraLight}) format('truetype')
       }

       @font-face {
        font-family: 'Comfortaa Light';
        font-style: normal;
        font-weight: 300;
        src: url(${EncodeTextLight}) format('truetype')
       }

       @font-face {
        font-family: 'Comfortaa Medium';
        font-style: normal;
        font-weight: 400;
        src: url(${EncodeTextMedium}) format('truetype')
       }

       @font-face {
        font-family: 'Comfortaa Regular';
        font-style: normal;
        font-weight: 300;
        src: url(${EncodeTextRegular}) format('truetype')
       }

       @font-face {
        font-family: 'Comfortaa SemiBold';
        font-style: normal;
        font-weight: 500;
        src: url(${EncodeTextSemiBold}) format('truetype')
       }

       @font-face {
        font-family: 'Comfortaa Thin';
        font-style: normal;
        font-weight: 300;
        src: url(${EncodeTextThin}) format('truetype')
       }

      `
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '35px',
          fontSize: '14.6px',
          lineHeight: '19.6px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Comfortaa Regular',
          border: 'none',
          borderRadius: '6px',
          height: 'auto',
          minWidth: '80px',
          minHeight: '32px',
          cursor: 'pointer',
          '&:hover': {
            border: 'none',
            transition: 'opacity .2s linear',
            opacity: '0.8'
          },
          '&:disabled': {
            transition: 'opacity 0 linear',
            backgroundColor: '#BDBDBD',
            border: '1px solid #BDBDBD',
            cursor: 'default',
            color: '#fff'
          }
        },
        outlined: {
          backgroundColor: '#fff',
          color: palette.primary.main,
          minHeight: '32px',
          border: `1px solid ${palette.primary.main}`,
          '&:hover': {
            transition: 'background-color .2s linear',
            backgroundColor: palette.primary.main,
            color: '#fff',
            border: `1px solid ${palette.primary.main}`
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&.MuiTableCell-head': {
            backgroundColor: palette.primary.main,
            color: '#fff',
            fontFamily: 'Helvetica 73',
            fontSize: '14px',
            lineHeight: '19.6px'
          },
          '&.MuiTableCell-body': {
            fontFamily: 'SIG Text',
            fontSize: '14px',
            lineHeight: '19.6px'
          }
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: palette.primary.main,
            '&:hover': {
              backgroundColor: palette.primary.main
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#67b2ff'
          },
          '&:hover': {
            color: '#67b2ff'
          }
        }
      }
    }
  }
}

const theme = createTheme(initialStateTheme)

export default theme