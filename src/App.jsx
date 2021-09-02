import React from 'react'
import { makeStyles, useTheme} from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import NavBar from './components/NavBar.jsx'
import BackToTop from './components/BackToTop.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'
import Projects from './components/Portfolio.jsx'
import HireMe from './components/HireMe.jsx'

const useStyles = makeStyles({
	section : {
		height: "48em",
		alignItems: "center",
		color: "white",
		background: "rgb(13,120,18)",
		background: "linear-gradient(90deg, rgba(13,120,18,1) 0%, rgba(26,153,22,1) 20%, rgba(26,153,22,1) 80%, rgba(13,120,18,1) 100%)"
	},
	presentation : {
		margin: "12em 0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	meText : {
		marginRight: "1em",
		justifyContent: "center",
		fontSize: "2.5em",
		lineHeight: "1.5em"
	},
	title : {
		margin: "0",
		fontWeight: "600",
		// fontSize: "3em"
	},
	subtitle : {
		margin: "0",
		color: "#b8b8b8",
		// fontSize: "1.2em"
	},
	p : {
		margin: "0",
		maxWidth: "25em",
		fontSize: "0.5em",
		lineHeight: "1.2em",
		fontWeight: "200",
		color: "#fff"
	},
	meImage : {
		display: "flex",
		alignItems: "center",
	}
})

export default function App() {
	const classes = useStyles()

	return (
		<>
			<section className={classes.section}>
				<NavBar />

				<Grid container className={classes.presentation}>
					<Grid item xl={5} className={classes.meText}>
						<div>
							<h1 className={classes.title}>Hi, I'm Nico</h1>
							<h6 className={classes.subtitle}>Frontend Developer</h6>
							<p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
						</div>
					</Grid>

					<Grid item xl={5} className={classes.meImage}>
						<img src="images/NL.png" alt="" style={{height:"15em"}} />
					</Grid>
				</Grid>

			</section>
			
			<BackToTop />

			<AboutMe />

			<Skills />

			<Resume />

			<Projects />

			<HireMe />
			
		</>
	);
}