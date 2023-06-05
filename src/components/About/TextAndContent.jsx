import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function TextAndContent(props) {
  const { Content } = props;
  return (
    <div>
      <Box
        maxWidth={"xl"}
        alignSelf="center"
        style={{
          margin: "20px auto",
        }}
      >
        {{ Content } &&
          Content.map((item) => {
            return (
              <Grid container key={item.cont} marginBottom={"20px"}>
                <Grid item key={item.cont} md={12} lg={6}>
                  <Typography align="justify" fontSize={"19px"}>
                    {item.cont}
                  </Typography>
                </Grid>
                <Grid
                  alignItems="centerWelcome to your gateway to the world of real estate, where dreams meet reality and homes become stories worth living.
                  "
                  item
                  md={12}
                  lg={6}
                >
                  <img
                    style={{ width: "72%", margin: "0px auto" }}
                    src={item.img}
                    alt=""
                  />
                </Grid>
              </Grid>
            );
          })}
      </Box>
    </div>
  );
}

export default TextAndContent;
