import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
	presentation : {
		justifyContent: "center",
		alignItems: "center",
	},
	meText : {
		marginRight: "2em",
		justifyContent: "center",
		lineHeight: "3.5em"
	},
	title : {
		margin: "0",
		fontWeight: "600",
		fontSize: "4em"
	},
	subtitle : {
		margin: "0",
		color: "#b8b8b8",
		fontSize: "1.8em"
	},
	p : {
		margin: "0",
		maxWidth: "25em",
		fontSize: "1.2em",
		lineHeight: "1.2em",
		fontWeight: "200",
		color: "#fff"
	},
	meImage : {
		display: "flex",
		alignItems: "center",
	}
})

export default function Home() {
  const classes = useStyles()

  return (
    <Grid container className={classes.presentation}>

      <Grid item xl={5} className={classes.meText}>
        <div>
          <h1 className={classes.title}>Hi, I'm Nico</h1>
          <h6 className={classes.subtitle}>Frontend Developer</h6>
          <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </Grid>

      <Grid item xl={5} className={classes.meImage}>
        <img src="images/NL.png" alt="" style={{height:"15em"}} />
      </Grid>

    </Grid>
  )
};
