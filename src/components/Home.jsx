import { makeStyles } from '@material-ui/styles'
// import { Grid } from '@material-ui/core'

const useStyles = makeStyles({
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
    
  },
	title : {
		position: "absolute",
    top: "29%",
    right: "30%",
    padding: "0.5em 0.7em",
    background: "white",
    border: "3px solid black",
		fontWeight: "600",
		fontSize: "1.4em",
    color: "#09DBA9",
	},
	avatar : {
    position: "absolute",
    top: "20%",
    left: "44%",
    height: "70%",
	},
  divCircle :{
    position: "absolute",
    top: "46%",
    left: "15%",
  },
  circle : {
    display: "inline-grid",
    justifyItems: "center",
    alignItems: "center",
    alignContent: "center",
    height: "6.5em",
    width: "6.5em",
    transform: "rotateZ(-23.8deg) !important",
    backgroundColor: "#020202",
    boxShadow: "-2px 4px 4px 0px rgb(0, 0, 0, 0.5)",
    borderRadius: "50%",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
  }
})

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <div className={classes.square} />

      <h1 className={classes.title}>Nicolas Lukestik</h1>

      <img src="/images/avatar.png" alt="avatar" className={classes.avatar} />
    
      <div className={classes.divCircle}>
        <a href="#contact" className={classes.circle}>
          <span style={{fontSize: "15px"}}>GET IN<br/></span>
          <span style={{fontSize: "13px"}}>TOUCH</span>
        </a>
      </div>



      {/* <Grid container className={classes.presentation}>

        <Grid item xl={5} className={classes.meText}>
          <div>
            <h1 className={classes.title}>Hi, I'm Nico</h1>
            <h6 className={classes.subtitle}>Frontend Developer</h6>
            <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
        </Grid>

      </Grid> */}
    </div>
  )
};
