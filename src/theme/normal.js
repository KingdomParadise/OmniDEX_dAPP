// import { createMuiTheme } from '@material-ui/core/styles'
// import { red } from '@material-ui/core/colors'
// import { createTheme } from '@material-ui/core/styles'

import { createTheme } from "@mui/material"
import { red } from "@mui/material/colors"


// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#cc4444',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    },
    titleBar: {
      main: '#eeeeee',
      contrastText: '#222222',
    },
  },
})

export default theme