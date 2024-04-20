import * as React from "react";
import { Typography } from "@mui/material/";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { Colours } from "../../Theme/theme";

const LandingPage: React.FC = () => {
  const sections = useAppSelector((state) => state.global.sections);
  const sectionData =
    sections && sections.filter((section: any) => section.en == "Home");
  const currentLanguage = useAppSelector((state) => state.global.language);

  return (
    <Grid
      container
      id={sectionData[0] ? sectionData[0][currentLanguage] : "Inicio"}
      mt={12}
      position={"relative"}
      sx={{
        bgImageOpacity: 0.2,
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5)),
          url('https://firebasestorage.googleapis.com/v0/b/elencuentro-pilareventos.appspot.com/o/Images%2FFOTO%20PAGINA%20PRINCIPAL.jpg?alt=media&token=bdcee44c-3390-4292-9b09-ee1eafc4f7af')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          mt: { xs: 0, lg: -12 },
          zIndex: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*  <Box
          sx={{
            height: "40%",
            display: { xs: "none", md: "flex" },
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={
              sectionData[0]
                ? sectionData[0].logo
                : "https://firebasestorage.googleapis.com/v0/b/elencuentro-pilareventos.appspot.com/o/Images%2FLogoLightShadow.png?alt=media&token=53ff89af-2d41-46a7-a49f-0f2b6345584e"
            }
            alt="logo"
          />
        </Box> */}
        <Box
          sx={{
            py: { sx: 0, md: 5, lg: 10 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              p: 1,
            }}
          >
            <Typography
              variant="h1"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "Lovelo, sans-serif",
                fontWeight: 600,
                letterSpacing: ".5rem",
                color: Colours.Crema,
                textDecoration: "none",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontSize: { xs: "calc(9vw)", md: "calc(6vw)" },
              }}
            >
              El Encuentro
            </Typography>
          </Box>
          <Box>
            <Typography
              gutterBottom
              variant="h4"
              sx={{
                fontFamily: "Space Mono, monospace",
                letterSpacing: ".2rem",
                color: Colours.Crema,
                fontSize: { xs: "calc(5vw)", md: "calc(3vw)" },
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
