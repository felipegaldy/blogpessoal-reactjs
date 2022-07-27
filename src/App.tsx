import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import './App.css';
import Home from './pages/home/home';

function App() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
