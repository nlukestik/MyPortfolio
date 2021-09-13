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
		background: "#09DBA9",
		backgroundSize: "cover",
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

  // var rows = [];
  // for (var i = 0; i < 4; i++) {
  //   rows.push(<div className="lineX" key={i} style={{top: `${i * 10}em`, margin: "5em 0"}}/>);
  // }

  // var columns = [];
  // for (var j = 0; j < 10; j++) {
  //   columns.push(<div className="lineY" key={j} style={{left: `${j * 10}em`, margin: "5em 0"}}/>);
  // }

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
        {/* {columns}
        {rows} */}
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