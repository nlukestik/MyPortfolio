import { ThemeProvider } from '@material-ui/styles'
import myTheme from './themeConfig'
import { makeStyles } from '@material-ui/core'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import BackToTop from './components/BackToTop.jsx'
import AboutMe from './components/AboutMe.jsx'
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx'
import Projects from './components/Portfolio.jsx'
import HireMe from './components/HireMe.jsx'

const useStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
		minHeight: "100vh",
		color: "white",
		background: "linear-gradient(22deg, rgba(40,193,25,1) 0%, rgba(13,120,18,1) 100%)",
		backgroundSize: "cover",
	},
	offset: myTheme.mixins.toolbar
})

export default function App() {
	const classes = useStyles()
	
	return (
		
		<ThemeProvider theme={myTheme}>

			<div className={classes.root} id="scroll-top">

				<NavBar />
				
				<Home />
								
			</div>

			<BackToTop />

			<AboutMe />

			<Skills />

			<Resume />

			<Projects />

			<HireMe />

		</ThemeProvider>

	);
}