import { ThemeProvider } from '@material-ui/styles'
import myTheme from './themeConfig'
import { makeStyles } from '@material-ui/core'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import BackToTop from './components/BackToTop.jsx'
import AboutMe from './components/AboutMe.jsx'
// import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
// import SocialsFAB from './components/SocialsFAB'

const useStyles = makeStyles((theme) => ({
	home: {
		display: "flex",
		alignItems: "center",
		minHeight: "75vh",
		color: "white",
    backgroundColor: "#09DBA9",
    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.2) 2px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 2px, transparent 1px)",
    backgroundSize: "170px 170px",
    backgroundPosition: "115px 90px",
	},
	section : {
		margin: "11rem auto 5em",
    flexWrap: "wrap",
    boxSizing: "border-box",
    maxWidth: "70%",
		[theme.breakpoints.down('sm')]: {
			maxWidth: "85%",
		},
	},
}))

export default function App() {
	const classes = useStyles()

	return (
    <ThemeProvider theme={myTheme}>

      <div className={classes.home} id="scroll-top">
      
        <NavBar />
        <Home />

      </div>


      <div className={classes.section}>
				<AboutMe />
			</div>

			{/* <div className={classes.section}>
      	<Skills />
			</div> */}

      <div className={classes.section}>
				<Projects />
			</div>
      
			<Contact />

      <BackToTop />
			{/* <SocialsFAB /> */}

    </ThemeProvider>

	);
}