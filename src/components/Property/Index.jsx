import React from 'react';
import House from './House/Index'
import Apartment from './Apartment/Index';
import Land from './Land/Index';
import Building from './Building/Index';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import './Index.scss';


function Property() {
    return (
        <div id='page' style={{margin: "40px auto"}}>

            <Container maxWidth='xl'>
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '8px 0px 20px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            margin: '0px 20px',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '10px solid #290000',
                            padding: '6px 30px',
                        }}
                        fullWidth >
                        Houses
                    </Typography>
                    <House />

                </Container>
                <Container
                    maxWidth="xl"
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #D3DEEE',
                        margin: '40px auto',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            alignSelf: 'center',
                            justifySelf: 'center',
                            margin: '0px 20px 20px 20px',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '10px solid #290000',
                            padding: '6px 30px'
                        }}>
                        Apartments
                    </Typography>
                    <Apartment />
                </Container>

                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            color: '#002B3D',
                            borderRadius: "30px",
                            margin: '0px 20px 20px 20px',
                            borderBottom: '10px solid #290000',
                            padding: '6px 30px',
                        }}
                        fullWidth >
                        Lands
                    </Typography>
                    <Land />

                </Container>
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            color: '#002B3D',
                            borderRadius: "30px",
                            margin: '0px 20px 20px 20px',
                            borderBottom: '10px solid #290000',
                            padding: '6px 30px',
                        }}
                        fullWidth >
                        Buildings
                    </Typography>
                    <Building />

                </Container>
            </Container>

            {/* <Footer /> */}

        </div>
    )
}

export default Property;
