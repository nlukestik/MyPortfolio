import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle'

// const useStyles = makeStyles((theme) => ({
//   cardsContainer : {
//     display: "flex",
//     maxHeight: "60em",
//     overflowX: "auto",
//     "&::-webkit-scrollbar" : {
//       width: "0"
//     }
//   }
	
// }));

export default function Projects(props) {
  // const classes = useStyles()
  
	return(
    <section id={props.id}>
			
			<SectionTitle title="Projects" />
			
      {/* <div className={classes.cardsContainer}> */}
        
			<Grid container spacing={4}>
      
        <Grid item sm={6} xs={12}>
          <ProjectCard
						image="/images/bites-dev.png"
            title="Bites Dev"
            text="isl ut aliquip ex ea commodo consequat. Duis autem"
            alt="Bites Dev"
            marginLeft="0"
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <ProjectCard 
            image="/images/echeverria-inmobiliaria.png"
            title="Echeverria Inmobiliaria"
            text="isl ut aliquip ex ea commodo consequat. Duis autem"
            alt="Echeverria Inmobiliaria"
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


		</section>
  )
}