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
        <div id='page'>

            <Container maxWidth='xl' >
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '8px 0px 20px 0px',
                        padding: '10px 0px 20px 0px'
                    }}
                >

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            margin: '0px auto',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '10px solid #290000',
                            padding: '6px 0px',
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
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px'
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
                            margin: '0px auto 20px auto',
                            color: '#002B3D',
                            borderRadius: "30px",
                            borderBottom: '10px solid #290000',
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
                    }}>

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            color: '#002B3D',
                            borderRadius: "30px",
                            margin: '0px auto 20px auto',
                            borderBottom: '10px solid #290000',
                            padding: '6px 0px',
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
                    }}>

                    <Typography
                        variant='h4'
                        align='center'
                        maxWidth="md"
                        sx={{
                            backgroundColor: "#E2EDF3",
                            color: '#002B3D',
                            borderRadius: "30px",
                            margin: '0px auto 20px auto',
                            borderBottom: '10px solid #290000',
                            padding: '6px 0px',
                        }}
                        fullWidth >
                        Buildings
                    </Typography>
                    <Building />

                </Container>


            </Container>
        </div>
    )
}

export default Property;
