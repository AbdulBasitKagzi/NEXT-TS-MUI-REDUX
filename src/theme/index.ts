import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
      dark: '#212121',
      light: '#1B2437',
      contrastText: '#111827'
    },
    secondary: {
      main: '#FF705C',
      light: '#9E9E9E',
      dark: '#8E8E93',
      contrastText: '#E15113'
    },
    info: {
      main: '#616161',
      dark: '#000000',
      light: '#F9FAFB',
      contrastText: '#EFEFF4'
    },
    success: {
      main: '#FFFFFF',
      light: '#EEEEEE',
      dark: '#E0E0E0',
      contrastText: '#E5E5EA'
    },
    error: {
      main: '#757575',
      dark: '#616161',
      light: '#7E92B2',
      contrastText: '#4F4F4F'
    },
    warning: {
      main: '#1F2937',
      light: '#4B5563',
      dark: '#EB5757',
      contrastText: '#C4C4C4'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif, Jost, Inter'
  }
});

export default theme;
