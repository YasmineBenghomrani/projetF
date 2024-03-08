import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import HeroSection from "./heroSection";

export default function AppBarMUI() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        sx={{
          margin: 3,
          backgroundColor: "white",
          maxWidth: 1176,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: 3,
          padding: 0.5,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton size="large" edge="start" color="default">
                <MenuIcon
                  sx={{
                    color: "black",
                  }}
                />
              </IconButton>
            </Box>
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              color: "	#FF69B4",
              flexGrow: 1,
            }}
          >
            Panelinha
          </Typography>
          <Box
            className="box"
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link to={"/"}>
              <Button
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "cornflowerblue",
                  },
                }}
              >
                Shop
              </Button>
            </Link>
            <Link to={"Men"}>
              <Button
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "cornflowerblue",
                  },
                }}
              >
                Men
              </Button>
            </Link>
            <Link to={"Woman"}>
              <Button
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "cornflowerblue",
                  },
                }}
              >
                Woman
              </Button>
            </Link>
          </Box>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ color: "grey", mr: 2 }}
            >
              <AccountCircle
                sx={{
                  color: "grey",
                  "&:hover": {
                    color: "cornflowerblue",
                  },
                }}
              />
            </IconButton>
          </div>

          <Link to={"Login"}>
            <Button
              className="login"
              sx={{
                border: "none",
                borderRadius: 5,
              }}
              variant="contained"
            >
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
