import { ThemeProvider } from '@material-ui/styles'
import myTheme from './themeConfig'
import { makeStyles } from '@material-ui/core'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import BackToTop from './components/BackToTop.jsx'
// import AboutMe from './components/AboutMe.jsx'
// import Skills from './components/Skills.jsx'
// import Resume from './components/Resume.jsx'
// import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const useStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
		minHeight: "75vh",
		color: "white",
		background: "#09DBA9",
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

			{/* <AboutMe /> */}

			{/* <Skills /> */}

			{/* <Projects /> */}

			<Contact />

		</ThemeProvider>

	);
}