import { useState } from 'react';
import { Container } from '@mui/system';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  Button,
  Link,
} from '@mui/material';
import "./Index.scss";


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const showUpMd = useMediaQuery('(min-Width: 701px)');
  const showDownMd = useMediaQuery('(max-Width: 700px)');

  async function handleClick() {
    await setNavbarOpen((!navbarOpen));
  }

  return (
    <div className='nav-bar'>
      <AppBar
        sx={{
          backgroundColor: '#222B59',
          width: '100vw',
          position: 'fixed',
          left: '0px',
          top: '0px',
        }}
        className={navbarOpen ? 'nav-bar-open' : ''}
      >
        <Container
          sx={{
            color: 'bisque',
            padding: '0px 20px',
            display: 'flex',
            alignItems: 'center',
          }}
          className={navbarOpen ? 'nav-bar-container' : ''}
          >

          {(navbarOpen || showUpMd) && <Link
            style={{
              textDecoration: 'none'
            }} to='/'>
            <Typography
              color='whiteSmoke'
              sx={{
                flexGrow: 1,
                display: 'block',
                fontSize: '22px',
                cursor: 'pointer',
                fontWeight: 600
              }}
              className={navbarOpen ? 'nav-home-link' : ''}>
              Apna Ghar
            </Typography>
          </Link>}

          {(showUpMd || navbarOpen) &&
            <Toolbar
              style={{
                display: 'flex',
                margin: 'auto auto',
                alignItems: 'center'
              }}
              className={navbarOpen ? 'toolbar' : ''}
            >
              <Link
                href='/'
                underline='none'
                className={navbarOpen ? 'toolbar-btn' : ''}>
                <Button
                  color='inherit'
                  variant='text'
                  style={{
                    color: ' #E4D9FF',
                    margin: 'auto 10px',
                  }}
                >
                  Home
                </Button>
              </Link>

              <Link
                href='/property'
                underline='none'
                className={navbarOpen ? 'toolbar-btn' : ''}>
                <Button
                  color='inherit'
                  variant='text'
                  style={{
                    color: ' #E4D9FF',
                    margin: 'auto 10px',
                  }}
                >
                  Property
                </Button>
              </Link>

              <Link
                href='/agent'
                underline='none'
                className={navbarOpen ? 'toolbar-btn' : ''}>
                <Button
                  color='inherit'
                  variant='text'
                  style={{
                    color: ' #E4D9FF',
                    margin: 'auto 10px',
                  }}
                >
                  Agent
                </Button>
              </Link>

              <Link
                href='/about'
                underline='none'
                className={navbarOpen ? 'toolbar-btn' : ''}>
                <Button
                  variant='text'
                  style={{
                    color: ' #E4D9FF',
                    margin: 'auto 10px',
                  }}
                >
                  About
                </Button>
              </Link>
            </Toolbar>}


          {showDownMd && <Box width={'70%'}>
            <Button
              color='inherit'
              className='nav-open-btn'
              onClick={handleClick}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              id={navbarOpen ? 'nav-btn-open' : ''}>
              <Typography className='ham' id={navbarOpen ? 'active' : ''} />
              <Typography className='ham' id={navbarOpen ? 'active' : ''} />
              <Typography className='ham' id={navbarOpen ? 'active' : ''} />

            </Button>
          </Box>}


          {!navbarOpen && <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              right: '20px'
            }}>
            <Link href='/login' underline='none'>
              <Button
                style={{
                  backgroundColor: '#D1D4DB',
                  height: '72px',
                  borderRadius: '0px',
                  color: '#12172B',
                  textTransform: 'none',
                }}
                className='btn-reg'
                variant='contained'
                disableElevation
                disableFocusRipple	>
                Sign-In
              </Button>
            </Link>
            <Link href='/signin'>
              <Button
                style={{
                  backgroundColor: '#4358B1',
                  height: '72px',
                  borderRadius: '0px',
                  color: '#fff',
                  textTransform: 'none',
                }}
                className='btn-reg'
                variant='contained'
                disableElevation >
                Sign-Up
              </Button>
            </Link>
          </Box>}

        </Container>
      </AppBar>
    </div >
  )
}
