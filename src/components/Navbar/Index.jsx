import { useState } from "react";
import { Container } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  Button,
  Link,
} from "@mui/material";
import "./Index.scss";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const showUpMd = useMediaQuery("(min-width: 961px)");
  const showDownMd = useMediaQuery("(max-width: 960px)");

  async function handleClick() {
    await setNavbarOpen(!navbarOpen);
  }

  return (
    <div className="nav-bar">
      <AppBar
        sx={{
          backgroundColor: "#222B59",
          padding: "0px 20px",
        }}
        className={navbarOpen ? "nav-bar-open" : ""}
      >
        <Container
          maxWidth="xl"
          sx={{
            color: "bisque",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "24px",
          }}
          className={navbarOpen ? "nav-bar-container" : ""}
          disableGutters
        >
          {(navbarOpen || showUpMd) && (
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              <Typography
                color="whiteSmoke"
                sx={{
                  flexGrow: 1,
                  display: "block",
                  fontSize: "22px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
                className={navbarOpen ? "nav-home-link" : ""}
              >
                Real&nbsp;Estate
              </Typography>
            </Link>
          )}

          {(showUpMd || navbarOpen) && (
            <Toolbar
              style={{
                display: "flex",
                margin: "auto auto",
                alignItems: "center",
                zIndex: 121,
              }}
              className={navbarOpen ? "toolbar" : ""}
            >
              <Link
                href="/"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  color="inherit"
                  variant="text"
                  style={{
                    color: " #E4D9FF",
                    margin: "auto 23px",
                    fontSize: "16px",
                  }}
                >
                  Home
                </Button>
              </Link>

              <Link
                href="/property"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  color="inherit"
                  variant="text"
                  style={{
                    color: " #E4D9FF",
                    margin: "auto 23px",
                    fontSize: "16px",
                  }}
                >
                  Property
                </Button>
              </Link>

              <Link
                href="/agent"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  color="inherit"
                  variant="text"
                  style={{
                    color: " #E4D9FF",
                    margin: "auto 23px",
                    fontSize: "16px",
                  }}
                >
                  Agent
                </Button>
              </Link>

              <Link
                href="/about"
                underline="none"
                className={navbarOpen ? "toolbar-btn" : ""}
              >
                <Button
                  variant="text"
                  style={{
                    color: " #E4D9FF",
                    margin: "auto 23px",
                    fontSize: "16px",
                  }}
                >
                  About
                </Button>
              </Link>
            </Toolbar>
          )}

          {showDownMd && (
            <Box height={"69px"} display={"flex"}>
              <Button
                color="inherit"
                className="nav-open-btn"
                onClick={handleClick}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                id={navbarOpen ? "nav-btn-open" : ""}
              >
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
                <Typography className="ham" id={navbarOpen ? "active" : ""} />
              </Button>
            </Box>
          )}

          {!navbarOpen && (
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                right: "20px",
              }}
            >
              <Link href="/login" underline="none">
                <Button
                  style={{
                    backgroundColor: "#D1D4DB",
                    height: "80px",
                    color: "#12172B",
                    borderRadius: "0px",
                    textTransform: "none",
                  }}
                  className="btn-reg"
                  variant="contained"
                  disableElevation
                  disableFocusRipple
                >
                  Sign-In
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  style={{
                    backgroundColor: "#4358B1",
                    height: "80px",
                    color: "#fff",
                    borderRadius: "0px",
                    textTransform: "none",
                  }}
                  className="btn-reg"
                  variant="contained"
                  disableElevation
                >
                  Sign-Up
                </Button>
              </Link>
            </Box>
          )}
        </Container>
      </AppBar>
    </div>
  );
}
