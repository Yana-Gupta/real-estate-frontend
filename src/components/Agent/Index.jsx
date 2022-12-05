import React,
{
    useEffect,
    useState
} from 'react';
import { Container } from '@mui/system';
import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardActions,
    Button,
    createTheme,
    ThemeProvider
} from '@mui/material';
import './Index.scss'
import axios from 'axios';
import './Index.scss';
const URL1 = 'https://api.unsplash.com/search/photos?page=1&query=goodlooking+adult+man+face+photo&client_id=OKNk76V2HgprC7fR-LdKLmlFTHhhFKwKtSzrgvHAvcc';


const Agent = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xxs: 0,
                xs: 380,
                sm: 560,
                md: 830,
                lg: 1040,
                xl: 1536
            }
        }
    });

    const [agentInfo, setAgentInfo] = useState([]);
    useEffect(() =>
        async function fetchAgentInfo() {
            await axios.get(URL1)
                .then(
                    (res) => {
                        setAgentInfo(res.data.results);
                    }
                )
                .catch(
                    err => console.log(err)
                )
        }
    )

    return (
        <div className='agent-page'>
            <Container maxWidth='xl' sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <Typography
                    variant='h5'
                    align='center'
                    className='heading'
                    maxWidth='md'
                    sx={{
                        margin: '20px 30px',
                        background: '#6C7289',
                        borderRadius: '26px',
                        padding: '8px 60px',
                        border: '2px solid #434460',
                    }}>
                    PROPERTY DEALING AGENTS
                </Typography>
                <ThemeProvider theme={theme}>
                    <Container maxWidth='xl'>
                        <Grid
                            spacing={2}
                            container
                        >
                            {{ agentInfo } &&
                                agentInfo.map((agent) => {
                                    return (
                                        <Grid
                                            key={agent.id}
                                            xxs={12}
                                            xs={6}
                                            sm={4}
                                            md={3}
                                            lg={2.4}
                                            xl={2}
                                            item>

                                            <Card >
                                                <CardMedia
                                                    height='220'
                                                    component='img'
                                                    image={agent.urls.regular}
                                                />
                                                <Typography
                                                    align='center'
                                                    variant='h6'>
                                                    Steve Smith
                                                </Typography>
                                                <CardActions>
                                                    <Button>
                                                        Contact
                                                    </Button>
                                                    <Button
                                                        color='inherit'
                                                        className='btn'
                                                        variant='contained'
                                                        sx={{
                                                            backgroundColor: '#1F2333',
                                                            textTransform: 'none',
                                                            color: '#E7ECEF',
                                                        }}>
                                                        View History
                                                    </Button>
                                                </CardActions>

                                            </Card>
                                        </Grid>
                                    )
                                })}
                        </Grid>
                    </Container>
                </ThemeProvider>
            </Container>
        </div >
    )
}

export default Agent;