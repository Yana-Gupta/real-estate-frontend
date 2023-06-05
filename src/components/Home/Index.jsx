import { Container, Typography } from "@mui/material";
import Client from "./Clients/Index";
import "./Index.scss";

function Home() {
  return (
    <div className="hm-pg">
      <div className="home">
        <h1>
          Welcome to your gateway to the world of real estate, where dreams meet
          reality and homes become stories worth living.
        </h1>
        <h2>Unlock your dream with us.</h2>
      </div>

      <Container maxWidth="xl">
        <Container maxWidth="xl">
          <Typography variant="h5" component="h1" align="center" marginY={1}>
            Our Clients and Reviews
          </Typography>
          <Client />
        </Container>
      </Container>
    </div>
  );
}

export default Home;
