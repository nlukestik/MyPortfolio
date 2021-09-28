import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SectionTitle from './SectionTitle'

const useStyles = makeStyles((theme) => ({
	text : {
		margin: "2em auto",
		fontWeight: "bold",
		fontSize: "1.3em",
		textAlign: "justify",
		[theme.breakpoints.down('sm')]: {
			margin: "10px auto",
			fontSize: 18,
		},
		[theme.breakpoints.between('sm','md')]: {
			width: "60%",
		},
		[theme.breakpoints.up('lg')]: {
			width: "55%",
		},
	},
}));

export default function AboutMe(props) {
	const classes = useStyles()

	return(
		<div id="aboutMe">
			
			<SectionTitle title="About me" />
			
			<p className={classes.text}>
				Student of Information Systems and Front End Developer with the ambition 
				to incorporate new technologies and committed to the 
				development of tasks required by the company. Looking to train 
				in the labor sphere and explore my abilities to grow professionally.
			</p>

			
		</div>
	)
}