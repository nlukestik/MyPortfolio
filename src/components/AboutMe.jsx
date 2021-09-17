import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SectionTitle from './SectionTitle';

const useStyles = makeStyles((theme) => ({
	// root : {
	// 	margin: "10rem auto",
  //   flexWrap: "wrap",
  //   boxSizing: "border-box",
	// 	width: "70%",
  //   maxWidth: "65em"
	// },
	// title : {
	// 	display: "inline-grid",
  //   alignItems: "center",
  //   textAlign: "center",
  //   minWidth: "5.8em",
  //   minHeight: "1.8em",
	// 	fontSize: "2.7em",
	// 	border: "3px solid black"
	// },
	text : {
		width: "55%",
		margin: "2em auto",
		justifyContent: "center",
		fontWeight: "bold",
		fontSize: "1.3em",
		textAlign: "left"
	},
}));

export default function AboutMe(props) {
	const classes = useStyles()

	return(
		<section id={props.id}>
			
			<SectionTitle title="About me" />
			
			<p className={classes.text}>
				isl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in 
				vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero 
				eros et accumsan et iusto odio dignissim qui blandit praese
			</p>

			
		</section>
	)
}