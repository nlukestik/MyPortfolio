import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core'
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
  offset: myTheme.mixins.toolbar
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
                
              <a id="nav-aboutMe" href="#aboutMe">About me</a>
              <a id="nav-skills" href="#skills">Skills</a>
              <a id="nav-projects" href="#projects">Projects</a>
              {/* <a id="nav-contact" href="#contact" className={classes.hireMe}>hire me!</a> */}

            </div>
            
          </Toolbar>
        </AppBar>
      </ScrollToChangeColor>

      <div className={classes.offset}></div>

    </div>
	);
}