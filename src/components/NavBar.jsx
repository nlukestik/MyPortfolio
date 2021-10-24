import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link, animateScroll as scroll } from 'react-scroll'
import DrawerMenu from './DrawerMenu'
import ScrollToChangeColor from './ScrollToChangeColor'

const useStyles = makeStyles(theme => ({
  navBar : {
    justifyContent: "center",
  },
	menuDeskContainer : {
		display: "flex",
		maxWidth: 1300,
		width: "100%",
		alignItems: "center",

		"& .nav-item" : {
			marginLeft: "1em",
			backgroundColor: "white",
			color: "black",
			border: "3px solid black",
			padding: "0.6em 1.2em",
			fontSize: 15,
			fontWeight: "bold",
			textDecoration: "none",
			cursor: "pointer",
			"&:hover" : {
				backgroundColor: "black",
				color: "white",
				transition: "ease-in 0.1s"
			}
		},

		[theme.breakpoints.between(0,769)]: {
			display: "none"
		},
		[theme.breakpoints.up(769)]: {
			display: "flex",
		},	
	},
	drawerMenuContainer : {
		[theme.breakpoints.between(0,769)]: {
			display: "block",
			position: "fixed",
			top: 6,
			right: 15,
		},
		[theme.breakpoints.up(769)]: {
			display: "none"
		},
	},

}))

export default function Navbar(props) {
	const classes = useStyles()

	return (
    <div style={{zIndex: 2}}>
      
      <ScrollToChangeColor>
        <AppBar>
          <Toolbar className={classes.navBar}>

            <div className={classes.menuDeskContainer}>
              <div style={{flexGrow: "1"}}>
                {/* <img src="images/NL.png" alt="" style={{height:"4em"}} /> */}
              </div>
              
							<Link
								activeClass="active"
								onClick={() => scroll.scrollToTop()}
								spy={true}
								smooth={true}
								duration={500}
								className="nav-item"
							>
								Home
							</Link>

							<Link
								activeClass="active"
								to="aboutMe"
								spy={true}
								smooth={true}
								offset={-40}
								duration={500}
								className="nav-item"
							>
								About me
							</Link>

							{/* <Link
								activeClass="active"
								to="skills"
								spy={true}
								smooth={true}
								offset={-40}
								duration={500}
								className="nav-item"
							>
								Skills
							</Link> */}

							<Link
								activeClass="active"
								to="projects"
								spy={true}
								smooth={true}
								offset={-40}
								duration={500}
								className="nav-item"
							>
								Projects
							</Link>

            </div>
						<div className={classes.drawerMenuContainer}>
								<DrawerMenu />
						</div>
            
          </Toolbar>
        </AppBar>
      </ScrollToChangeColor>

      {/* <div className={classes.offset}></div> */}

    </div>
	);
}