import React from "react";
import { Container } from "@mui/system";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActions,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "./Index.scss";
import "./Index.scss";
import AgentData from "../../data/Client";

const Agent = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 380,
        sm: 560,
        md: 830,
        lg: 1040,
        xl: 1536,
      },
    },
  });

  return (
    <div className="agent-page" style={{ margin: "40px 0px" }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h5"
          align="center"
          className="heading"
          maxWidth="md"
          sx={{
            margin: "0px auto 40px auto",
            background: "#4774AE",
            borderRadius: "26px",
            padding: "8px 60px",
            borderBottom: "20px solid #434460",
            color: "#E7ECEF",
          }}
        >
          PROPERTY DEALING AGENTS
        </Typography>
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl">
            <Grid spacing={2} container>
              {{ AgentData } &&
                AgentData.map((agent) => {
                  return (
                    <Grid
                      key={agent.id}
                      xxs={12}
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2.4}
                      xl={2}
                      item
                    >
                      <Card>
                        <CardMedia
                          height="220"
                          component="img"
                          image={agent.image}
                        />
                        <Typography align="center" variant="h6">
                          {agent.name}
                        </Typography>
                        <CardActions>
                          <Button>Contact</Button>
                          <Button
                            color="success"
                            className="btn"
                            variant="contained"
                            sx={{
                              backgroundColor: "#1F2333",
                              textTransform: "none",
                              color: "#E7ECEF",
                            }}
                          >
                            View History
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Container>
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default Agent;
