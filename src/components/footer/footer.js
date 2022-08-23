import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        style={{ backgroundColor: "rgb(0, 30, 60)", height: "55px" }}
        showLabels
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          href={"https://github.com/Ameer-Alaswad/"}
          style={{ color: "white" }}
          label="Github"
          showLabel={true}
          icon={<GitHubIcon />}
        />

        <BottomNavigationAction
          href={"https://www.linkedin.com/in/ameer-alaswad-27219a207/"}
          style={{ color: "white" }}
          label="LinkedIn"
          showLabel={true}
          icon={<LinkedInIcon />}
        />

        <BottomNavigationAction
          href={"https://ameer-alaswad.netlify.app/"}
          style={{ color: "white" }}
          label="Portfolio"
          showLabel={true}
          icon={<AccountBoxIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
