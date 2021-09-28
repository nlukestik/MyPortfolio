import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia } from '@material-ui/core';
import {ReactComponent as SvgArrowRight} from '../svgicons/arrow-right.svg';

const useStyles = makeStyles((theme) => ({
  card : {
    boxShadow: "none",
    borderRadius: "0",
    // marginLeft: "3%",
  },
  title : {
    margin: "0.3em 0 0",
    fontSize: 35,
		fontWeight: 700,
		lineHeight: 1.4,
		[theme.breakpoints.down('md')]: {
			fontSize: 26,
		},
  },
  text : {
    margin: ".5em 0",
    fontSize: 19,
		textAlign: "justify",
		[theme.breakpoints.down('md')]: {
			fontSize: 15,
		},
  },
	
}));

export default function ProjectCard(props) {

  const classes = useStyles()

  return (
    <>
      <Card className={classes.card} style={{marginLeft: props.marginLeft}}>

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
        
        <a href={props.href} style={{textDecoration:"none"}}>
          <SvgArrowRight />
        </a>
          
      </Card>
    </>
  )
}
