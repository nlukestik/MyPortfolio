import { useState, useEffect } from 'react'
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
	root: {
		display: "flex",
		alignItems: "center",
		minHeight: "75vh",
		color: "white",
		backgroundColor: "#09DBA9",
    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.2) 2px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 2px, transparent 1px)",
    backgroundSize: "170px 170px",
    backgroundPosition: "115px 90px",
	},
})

export default function App() {
	const classes = useStyles()
	
	const [offsetY, setOffsetY] = useState(0)
	const handleScroll = () => setOffsetY(window.pageYOffset)
	
	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (

		<section className="Parallax">

			<div className="Parallax__bg">
				<div className="Parallax__bg__1" />
				<div className="Parallax__bg__2" />
			</div>

			<div
				className="Parallax__grid" 
				style={{ transform: `translateY(${offsetY * 0.5}px)` }}
			>
      </div>

			<div className="Parallax__content">
				<ThemeProvider theme={myTheme}>

					<div className={classes.root} id="scroll-top">
					

						<NavBar />
						<Home />

					</div>

					<BackToTop />

					<AboutMe />

					{/* <Skills /> */}

					<Projects />

					<Contact />

				</ThemeProvider>
			</div>

		</section>

	);
}