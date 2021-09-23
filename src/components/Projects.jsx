import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle'

export default function Projects(props) {
  // const classes = useStyles()
  
	return(
    <section id="projects">
			
			<SectionTitle title="Projects" />
			
			<Grid container spacing={5}>
      
        <Grid item sm={6} xs={12}>
          <ProjectCard
						image="/images/bites-dev.png"
            title="Bites Dev"
            text="isl ut aliquip ex ea commodo consequat. Duis autem"
            alt="Bites Dev"
            href="https://bitesdev.netlify.app"
            // marginLeft="0"
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <ProjectCard 
            image="/images/echeverria-inmobiliaria.png"
            title="Echeverria Inmobiliaria"
            text="isl ut aliquip ex ea commodo consequat. Duis autem"
            alt="Echeverria Inmobiliaria"
            href="https://echeverria-nico.netlify.app"
          />
        </Grid>

      </Grid>


		</section>
  )
}