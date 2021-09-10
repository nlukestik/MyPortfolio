import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Tooltip, ClickAwayListener } from '@material-ui/core'
import {ReactComponent as SvgCopy} from '../svgicons/copy.svg';


const useStyles = makeStyles((theme) => ({
	mainContainer: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
		padding: "2.5em 3em",
    background: "black"
	},
  formContainer: {
    width: "30%",
    margin: "4em 0",
    padding: "1.5em 7em 2em",
    border: "8px solid #09DBA9",
    background: "white",
  },
  formTitle: {
    fontWeight: "bold",
    justifyContent: "center",
  },
  formEmail: {
    marginBottom:"1em",
    justifyContent: "center",
    background: "#09DBA9",
    border: "2px solid black"
  },
  email: {
    margin: "0.5em 1em",
    padding: "0.5em",
  },
  // formButtons: {
    
  // },
  cvButtons: {
    width: "100%",
    padding: "1em 0.5em",
    textAlign: "center",
    color: "#09DBA9",
    border: "2px solid black",
    textDecoration: "none"
  },
  copyBtn : {
    minWidth: "0",
    marginLeft: "1em",
    padding:"0",
    "&:hover" : {
      background: "none"
    }
  }
}));

export default function Contact() {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    navigator.clipboard.writeText('nicolaslukestik@gmail.com')
  };

	return(
    <>
      <div className={classes.mainContainer} id="contact">
        <div className={classes.formContainer}>

          <Grid container spacing={2} className={classes.formTitle}>
            <Grid item>
              <h1 style={{marginTop: "0"}}>Send me an email</h1>
            </Grid>
          </Grid>
          
          <Grid container className={classes.formEmail}>
            <Grid item className={classes.email}>
            
              <code>
                <a 
                href="mailto:nicolaslukestik@gmail.com" 
                style={{textDecoration: "none", color: "black"}}>
                  nicolaslukestik@gmail.com
                </a>
              </code>

              <ClickAwayListener onClickAway={handleTooltipClose}>
                
                  <Tooltip
                    arrow
                    placement="right"
                    PopperProps={{
                      disablePortal: true,
                    }}
                    open={open}
                    disableHoverListener
                    disableTouchListener
                    title="Copy to Clipboard"
                  >
                    <Button 
                      className={classes.copyBtn}
                      disableRipple  
                      onClick={handleTooltipOpen}>
                      <SvgCopy />
                    </Button>
                  </Tooltip>
                    
              </ClickAwayListener>

            </Grid>
          </Grid>

          <div style={{display: "flex"}}>
            <a className={classes.cvButtons} href="CV-Nicolas-Lukestik.pdf" download  style={{marginRight: "3%"}}>
              <code>CV (Spanish)</code> 
            </a>
            
            <a className={classes.cvButtons} href="Resume-Nicolas-Lukestik.pdf" download>
              <code>Resume (English)</code>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}