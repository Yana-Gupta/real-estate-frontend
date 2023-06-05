import {
  Paper,
  Typography,
  CssBaseline,
  TextField,
  Grid,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  Button,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "tss-react/mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function SignIn() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 560,
        sm: 800,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root} id="root">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          maxWidth="md"
        >
          <Paper elevation={4}>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                padding: "10px 60px",
              }}
            >
              SignIn
            </Typography>
          </Paper>
          <Box
            sx={{
              mt: 2,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 50px",
            }}
          >
            <form action="" method="get">
              <Grid spacing={2} container>
                <Grid xxs={12} xs={12} sm={4} md={4} item>
                  <TextField
                    type={"text"}
                    variant="filled"
                    label="First Name"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid xxs={12} xs={4} sm={4} md={4} item>
                  <TextField
                    type={"text"}
                    variant="filled"
                    label="Middle Name"
                    fullWidth
                  />
                </Grid>
                <Grid xxs={12} xs={8} sm={4} md={4} item>
                  <TextField
                    type={"text"}
                    variant="filled"
                    label="Last Name"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid xxs={12} xs={7} sm={7} item>
                  <TextField
                    variant="standard"
                    type={"email"}
                    label="Email"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid xxs={12} xs={5} sm={5} item>
                  <TextField
                    variant="outlined"
                    type={"tel"}
                    label="Phone Number"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid xxs={12} xs={12} sm={12} md={12} item>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        value="male"
                        label="Male"
                        control={<Radio />}
                      />
                      <FormControlLabel
                        value="female"
                        label="Female"
                        control={<Radio />}
                      />
                      <FormControlLabel
                        value="other"
                        label="Other"
                        control={<Radio />}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid xxs={12} xs={12} sm={6} md={6} item>
                  <TextField
                    type={"password"}
                    label="Create a password"
                    fullWidth
                  />
                </Grid>
                <Grid xxs={12} xs={12} sm={6} md={6} item>
                  <TextField
                    type={"password"}
                    label="Re-Enter password"
                    fullWidth
                  />
                </Grid>
                <Grid xxs={12} xs={12} sm={12} md={12} item>
                  <Link
                    href="/login"
                    underline="none"
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Typography fontSize={".81rem"} variant="span">
                      Already a User? Login.
                    </Typography>
                  </Link>
                </Grid>
                <Grid
                  xxs={12}
                  xs={12}
                  sm={12}
                  md={12}
                  item
                  alignItems={"center"}
                >
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
