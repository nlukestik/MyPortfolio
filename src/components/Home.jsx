import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { animateScroll as scroll } from 'react-scroll'
// import { Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root : {
    margin: "7% auto 10%"
	},
  square : {
    height: "16em",
    width: "16em",
    background: "white",
    borderRadius: "30%",
    border: "1px solid black",
    boxShadow: "0px 4px 4px 0px rgb(0, 0, 0, 0.25)",
    [theme.breakpoints.between(0,769)]: {
      marginTop: "3em",
      height: "12.5em",
      width: "12.5em",
		},
  },
  titleContainer : {
		position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "29%",
    right: "30%",
		[theme.breakpoints.between(0,769)]: {
			top: "16%",
      right: 0,
      left: 0,
      margin: "0 auto",
		},
	},
	title : {
    padding: "0.5em 0.7em",
    background: "white",
    border: "4px solid black",
		fontWeight: "600",
		fontSize: "1.4em",
    color: "#09DBA9",
	},
	avatar : {
    position: "absolute",
    top: "20%",
    left: "44%",
    width: "32%",
		[theme.breakpoints.down('sm')]: {
			width: "100%",
			top: "33%",
			left: 0
		},
	},
  circle :{
    position: "absolute",
    top: "46%",
    left: "15%",
		[theme.breakpoints.down('sm')]: {
			top: "47%",
			left: "57%"
		},
  },
  circleText : {
		display: "inline-grid",
    justifyItems: "center",
    alignItems: "center",
    alignContent: "center",
    height: "8em",
    width: "8em",
    transform: "rotateZ(-23.8deg) !important",
    backgroundColor: "#020202",
    boxShadow: "-2px 4px 4px 0px rgb(0, 0, 0, 0.5)",
    borderRadius: "50%",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
    transitionDuration: "0.3s",
    userSelect: "none",
    
		[theme.breakpoints.down('sm')]: {
      height: "7em",
      width: "7em",
      
		},
		[theme.breakpoints.up('sm')]: {
      cursor: "pointer",
		},
  }
}))

export default function Home() {
	const classes = useStyles()

  return (
    <div className={classes.root}>

      <div className={classes.square} />

      <img src="/images/avatar.png" alt="avatar" className={classes.avatar} />

      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Nicolas Lukestik</h1>
      </div>

			<div className={classes.circle}>
				<div
					className={classes.circleText} 
					onClick={() => scroll.scrollToBottom()}
				>
					<span style={{fontSize: "19px"}}>GET IN<br/></span>
					<span style={{fontSize: "17px"}}>TOUCH</span>
				</div>
			</div>
      
    </div>
  )
};
