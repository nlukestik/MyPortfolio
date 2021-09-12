import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import {ReactComponent as SvgArrowRight} from '../svgicons/arrow-right.svg';

const useStyles = makeStyles((theme) => ({
	root : {
		margin: "10rem auto",
    flexWrap: "wrap",
    boxSizing: "border-box",
		width: "70%",
    maxWidth: "65em"
	},
	title : {
		display: "inline-grid",
    alignItems: "center",
    textAlign: "center",
    minWidth: "5.8em",
    minHeight: "1.8em",
		fontSize: "2.7em",
		border: "3px solid black"
	},
  card : {
    boxShadow: "none",
    borderRadius: "0"
  },
  cardTitle : {
    margin: "0.3em 0 0",
    color: "black",
    fontSize: "2.6em",
  },
  cardText : {
    margin: "0",
    color: "black",
    fontSize: "19px",
  }
	
}));

export default function Projects() {
  const classes = useStyles()

	return(
    <div className={classes.root}>
			
			<h1 id="projects" className={classes.title}>Projects</h1>
			
			<Grid container spacing={4}>

        <Grid item sm={6} xs={12}>
          <Card className={classes.card} >
            <CardMedia
              component="img"
              alt="Project 1"
              image="/images/project1.png"
            />
            <CardContent style={{padding: "0"}}>
              <h2 className={classes.cardTitle}>Project 1</h2>
              <p className={classes.cardText}>
                isl ut aliquip ex ea commodo consequat. Duis autem 
              </p>
            </CardContent>
            
            <SvgArrowRight />
              
          </Card>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Card className={classes.card} >
            <CardMedia
              component="img"
              alt="Project 2"
              image="/images/project2.png"
            />
            <CardContent style={{padding: "0"}}>
              <h2 className={classes.cardTitle}>Project 2</h2>
              <p className={classes.cardText}>
                isl ut aliquip ex ea commodo consequat. Duis autem 
              </p>
            </CardContent>
            
            <SvgArrowRight />
              
          </Card>
        </Grid>

      </Grid>

			
		</div>
  )
}