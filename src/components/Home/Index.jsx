import { useState } from 'react';
import { Box } from '@mui/system';
import {
  MenuItem,
  TextField,
  Button,
  Container,
  Typography,
  ButtonGroup,
  Card,
  Grid,
  useMediaQuery,
} from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import HouseIcon from '@mui/icons-material/House';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import './Index.scss';


const propertyOptions = [
  {
    type: 'All Residentials',
    icon: <BorderAllIcon/>
  },
  {
    type: 'Home',
    icon: <HouseIcon />
  },
  {
    type: 'Apartment',
    icon: <ApartmentIcon />
  },
  {
    type: 'Building',
    icon: <LocationCityIcon />
  },

];
const userInterest = [
  { type: 'buy', },
  { type: 'sell', },
  { type: 'rent', },
  { type: 'pg', },
]

function Home() {
  const showDown780 = useMediaQuery('(min-Width: 780px)')

  const optionArea = '40';
  const [option, setOption] = useState('All Residentials');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className='hm-pg'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
          // width: '58%',
          position: 'relative',
          top: '196px',
          margin: 'auto',
          borderRadius: '20px',
        }} className='homebox'>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
          }}>
          <ButtonGroup fullWidth>
            {{ userInterest } && userInterest.map((item) => {
              return (
                <Button
                  key={item.type}
                  id={item.type}
                  color='inherit'
                  variant='contained'
                  sx={{
                    backgroundColor: '#313f82',
                    borderTopRightRadius: '20px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                    borderTopLeftRadius: '20px',
                    color: '#CED0C8'
                  }}>
                  {item.type}
                </Button>
              )
            })}
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
          }}>
          <TextField
            select
            value={option}
            onChange={handleChange}
            sx={{
              width: `${optionArea}%`,
              outline: 'none',
            }} >
            {{ propertyOptions } && propertyOptions.map((option) => {
              return (

                <MenuItem key={option.type} value={option.type}>
                  {option.type}
                </MenuItem>
              )
            })}
          </TextField>
          <TextField
            variant="filled"
            label={<SearchRounded />}
            sx={{
              alignContent: 'start'
            }}
            fullWidth
          />
          <Button
            variant='contained'
            sx={{
              borderBottomRightRadius: '20px',
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
              width: '13%',
              border: 'none',
              margin: '0px',
              borderTopRightRadius: '0px'
            }} >
            Search
          </Button>
        </Box>
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          background: '#fff',
          position: 'relative',
          width: '100%',
          top: '338px',
          margin: 'auto',
        }}>
        <Container maxWidth='xl'>
          <Typography
            variant='h3'
            align='center'>
            Houses
          </Typography>
        </Container>
        <Container
          display="flex">
          <Grid container maxWidth='lg' spacing={6}
            direction="row">
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={4} >
              <Card>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur dolor eum blanditiis soluta ullam unde corrupti reiciendis earum, dicta cum repudiandae sit iste nihil laboriosam. Fugit, omnis. Earum, explicabo.
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div >
  )
}

export default Home;