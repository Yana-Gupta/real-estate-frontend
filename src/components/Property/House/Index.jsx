import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import { Container } from '@mui/system';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';


const URL = 'https://api.unsplash.com/search/photos?page=9&query=house&client_id=OKNk76V2HgprC7fR-LdKLmlFTHhhFKwKtSzrgvHAvcc';



function House() {
    const [imgArray, setImgArray] = useState([]);
    useEffect(() =>
        async function fetchImageArray() {
            await axios.get(URL)
                .then(
                    res => {
                        setImgArray(res.data.results);
                    })
                .catch(
                    err => console.log('error is ', err)
                )
        }, [imgArray]
    )




    return (
        <Container maxWidth='xl' sx={{ margin: "10px 0px 0px 0px" }}>
            <Grid
                maxWidth='xl'
                spacing={7}
                container
            >

                {{ imgArray } && imgArray.map((item) => {
                    return (
                        <Grid
                            key={item.id}
                            xs={12} sm={6} md={4} lg={3} xl={2.4}
                            item 
                            WidthFull
                            >
                            <Card WidthFull>
                                <CardMedia
                                    component='img'
                                    alt=''
                                    height={160}
                                    image={item.urls.regular}
                                />
                                <CardContent>
                                    <Typography variant='h6' align='center'>
                                        Beach House
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{ display: 'flex' }} WidthFull>
                                    <Button
                                        sx={{
                                            textAlign: 'bottom',
                                            paddingBottom: '0px',
                                            postion: 'relative',
                                            left: '0px',
                                            marginBottom: '0px'
                                            
                                        }} fullWidth>
                                        Location
                                    </Button>
                                    <Button
                                        variant='contained'
                                        sx={{
                                            fontSize: '12px',
                                            positon: "relative",
                                            right: '0px',
                                            textTransform: 'none'
                                        }}
                                    fullWidth>
                                        View Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>

    )
}

export default House;