import React from 'react';
import { useTheme/*, makeStyles*/ } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import AppBar from './AppBar'

// const classes = makeStyles({
  
// });

export default function Navbar() {
  const theme = useTheme(); 

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {/* Responsive Navbar */}
      {isMobile ? (
        <>
          <AppBar />
        </>
      ) : (
        <>
          {/* NavBar */}
          <div>
            <nav>
              <Grid container>
                <Grid item md={2}>
                  NL
                </Grid>
                <Grid item md={10}>
                  <ul>
                    <li><a href="#aboutMe">about me</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                  </ul>
                </Grid>
              </Grid>
            </nav>
          </div>
        </>
      )}
    </>
  );
}