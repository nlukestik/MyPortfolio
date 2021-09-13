import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import {ReactComponent as SvgArrowRight} from '../svgicons/arrow-right.svg';

const useStyles = makeStyles((theme) => ({
  card : {
    boxShadow: "none",
    borderRadius: "0"
  },
  title : {
    margin: "0.3em 0 0",
    color: "black",
    fontSize: "2.6em",
  },
  text : {
    margin: "0",
    color: "black",
    fontSize: "19px",
  }
	
}));

export default function ProjectCard(props) {

  const classes = useStyles()

  return (
    <>
      <Grid item sm={6} xs={12}>

        <Card className={classes.card} >

          <CardMedia
            component="img"
            alt={props.alt}
            image={props.image}
          />

          <CardContent style={{padding: "0"}}>

            <h2 className={classes.title}>
              {props.title}
            </h2>

            <p className={classes.text}>
              {props.text} 
            </p>

          </CardContent>
          
          <SvgArrowRight />
            
        </Card>

      </Grid>
    </>
  )
}
