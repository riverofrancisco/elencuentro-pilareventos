import React, { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Box } from "@mui/material";
import { Colours } from "../../Theme/theme";

const { REACT_APP_MAPS_API_KEY } = process.env;

const MyMap = () => {
  const position = { lat: -34.412869, lng: -58.9007892 };

  return (
    <APIProvider apiKey={REACT_APP_MAPS_API_KEY ? REACT_APP_MAPS_API_KEY : ""}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          my: 3,
          boxShadow: 3,
        }}
      >
        <Map
          style={{ width: "100vw", height: "50vh" }}
          center={position}
          defaultZoom={15}
        >
          <Marker position={position} />
        </Map>
      </Box>
    </APIProvider>
  );
};

export default MyMap;
