import {
    Container,
    FormControl,
    Input,
    createTheme,
    ThemeProvider,
    Button,
    FormLabel,
    Typography
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import './Index.scss';
import { pink } from "@mui/material/colors";

export default function Footer() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#5a48a7'
            },
            secondary: pink
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    position: 'relative',
                    bottom: '0px',
                    left: '0px',
                    background: '#110835',
                    marginTop: '12px',
                    color: '#FCD6C5',
                    marginTop: '20px'
                }}>
                <form
                    action=""
                    method="post"
                    className="form">
                    <FormLabel>
                        <Typography variant="h6" component="h1" color="primary">Any Review and Query</Typography>
                    </FormLabel>
                    <FormControl
                        color="primary"
                        variant="standard"
                        sx={{
                            margin: '6px 0px',
                            padding: '2px 4px',

                        }}
                        focused>
                        <Input
                            sx={{
                                color: '#FCD6C5',
                                padding: '2px 5px',
                            }}
                            type="email"
                            startAdornment={<EmailIcon sx={{ color: '#FCD6C5', paddingRight: '8px' }} />}
                            placeholder="Email"
                            required />
                    </FormControl>
                    <FormControl
                        color="primary"
                        variant="standard"
                        sx={{
                            margin: '6px 0px',
                            padding: '2px 4px'
                        }}
                        focused>
                        <Input
                            sx={{
                                padding: '2px 5px',
                                color: '#FCD6C5',
                            }}
                            type="text"
                            startAdornment={<MessageIcon sx={{ color: '#FCD6C5', paddingRight: '8px' }} />}
                            placeholder="Enter your message"
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            sx={{
                                // fontSize: '1rem',
                                width: '110px'
                            }}>
                            Send &nbsp;{<SendIcon />}
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </ThemeProvider>
    )
}