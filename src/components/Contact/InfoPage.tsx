import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../../hooks/hooksRedux";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MyMap from "./Maps";

const actions = [
  {
    icon: <EmailIcon />,
    description: "info@elencuentropilareventos.com.ar",
    linkto: "mailto:info@elencuentropilareventos.com.ar",
  },
  {
    icon: <WhatsAppIcon />,
    description: "+54 11 2188 9954",
    linkto: "https://wa.me/5491121889954",
  },
  {
    icon: <LocationOnIcon />,
    description:
      "Neuquen esq. S J Frank, Las Colinas, Villa Rosa, Provincia de Buenos Aires, Argentina",
    linkto: "https://www.google.com/maps?q=-34.4127769470215,-58.9008483886719",
  },
  {
    icon: <InstagramIcon />,
    description: "@elencuentropilareventos",
    linkto: "https://www.instagram.com/elencuentropilareventos",
  },
];

export default function InfoPage() {
  const currentLanguage = useAppSelector((state) => state.global.language);
  const [id, setId] = React.useState("Contacto");

  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };
  React.useEffect(() => {
    if (currentLanguage === "en") {
      setId("Contact");
    } else if (currentLanguage === "es") {
      setId("Contacto");
    }
  }, [currentLanguage]);

  return (
    <Grid
      container
      borderBottom={0.5}
      id={id}
      sx={{ px: { xs: "5%", md: "10%", lg: "15%" } }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            width: "100%",
            alignSelf: "start",

            my: { xs: 0, md: 8, lg: 12 },
            pt: { xs: 0, md: 2 },
            pl: { xs: 0, md: 3 },
          }}
        >
          <Typography variant="h5" gutterBottom mb={3}>
            {currentLanguage === "es"
              ? "¿Donde nos encontras?"
              : "¿Where to find us?"}
          </Typography>

          {actions.map((action, index) => {
            return (
              <Box key={action.description} display="flex" p={0.5}>
                <Box
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleLink(action.linkto)}
                >
                  {action.icon}
                </Box>
                <Typography ml={1}>{action.description}</Typography>
              </Box>
            );
          })}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MyMap />
      </Grid>
    </Grid>
  );
}
