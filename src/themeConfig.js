import { createTheme } from '@material-ui/core/styles'

const myTheme = createTheme({
  palette : {
    // background: {
    //   default: "#656565"
    // },
    primary : {
      light: "#0CF78F",
      main: "#09DBA9",
      dark: "#0A2626"
    },
    secondary : {
      main: "#FFF"
    }
    // text: {
    //   primary: "rgba(0, 0, 0, 0.87)",
    //   secondary: "rgba(0, 0, 0, 0.54)",
    //   disabled: "rgba(0, 0, 0, 0.38)",
    //   hint: "rgba(0, 0, 0, 0.38)"
    // }

  },
	typography : {
		fontFamily: [
			'Poppins',
			'Helvetica',
			'Arial',
			'sans-serif',
		].join(','),
	}
})

export default myTheme