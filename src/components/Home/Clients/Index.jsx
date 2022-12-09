import {
    createTheme,
    Box,
    Card,
    Grid,
    CardMedia,
    Typography,
    CardHeader,
    Avatar,
    CardActions,
    Button,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { ThemeProvider } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const URL = 'https://api.unsplash.com/search/photos?page=2&query=person+face+photo&client_id=OKNk76V2HgprC7fR-LdKLmlFTHhhFKwKtSzrgvHAvcc';


export default function Client() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xxs: 0,
                xs: 468,
                sm: 560,
                md: 830,
                lg: 1040,
                xl: 1536
            }
        },
        palette: {
            primary: purple
        }
    });
    const [clients, setclients] = useState([])
    useEffect(
        () =>
        (async function client() {
            await axios.get(URL)
                .then(res => {
                    setclients(res.data.results);
                })
        }),
        [clients]
    )
    return (

        <ThemeProvider theme={theme}>
            <Box maxWidth='xl' paddingBottom={'20px'}>
                <Grid
                    spacing={1}
                    paddingTop={'12px'}
                    container
                >
                    {{ clients } &&
                        clients.map((client) => {
                            return (
                                <Grid
                                    key={client.id}
                                    xxs={6}
                                    xs={4}
                                    sm={3}
                                    md={2.4}
                                    lg={2}
                                    xl={1.5}
                                    item>

                                    <Card >
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: '#ff2322' }} variant='circular' src={client.urls.raw}></Avatar>
                                            }
                                            title={
                                                <Typography variant="p" component="h5">{client.user.name}</Typography>
                                            }
                                        />


                                        <CardMedia
                                            height='110'
                                            width='120'
                                            sx={{
                                                padding: '2px 5px'
                                            }}
                                        >
                                            <Typography variant="p">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, vero.
                                            </Typography>
                                        </CardMedia>
                                        <CardActions sx={{
                                            padding: '0px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Button sx={{
                                                textTransform: 'none',
                                                fontSize: '13px',
                                                margin: '0px,'
                                            }}>
                                                <Typography variant="span">
                                                    History
                                                </Typography>
                                            </Button>
                                            <Button sx={{
                                                textTransform: 'none',
                                                fontSize: '12px',
                                                margin: '0px',
                                            }}>
                                                <Typography variant="span">
                                                    Review
                                                </Typography>
                                            </Button>
                                        </CardActions>

                                    </Card>
                                </Grid>
                            )
                        })}
                </Grid>
            </Box>
        </ThemeProvider>

    )
}