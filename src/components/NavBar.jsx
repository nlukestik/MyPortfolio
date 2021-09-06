import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, CssBaseline } from '@material-ui/core'
import ScrollToChangeColor from './ScrollToChangeColor'

const useStyles = makeStyles(myTheme => ({
	mainNav : {
    backgroundColor: "transparent", 
  },
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
    <div>
      <CssBaseline />
      
      <ScrollToChangeColor>
        <AppBar position="fixed">
          <Toolbar className={classes.navBar}>

            <div className="navToolbar">
              <div style={{flexGrow: "1"}}>
                <a href="/">NL</a>
              </div>
                
              <a href="#aboutMe">about me</a>
              <a href="#skills">skills</a>
              <a href="#portfolio">portfolio</a>
              <a href="#hireMe" className={classes.hireMe}>hire me!</a>

            </div>
            
          </Toolbar>
        </AppBar>

        <div className={classes.offset}></div>
      </ScrollToChangeColor>
    </div>
	);
}