import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	title : {
		display: "inline-grid",
    alignItems: "center",
    textAlign: "center",
    minWidth: "5.8em",
    minHeight: "1.8em",
		fontSize: "2.7em",
		border: "3px solid black"
	},
	
}));

export default function SectionTitle(props) {
  const classes = useStyles()
  
	return(
    <>
			<h1 className={classes.title}>{props.title}</h1>
		</>
  )
}