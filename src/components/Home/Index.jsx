import { Box } from "@mui/system";
import {
  MenuItem,
  TextField,
  Button,
  Container,
  Typography,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import HouseIcon from "@mui/icons-material/House";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Client from "./Clients/Index";
import "./Index.scss";
import { useState } from "react";
import backgroundImage from "../../assets/image/background.jpg";

const propertyOptions = [
  {
    type: "All Residentials",
    icon: <BorderAllIcon style={{ color: "#443D66" }} />,
  },
  {
    type: "Home",
    icon: <HouseIcon style={{ color: "#443D66" }} />,
  },
  {
    type: "Apartment",
    icon: <ApartmentIcon style={{ color: "#443D66" }} />,
  },
  {
    type: "Building",
    icon: <LocationCityIcon style={{ color: "#443D66" }} />,
  },
];
const userInterest = [
  { type: "buy" },
  { type: "sell" },
  { type: "rent" },
  { type: "pg" },
];

function Home() {
  const showUP780 = useMediaQuery("(min-Width: 780px)");
  const showDown780px = useMediaQuery("(max-width: 780px)");

  const optionArea = "40";
  const [option, setOption] = useState("All Residentials");

  async function handleChange(event) {
    setOption(event.target.value);
    console.log(option);
  }

  return (
    <div className="hm-pg">
      <img loading="lazy" src={backgroundImage} alt="background" />
      <div className="home">
        <Box className="homebox">
          <Box
            sx={{
              display: "flex",
            }}
          >
            <ButtonGroup fullWidth>
              {{ userInterest } &&
                userInterest.map((item) => {
                  return (
                    <Button
                      key={item.type}
                      id={item.type}
                      color="inherit"
                      variant="contained"
                      sx={{
                        backgroundColor: "#313f82",
                        borderTopRightRadius: "20px",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                        borderTopLeftRadius: "20px",
                        color: "#CED0C8",
                      }}
                    >
                      {item.type}
                    </Button>
                  );
                })}
            </ButtonGroup>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              height: "56px",
            }}
          >
            <TextField
              select
              value={option}
              onChange={handleChange}
              sx={{
                width: `${optionArea}%`,
                outline: "none",
                height: "56px",
                padding: "auto",
                backgroundColor: "#ffff",
                borderBottomLeftRadius: "20px",
              }}
            >
              {{ propertyOptions } &&
                propertyOptions.map((option) => {
                  return (
                    <MenuItem key={option.type} value={option.type}>
                      {showUP780 && <Typography>{option.type}</Typography>}
                      {showDown780px && <Typography>{option.icon}</Typography>}
                    </MenuItem>
                  );
                })}
            </TextField>
            <TextField
              variant="filled"
              label={<SearchRounded />}
              sx={{
                alignContent: "start",
                height: "56px",
                backgroundColor: "#ffff",
              }}
              fullWidth
            />
            <Button
              variant="contained"
              sx={{
                borderBottomRightRadius: "20px",
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
                width: "14%",
                border: "none",
                margin: "0px",
                padding: "auto 10px",
                borderTopRightRadius: "0px",
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
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
