import * as React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import Button from "@mui/material/Button";
import LandingBG from "./Landing";
import { Colours } from "../../Theme/theme";
import LOGOLIGHT from "../../draftData/Images/LogoELEN Light.png";
import LOGO from "../../draftData/Images/LogoELEN.png";
import BGland from "../../draftData/Images/LandingBack.png";

const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.value);
  const currentLanguage = useAppSelector((state) => state.global.language);
  const [id, setId] = React.useState("Home");

  
  React.useEffect(() => {
    if (currentLanguage === "en") {
      setId("Home");
    } else if (currentLanguage === "es") {
      setId("Inicio");
    }
  }, [currentLanguage]);

  return (
    <Grid
      container
      id={id}
      mt={12}
      position={"relative"}
      sx={{
        bgImageOpacity: 0.2,
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
          url('https://firebasestorage.googleapis.com/v0/b/elencuentro-pilareventos.appspot.com/o/Images%2FLandingBack.png?alt=media&token=9be08f8e-94a2-4b6b-bc97-02ac91229832')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ zIndex: 0 }}
      >
        <Box
          height={"80vh"}
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ py: { sx: 0, md: 10 } }}
        >
          <Box
            sx={{
              display: "flex",
              bgcolor: Colours.Crema,
              borderRadius: 2,
              opacity: 0.85,
              p: 1,
            }}
          >
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "CALIBRI",
                fontWeight: 900,
                letterSpacing: ".4rem",
                color: Colours.Verde,
                textDecoration: "none",
              }}
            >
              El Encuentro
            </Typography>
          </Box>
          <Box>
            <Typography
              gutterBottom
              variant="subtitle1"
              sx={{
                fontFamily: "CALIBRI",
                letterSpacing: ".2rem",
                color: Colours.Crema,
              }}
            >
              PILAR EVENTOS
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
