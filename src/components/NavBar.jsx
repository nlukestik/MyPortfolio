import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-scroll'
import ScrollToChangeColor from './ScrollToChangeColor'

const useStyles = makeStyles(myTheme => ({
  navBar : {
    justifyContent: "center"
  },
  hireMe : {
    background: "white",
    color: "#00883a !important",
    marginLeft: "1.3em !important",
    padding: "0.4em 1em",
    borderRadius: "10em"
  },
  // offset: myTheme.mixins.toolbar
}))


export default function Navbar(props) {
	const classes = useStyles()

	return (
    <div >
      
      <ScrollToChangeColor>
        <AppBar>
          <Toolbar className={classes.navBar}>

            <div className="navToolbar">
              <div style={{flexGrow: "1"}}>
                {/* <img src="images/NL.png" alt="" style={{height:"4em"}} /> */}
              </div>
              
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

							<Link
								activeClass="active"
								to="skills"
								spy={true}
								smooth={true}
								offset={-40}
								duration={500}
								className="nav-item"
							>
								Skills
							</Link>

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
            
          </Toolbar>
        </AppBar>
      </ScrollToChangeColor>

      {/* <div className={classes.offset}></div> */}

    </div>
	);
}