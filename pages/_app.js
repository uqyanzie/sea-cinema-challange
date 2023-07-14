import '@/styles/globals.css'
import Layout from './components/Layout/Layout';


import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9B0000",
    },
    secondary: {
      main: "#58585B",
    },
    text: {
      secondary: "#9B0000",
    },
    background: {
      default: "#fff",
    },
  },
  props: {
    MuiAppBar: {
      color: "secondary",
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  return (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
  
  )
}
