import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((theme) => ({
	root : {
		margin: "10rem auto",
    flexWrap: "wrap",
    boxSizing: "border-box",
		width: "70%",
    maxWidth: "65em",
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
  // cardsContainer : {
  //   display: "flex",
  //   maxHeight: "60em",
  //   overflowX: "auto",
  //   "&::-webkit-scrollbar" : {
  //     width: "0"
  //   }
  // }
	
}));

export default function Projects() {
  const classes = useStyles()
  
	return(
    <div className={classes.root}>
			
			<h1 id="projects" className={classes.title}>Projects</h1>
			
      {/* <div className={classes.cardsContainer}> */}
        
			<Grid container spacing={4}>
      
        <Grid item sm={6} xs={12}>
          <ProjectCard 
            image="/images/project1.png"
            title="Project 1"
            text="isl ut aliquip ex ea commodo consequat. Duis autem"
            alt="Project 1"
            marginLeft="0"
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <ProjectCard 
            image="/images/project2.png"
            title="Project 2"
            text="isl ut aliquip ex ea commodo consequat. Duis autem"
            alt="Project 2"
          />
        </Grid>

        {/* <ProjectCard 
          image="/images/project1.png"
          title="Project 1"
          text="isl ut aliquip ex ea commodo consequat. Duis autem"
          alt="Project 1"
        />

        <ProjectCard 
          image="/images/project2.png"
          title="Project 2"
          text="isl ut aliquip ex ea commodo consequat. Duis autem"
          alt="Project 2"
        />

        <ProjectCard 
          image="/images/project1.png"
          title="Project 1"
          text="isl ut aliquip ex ea commodo consequat. Duis autem"
          alt="Project 1"
        />

        <ProjectCard 
          image="/images/project2.png"
          title="Project 2"
          text="isl ut aliquip ex ea commodo consequat. Duis autem"
          alt="Project 2"
        />

        <ProjectCard 
          image="/images/project1.png"
          title="Project 1"
          text="isl ut aliquip ex ea commodo consequat. Duis autem"
          alt="Project 1"
        />

        <ProjectCard 
          image="/images/project2.png"
          title="Project 2"
          text="isl ut aliquip ex ea commodo consequat. Duis autem"
          alt="Project 2"
        /> */}

      </Grid>
      {/* </div> */}

			
		</div>
  )
}