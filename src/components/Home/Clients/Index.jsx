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
import React from "react";
import ClientData from "../../../data/Client";



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

    return (

        <ThemeProvider theme={theme}>
            <Box paddingBottom={'20px'}>
                <Grid
                    spacing={1}
                    paddingTop={'12px'}
                    container
                >
                    {ClientData && ClientData.map((client) => {
                        return (
                            <Grid
                                sx={{
                                    height: "300px"
                                }}
                                key={client.id}
                                xxs={6}
                                xs={4}
                                sm={3}
                                md={2.4}
                                lg={2}
                                xl={1.5}
                                item>
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                sx={{
                                                    bgcolor: '#ff2322',
                                                }}
                                                src={client.image}
                                            />
                                        }
                                        title={
                                            <Typography variant="p" component="h5">{client.name}</Typography>
                                        }
                                    />
                                    <CardMedia
                                        height='120'
                                        sx={{
                                            padding: '3px 10px'
                                        }}
                                    >
                                        <Typography variant="p">
                                            {client.review}
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
                                                More
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