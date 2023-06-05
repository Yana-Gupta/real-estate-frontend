import { Container, Typography } from "@mui/material";
import "./Index.scss";
import Content from "../Helper/AbtHelper";
import TextAndContent from "./TextAndContent";

function Index() {
  return (
    <div className="abt-pg">
      <Container
        maxWidth={"100%"}
        sx={{
          margin: "10px auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" margin={"30px auto"}>
          Real Estate
        </Typography>
        <TextAndContent Content={Content} />
      </Container>
      <Container>
        <Typography variant="h3"></Typography>
      </Container>
    </div>
  );
}

export default Index;
