import React from 'react';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  AppBar,
  Button,
} from '@mui/material';
import { Box, height } from '@mui/system';

const LandingPage = () => {
  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar
        sx={{
          position: 'absolute',
          background: 'purple',
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="white">
            Clueless
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container sx={{ padding: '80px' }}>
            <Box
              component="img"
              sx={{
                height: 350,
                width: 525,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="clueless logo"
              src="assets/images/clueless.png"
            />

            <Box
              sx={{
                backgroundImage: `url(${'assets/images/jason-leung.jpg'})`,
                position: 'absolute',
                right: '0px',
                left: '0px',
                height: '400px',
                width: '100vw',
              }}
            >
              <Typography
                fontFamily="Press Start 2P"
                variant="h4"
                align="center"
                color="white"
                paragraph
                padding={'50px'}
              >
                Game rules
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="white"
                paragraph
                padding={'10px'}
              >
                1. No cheating
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="white"
                paragraph
                padding={'10px'}
              >
                2. Loser Drinks
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="white"
                paragraph
                padding={'10px'}
              >
                3. Answer within the timer
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '500px',
              }}
            >
              <Button
                sx={{
                  width: '100px',
                }}
              >
                Let The Games Begin
              </Button>
            </Box>
          </Container>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
