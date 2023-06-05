import React from "react";
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
import BuildingData from "../../../data/building";

function Building() {
  return (
    <Container maxWidth="xl" sx={{ margin: "10px 0px 0px 0px" }}>
      <Grid maxWidth="xl" spacing={7} container>
        {{ BuildingData } &&
          BuildingData.map((item) => {
            return (
              <Grid
                key={item.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2.4}
                item
                WidthFull
              >
                <Card WidthFull>
                  <CardMedia
                    component="img"
                    alt=""
                    height={160}
                    image={item.image}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center">
                      Building
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: "flex" }} WidthFull>
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
}

export default Building;
