import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SwipeableDrawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import { Link, animateScroll as scroll } from 'react-scroll'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'

const useStyles = makeStyles((theme) => ({
	root : {
		"& .MuiPaper-root" : {
			backgroundColor: "#09DBA9 !important",
			width: "100%",
			
			"& .MuiList-root" : {
				padding: 0,
			},
			"& .MuiListItemText-root" : {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "25vh",
				margin: 0,
			},
			
			"& .MuiTypography-body1" : {
				display: "flex",
				color: "black",
				fontSize: 30,
				fontWeight: "bold",
				textDecoration: "none",
			},
		},
	},
	list : {
		position: "absolute",
		height: "100vh",
		width: "100vw"
	},
	menuButton : {
		padding:0
	},
	imgStyle: {
		width: "250px",
		padding: "20px"
	},
}))

export default function DrawerMenu() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  // const toggleDrawer = (event) => {
  //   setOpen( !open )
  // };

	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
		<div>

    {/* <React.Fragment> */}
			<IconButton className={classes.menuButton} aria-label="menu" onClick={() => setOpen(true)}>
				<MenuRoundedIcon color="secondary" style={{fontSize: "3rem"}} />
			</IconButton>
			<SwipeableDrawer
				className={classes.root}
				anchor="left"
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				disableBackdropTransition={!iOS} disableDiscovery={iOS}
			>
				<div
					className={classes.list}
					role="presentation"
					onClick={() => setOpen(false)}
					onKeyDown={() => setOpen(false)}
				>
					{/* <img src="images/Echeverria-Logo2.png" alt="Echeverria Inmobiliaria" className={classes.imgStyle} /> */}

					<List component="nav">
						<ListItem style={{padding: "0px"}} button onClick={() => scroll.scrollToTop()}>
								<ListItemText primary="Home" />
						</ListItem>
						<Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-60} duration={500}>
							<ListItem style={{padding: "0px"}} button onClick={() => setOpen(false)}>
								<ListItemText primary="About me" />
							</ListItem>
						</Link>
						<Link activeClass="active" to="projects" spy={true} smooth={true} offset={-60} duration={500}>
							<ListItem style={{padding: "0px"}} button onClick={() => setOpen(false)}> 
								<ListItemText primary="Projects" />
							</ListItem>
						</Link>
						<ListItem style={{padding: "0px"}} button onClick={() => scroll.scrollToBottom()}>
								<ListItemText primary="Contact" />
						</ListItem>
					</List>
				</div>
			</SwipeableDrawer>
			{/* </React.Fragment> */}
		</div>
  )
}