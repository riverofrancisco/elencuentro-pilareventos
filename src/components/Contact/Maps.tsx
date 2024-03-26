import * as React from "react";
import { Box } from "@mui/material";

const MapLocation = () => {
  return (
    <Box
      sx={{
        width: "70%",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "3%",
          objectFit: "cover",
        }}
        src="https://css-tianguis.com/wp-content/uploads/2020/03/google-maps-links.png"
        alt="location"
      />
    </Box>
  );
};

export default MapLocation;
