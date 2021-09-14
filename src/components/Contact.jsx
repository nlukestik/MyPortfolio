import React from 'react'
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
	},
	formTitle: {
		fontWeight: "bold",
    fontSize: "1.5em",
		justifyContent: "center",
		textAlign: "center",
	},
	formEmail: {
		display: "flex",
		marginBottom:"1em",
		justifyContent: "center",
		background: "#09DBA9",
		border: "2px solid black"
	},
	email: {
		padding: "1em",
	},
	formButtons: {
		
	},
	cvButtons: {
		width: "100%",
		padding: "0.7em 0.5em",
		textAlign: "center",
		alignItems: "center",	
		color: "#09DBA9",
		border: "2px solid black",
		textDecoration: "none"
	},
	copyBtn : {
		minWidth: "0",
		marginLeft: "1em",
		padding:"0",
	}
}));

export default function Contact() {
	const classes = useStyles()
  
	const [open, setOpen] = React.useState(false);
  
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
									href="mailto:nicolaslukestik@gmail.com" 
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

						<Grid item lg={6} md={6} sm={12} style={{display: "flex"}}>
								<a className={classes.cvButtons} href="CV-Nicolas-Lukestik.pdf" download >
									<code>CV (Spanish)</code> 
								</a>
						</Grid>

						<Grid item lg={6} md={6} sm={12} style={{display: "flex"}}>
								<a className={classes.cvButtons} href="Resume-Nicolas-Lukestik.pdf" download>
									<code>Resume (English)</code>
								</a>
						</Grid>

					</Grid>

				</Grid>

		</div>
	)
}