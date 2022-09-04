import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
const buttonStyle = { textDecoration: "none", color: "white" };
export default function ButtonAppBar() {
  let location = useLocation();
  let currentLocation = location.pathname;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "rgb(38 157 245)" }} position="static">
        <Toolbar>
          <Box variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              alt="app-icon"
              src="/app-icon.png"
              style={{ height: "60px" }}
            />
          </Box>
          {currentLocation !== "/" && (
            <Link style={buttonStyle} to={"/"}>
              <Button color="inherit">Search Weather!</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
