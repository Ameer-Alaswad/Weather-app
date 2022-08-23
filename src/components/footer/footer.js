import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        style={{ backgroundColor: "rgb(0, 30, 60)", height: "50px" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Github"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="LinkedIn"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Portfolio"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
