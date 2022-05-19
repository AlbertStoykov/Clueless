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
  createTheme,
  Button,
} from '@mui/material';
import { Box, color, height } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import { pink } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import { shadows } from '@mui/system';

const LandingPage = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Luckiest Guy',
    },
  });

  const theme2 = createTheme({
    typography: {
      fontFamily: 'Luckiest Guy',
    },
    palette: {
      primary: {
        main: pink[400],
      },
    },
  });

  const theme3 = createTheme({
    background: {
      palette: {
        primary: {
          main: deepOrange[400],
        },
      },
    },
  });

  return (
    <>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={theme}>
        <AppBar
          sx={{
            position: 'absolute',
            background: 'purple',
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="white" align="centre">
              Clueless
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

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
                height: '450px',
                width: '100vw',
              }}
            >
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h4"
                  align="center"
                  color="white"
                  paragraph
                  padding={'20px'}
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
              </ThemeProvider>

              <Box>
                <ThemeProvider theme={theme2}>
                  <Button
                    variant="contained"
                    sx={{
                      width: '200px',
                      boxShadow: 10,
                    }}
                  >
                    <Typography> Let The Games Begin</Typography>
                  </Button>
                </ThemeProvider>
              </Box>

              <Box
                sx={{
                  mt: '90px',
                  background: deepOrange[500],
                  position: 'absolute',
                  right: '0px',
                  left: '0px',
                  height: '60px',
                  width: '100vw',
                }}
                gutterBottom
              ></Box>
            </Box>
          </Container>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
