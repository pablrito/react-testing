import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ButtonAppBar from './ButtonAppBar';
import SearchOrders from './SearchOrders';

const theme = createTheme();

export default function Search() {
  return(
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <ButtonAppBar/>
     
       {/* Recent Orders */}
       <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', border:1 }}>
          <SearchOrders />
        </Paper>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}