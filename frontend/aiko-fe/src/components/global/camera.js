import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import axios from 'axios'
import logo from '../../logo.svg';
import '../../App.css';
import img from '../../media/aiko.png'
import { Avatar, Box, Paper, TextField, Typography } from '@mui/material';

const Camera = () => {
  const [message, setMessage] = React.useState('');

  function handleClickButton(action) {
    console.log(action)
  }

  return (
    <div style={{ padding: '1%', backgroundColor: "#85C1E9" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6} >
            <div>
              <h1 style={{ color: "white" }} >Video Feed</h1>
              <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '100%' }}>
                <Paper sx={{ p: 2, minHeight: '350px' }}>
                  <center>
                    <img
                      src="http://127.0.0.1:8000/api/getfeed"
                      alt="Video"
                      style={{ minHeight: '260px', width: '400px', padding: "2%"}}
                    />
                  </center>
                </Paper>
              </Card>
              {/* <img
                src="http://127.0.0.1:8000/api/getfeed"
                alt="Video"
                style={{ height: '500px', width: '680px', padding: "2%"}}
              /> */}
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
              <h1 style={{ color: "white" }}>Chat</h1>
              <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '90%', padding: '5%' }}>
                <Paper sx={{ p: 2, minHeight: '260px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar alt="Aiko" src={img} sx={{ mr: 2 }} />
                    <Typography variant="h6">Aiko</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Aiko Message</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ mr: 2 }}>H</Avatar>
                    <Typography variant="h6">Human</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2">Human Message</Typography>
                  </Box>
                </Paper>             
              </Card>
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
              <h1 style={{ color: "white" }}>Choose Actions</h1>
              <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '90%', padding: '5%' }}>
                <CardActions sx={{}}>
                  <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('dance')}}>Dance</Button>
                  <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('wave')}}>Wave</Button>
                </CardActions>
                <CardActions sx={{}}>
                  <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('sit')}}>Sit</Button>
                  <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('stand')}}>Stand</Button>
                </CardActions>
                <CardActions sx={{}}>
                  <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('sing')}}>Sing</Button>
                  <Button variant='outlined' style={{ minWidth: '50%' }} onClick={(e) => {handleClickButton('talk')}}>Talk</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
          <Grid xs={6}>
            <div>
              <h1 style={{ color: "white" }}>Logs</h1>
              <Card style={{ borderRadius: '20px', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0)', maxWidth: '90%', padding: '5%' }}>
                <Paper sx={{ p: 2, minHeight: '265px', backgroundColor: 'black' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'white' }}>
                    <Typography variant="h6"> # Log Message</Typography>
                  </Box>
                </Paper>             
              </Card>
            </div>
          </Grid>
        </Grid>
      </Box>
      
    </div>
  );
};
export default Camera;