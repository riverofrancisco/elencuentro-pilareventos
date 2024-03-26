import React from "react";
import { Paper } from "@mui/material/";
import BGland from "../../draftData/Images/LandingBack.png"

const LandingBG: React.FC = () => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        backgroundImage:
          "url('https://2.bp.blogspot.com/-r2taFYiaR_c/U-19DWXpyyI/AAAAAAAAABQ/KPhBXlkDlH4/s1600/eventos-sociales.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        filter: "blur(5px)",
        marginTop: 12,
        zIndex: 1, // Asegúrate de que el fondo tenga un z-index menor
      }}
    />
  );
};

export default LandingBG;