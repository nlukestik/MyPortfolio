import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	title : {
		display: "inline-grid",
    alignItems: "center",
    textAlign: "center",
    minWidth: "5.8em",
    minHeight: "1.8em",
		fontSize: 43.2,
		border: "3px solid black",
		[theme.breakpoints.down('sm')]: {
			fontSize: 30,
		},
		[theme.breakpoints.between('sm','md')]: {
			fontSize: 35,
		},
	},
	
}));

export default function SectionTitle(props) {
  const classes = useStyles()
  
	return(
    <>
			<h1 className={classes.title}>
				{props.title}
			</h1>
		</>
  )
}