import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
		padding: "2.5em 3em",
    background: "black"
	},
  formContainer: {
    width: "50%",
    padding: "1.5em 5em",
    border: "8px solid #09DBA9",
    background: "white",
  },
  formTitle: {
    fontWeight: "bold",
    justifyContent: "center",
  },
  formEmail: {
    justifyContent: "center",
    background: "#09DBA9",
    border: "2px solid black"
  },
  email: {
    margin: "0.5em 1em",
    padding: "0.5em",
  },
  formButtons: {
    
  },
  button: {
    width: "auto",
    margin: "0.8em 0em",
    padding: "0.5em",
    textAlign: "center",
    color: "#09DBA9",
    border: "2px solid black"
  }
}));

export default function HireMe() {
  const classes = useStyles()

	return(
    <>
      <div className={classes.mainContainer}>
        <div className={classes.formContainer}>

          <Grid container spacing={2} className={classes.formTitle}>
            <Grid item>
              <h2 style={{marginTop: "0"}}>Send me an email</h2>
            </Grid>
          </Grid>
          
          

            <Grid container className={classes.formEmail}>
              <Grid item className={classes.email}>
              <code>
                <a href="mailto:nicolaslukestik@gmail.com" style={{textDecoration: "none", color: "black"}}>
                  nicolaslukestik@gmail.com
                </a>
              </code>
              </Grid>
            </Grid>

            <Grid container className={classes.formButtons}>
              <Grid item lg={6} className={classes.button} style={{marginRight: "0.4em"}}>
                <code >CV (Spanish)</code> 
              </Grid>

              <Grid item lg={6} className={classes.button} style={{marginLeft: "0.4em"}}>
                <code >Resume (English)</code>
              </Grid>
            </Grid>
          

        </div>
      </div>
    </>
  )
}