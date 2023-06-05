import { Container } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import ApartmentData from "../../../data/apartment";

const Apartment = () => {
  return (
    <Container maxWidth="xl" sx={{ margin: "10px 0px 0px 0px" }}>
      <Grid container spacing={5}>
        {{ ApartmentData } &&
          ApartmentData.map((item) => {
            return (
              <Grid xs={12} sm={6} md={4} lg={3} xl={2.4} key={item.id} item>
                <Card>
                  <CardMedia component="img" image={item.image} height="200" />
                  <CardContent>
                    <Typography align="center">Luxary Apartment</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{
                        textAlign: "bottom",
                        paddingBottom: "0px",
                        postion: "relative",
                        left: "0px",
                        marginBottom: "0px",
                      }}
                      fullWidth
                    >
                      Location
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "12px",
                        positon: "relative",
                        right: "0px",
                        textTransform: "none",
                      }}
                      fullWidth
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Apartment;
