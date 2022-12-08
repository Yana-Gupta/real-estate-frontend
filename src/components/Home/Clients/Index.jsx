import {
    Box,
    Card,
    Grid,
    CardMedia,
    Typography,
    CardHeader,
    Avatar,
    CardActions,
    Button
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const URL = 'https://api.unsplash.com/search/photos?page=2&query=person+face+photo&client_id=OKNk76V2HgprC7fR-LdKLmlFTHhhFKwKtSzrgvHAvcc';


export default function Client() {
    // const theme = useTheme((

    // ))
    const [clients, setclients] = useState([])
    useEffect(
        () =>
        (async function client() {
            await axios.get(URL)
                .then(res => {
                    setclients(res.data.results)
                    // console.log(clients)
                })
        }),
        [clients]
    )
    return (

        <Box maxWidth='xl'>
            <Grid
                spacing={1}
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
                                            <Avatar sx={{ bgcolor: '#ff2322' }} variant='circular' >{client.user.name[0]} </Avatar>
                                        }
                                        title={
                                            <Typography variant="p" component="h5">{client.user.name}</Typography>
                                        }
                                    />


                                    <CardMedia
                                        height='120'
                                        component='img'
                                        image={`${client.urls.raw}&w=300&dpr=2`}
                                    />
                                    <CardActions>
                                        <Button></Button>
                                        <Button></Button>
                                    </CardActions>

                                </Card>
                            </Grid>
                        )
                    })}
            </Grid>
        </Box>

    )
}