import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Tooltip } from '@material-ui/core'
import {ReactComponent as SvgCopy} from '../svgicons/copy.svg';


const useStyles = makeStyles((theme) => ({
	mainContainer: {
		display: "flex",
		justifyContent: "center",
		padding: "2.5em 3em",
		backgroundColor: "black",
    backgroundImage: "linear-gradient(to right, rgba(9, 219, 169, 0.3) 2px, transparent 1px), linear-gradient(to bottom, rgba(9, 219, 169, 0.3) 2px, transparent 1px)",
    backgroundSize: "170px 170px",
    backgroundPosition: "115px 90px",
	},
	formContainer: {
		width: "30%",
		margin: "4em 0",
		padding: "2em 7em 3em",
		border: "8px solid #09DBA9",
		background: "white",
		[theme.breakpoints.down('sm')]: {
			width: "80%",
			padding: "1em 2em 1.5em"
		},
		[theme.breakpoints.between('sm','md')]: {
			width: "50%",
			padding: "1.5em 4em 2.5em"
		},
		[theme.breakpoints.up('lg')]: {
			width: "30%",
		},
	},
	formTitle: {
		fontWeight: "bold",
    fontSize: "1.2em",
		justifyContent: "center",
		textAlign: "center",
		[theme.breakpoints.down(802)]: {
			fontSize: 12,
			paddingBottom: "1em",
		},
	},
	formEmail: {
		display: "flex",
		marginBottom:"1em",
		justifyContent: "center",
		background: "#09DBA9",
		border: "2px solid black",
	},
	email: {
		padding: "1em",
		[theme.breakpoints.down(368)]: {
			fontSize: 11,
			padding: "1em 0",
		},
		[theme.breakpoints.between(368,600)]: {
			fontSize: 14,
			padding: "1em .2em",
		},
	},
	formButtons: {
		
	},
	cvButtons: {
		display: "flex",
		width: "100%",
		padding: "0.7em 0.5em",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",	
		color: "#09DBA9",
		border: "2px solid black",
		textDecoration: "none",
		[theme.breakpoints.down('xs')]: {
			fontSize: 14
		},
	},
	copyBtn : {
		minWidth: "0",
		marginLeft: "1em",
		padding:"0",
		[theme.breakpoints.down(717)]: {
			display: "none"
		},
	},
}));

export default function Contact() {
	const classes = useStyles()
  
	const [open, setOpen] = useState(false);
  
  const email = "nicolaslukestik@gmail.com"
  
	const handleTooltipOpen = () => {
		setOpen(true);
		navigator.clipboard.writeText(email)
    setTimeout(function () {setOpen(false)}, 1300);
	};

	return(
		<div className={classes.mainContainer} id="contact">
				
				<Grid className={classes.formContainer}>

					<Grid item md={12} className={classes.formTitle}>
						<h1 style={{marginTop: "0"}}>Send me an email</h1>
					</Grid>

					<Grid item md={12} className={classes.formEmail}>
						<div className={classes.email}>
							<code>
								<a 
									href={`mailto:${email}`} 
									style={{textDecoration: "none", color: "black"}}>
									{email}
								</a>
							</code>

              <Tooltip
                arrow
                placement="right"
                open={open}
                title="Copied to Clipboard">
                <Button 
                  className={classes.copyBtn}
                  disableRipple  
                  onClick={handleTooltipOpen}>
                  <SvgCopy />
                </Button>
              </Tooltip>
						</div>
					</Grid>

					<Grid container spacing={2} className={classes.formButtons}>

						<Grid item sm={6} xs={12} style={{display: "flex"}}>
								<a className={classes.cvButtons} href="CV-Nicolas-Lukestik.pdf" download >
									<code>CV (Español)</code>
								</a>
						</Grid>

						<Grid item sm={6} xs={12} style={{display: "flex"}}>
								<a className={classes.cvButtons} href="Resume-Nicolas-Lukestik.pdf" download>
									<code>Resume (English)</code>
								</a>
						</Grid>

					</Grid>

				</Grid>

		</div>
	)
}