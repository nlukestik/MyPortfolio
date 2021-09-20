import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SectionTitle from './SectionTitle';

const useStyles = makeStyles((theme) => ({
	text : {
		margin: "2em auto",
		justifyContent: "center",
		fontWeight: "bold",
		fontSize: "1.3em",
		textAlign: "left",
		[theme.breakpoints.down('sm')]: {
			margin: "10px auto",
			justifyContent: "left",
			textAlign: "justify",
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
				isl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in 
				vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero 
				eros et accumsan et iusto odio dignissim qui blandit praese
			</p>

			
		</div>
	)
}