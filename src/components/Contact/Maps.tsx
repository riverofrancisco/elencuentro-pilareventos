import React from "react";
import { Box } from "@mui/material";

const { REACT_APP_MAPS_API_KEY } = process.env;

const MyMap = () => {
return (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: {xs:"300px", md:"100%"},
      m: 3,
      boxShadow: 3,
    }}
  >
    <iframe
      title="prueba"
      width="100%"
      height="100%"
      loading="lazy"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=-34.4127769470215%2C-58.9008483886719&key=${REACT_APP_MAPS_API_KEY}`}
    ></iframe>
  </Box>
);
  
};

export default MyMap;
