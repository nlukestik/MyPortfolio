import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
// import AppBar from './AppBar.jsx'

const useStyles = makeStyles({
	container : {
    paddingLeft: "3em",
    paddingRight: "3em",
    justifyContent: "space-between",
    alignItems: "center",
	},
  hireMe : {
    background: "white",
    color: "#00883a",
    marginLeft: "1.3em",
    padding: "0.4em 1em",
    borderRadius: "10em"
  }
})

export default function Navbar(props) {
	const classes = useStyles()
	// const theme = useTheme()

	// const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<>
			{/* Responsive Navbar */}
			{/* {isMobile ? (
				<>
					<AppBar />
				</>
			) : ( */}
				<>
					{/* NavBar */}
					<div >
						<nav>
							<Grid container className={classes.container}>
								<Grid item xl={2}>
									NL
								</Grid>
								<Grid item xl={10} >
									<ul>
                    <a href="#aboutMe">about me</a>
                    <a href="#skills">skills</a>
                    <a href="#portfolio">portfolio</a>
                    <a href="#hireMe" className={classes.hireMe}>hire me!</a>
                  </ul>
								</Grid>
							</Grid>
						</nav>
					</div>
				</>
			{/* )} */}
		</>
	);
}