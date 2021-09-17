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

const useStyles = makeStyles({
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
		margin: "10rem auto",
    flexWrap: "wrap",
    boxSizing: "border-box",
		width: "70%",
    maxWidth: "65em"
	},
})

export default function App() {
	const classes = useStyles()

	return (
    <ThemeProvider theme={myTheme}>

      <div className={classes.home} id="scroll-top">
      
        <NavBar />
        <Home />

      </div>


      <div className={classes.section}>
				<AboutMe id="aboutMe" />
			</div>

			{/* <div className={classes.section}>
      	<Skills id="skills" />
			</div> */}

      <div className={classes.section}>
				<Projects id="projects"/>
			</div>
      
			<Contact id="contact"/>

      <BackToTop />

    </ThemeProvider>

	);
}