import {
    Paper,
    Typography,
    CssBaseline,
    TextField,
    Grid,
    Button,
    Link,
} from "@mui/material";
import { Box, } from "@mui/system";
import { makeStyles } from 'tss-react/mui';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Index.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }
}));

export default function Login() {

    const theme = createTheme(
        {
            breakpoints: {
                values: {
                    xxs: 0,
                    xs: 560,
                    sm: 640,
                    md: 900,
                    lg: 1200,
                    xl: 1536,
                },
            },
        }
    )

    const classes = useStyles();

    return (
        <div className="page">
            <div className={classes.root} id='container'>
                <CssBaseline />
                <ThemeProvider theme={theme}>

                    <Box sx={{
                        marginTop: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: '0px 20px'

                    }} maxWidth='xs'>
                        <Paper elevation={4}>
                            < Typography component='h1' variant='h5' sx={{
                                padding: '10px 60px'
                            }}>
                                Login
                            </Typography>
                        </Paper>
                        <Box sx={{
                            mt: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0px 100px'
                        }}>
                            <form action="/" method="get">
                                <Grid spacing={3} container>

                                    <Grid xxs={12} margin='auto' item>
                                        <TextField variant="standard" type={'email'} label='Email' required fullWidth/>
                                    </Grid>
                                    <Grid xxs={12} margin='auto' item>
                                        <TextField variant="outlined" type={'tel'} label="Phone Number" required fullWidth />
                                    </Grid>

                                    <Grid xxs={12} xs={12} sm={12} margin='auto' item>
                                        <TextField type={'password'} label='Enter password' required fullWidth />
                                    </Grid>

                                    <Grid xxs={12} xs={12} sm={12} item >
                                        <Link underline="none" href="/signin">
                                            <Typography variant="span" fontSize={'.82rem'}>
                                                New? Let's SignUp.
                                            </Typography>
                                        </Link>
                                    </Grid>

                                    <Grid xxs={12} xs={12} sm={12} item >
                                        <Button variant="contained" type="submit">Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Box>
                </ThemeProvider>
            </div>
        </div>
    )
}