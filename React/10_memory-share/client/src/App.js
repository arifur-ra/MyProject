import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postsAction';
import useStyles from './App.style.js';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './images/memories.png';

function App() {
  const classes=useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  return (
    <Container maxWidth="lg">
      <AppBar  className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" height="60" className={classes.image}/>
      </AppBar>
      <Grow in >
            <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                       <Posts/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                       <Form/>
                 </Grid> 
              </Grid>
            </Container>
      </Grow>
    </Container>
  )
}

export default App;
