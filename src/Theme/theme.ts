import * as React from 'react';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export enum Colours {
  Crema = '#E6E2D9',
  Crema2 = '#EFE4D2',
  Beige = "#AEA294",
  Beige2 = '#7F7460',
  Verde = '#65684B',
  Verde2 = '#7D8B75',
  Gris = '#54514C',
  Marron = '#946645',
  Negro = '#000000',
  Blanco = '#FFFFFF'
}




export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: 'Futura PT, Segoe UI, Segoe UI Emoji',
    subtitle1: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 700
    }, // Reemplaza 'sans-serif' con una fuente de respaldo
  },
  palette: {
    contrastThreshold: 4.5,

    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: Colours.Beige,
            dark: Colours.Beige2},
          secondary: {main: Colours.Verde},
          info: {main: Colours.Gris},
          success: {main: Colours.Verde2},
          divider: Colours.Beige,
          button:{
            primary: Colours.Verde,
            secondary: Colours.Crema,
            
          },
          text: {
            primary: Colours.Gris,
            secondary: Colours.Gris,
            subtitle1: Colours.Gris
          },
          background: {
            default: Colours.Crema,
            paper: Colours.Crema2,
          },
          appBar: {main: Colours.Crema,
                   primary: Colours.Gris,}
                   
        }
      : {
          // palette values for dark mode
          primary: {main: Colours.Beige},
          secondary: {main: Colours.Crema},
          info: {main: Colours.Crema2},
          success: {main: Colours.Verde2},
          divider: Colours.Beige,
          text: {
            primary: Colours.Crema,
            secondary: Colours.Verde,
          },
          background: {
            default: Colours.Gris,   
            paper: Colours.Gris,         
          },
          appBar: {main: Colours.Negro}

        }),
  },
});
