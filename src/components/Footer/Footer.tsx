import React from "react";
import {
  Typography,
  Tooltip,
} from "@mui/material/";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Colours } from "../../Theme/theme";


const actions = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    linkto: "https://www.instagram.com/elencuentropilareventos",
  },
  {
    icon: <WhatsAppIcon />,
    name: "WhatsApp",
    linkto: "https://wa.me/5491121889954",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    linkto: "mailto:info@elencuentropilareventos.com.ar",
  },
  {
    icon: <LocationOnIcon />,
    name: "Ubicación",
    linkto: "https://www.google.com/maps?q=-34.4127769470215,-58.9008483886719",
  },
];

const Footer: React.FC = () => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <footer>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgcolor={Colours.Gris}
        color="white"
        py={4}
        px="10%"
      >
        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
          justifySelf="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <img
              width={100}
              src={`https://firebasestorage.googleapis.com/v0/b/elencuentro-pilareventos.appspot.com/o/Images%2FLogoELEN%20Light.png?alt=media&token=1bf51c43-766c-4d62-b978-ee16d6bab1b6`}
              alt="logo"
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "Lovelo, sans-serif",
              mr: { xs: "none", sm: 2 },
              display: { xs: "flex" },
              fontWeight: { xs: 200, sm: 700 },
              letterSpacing: { sm: ".2rem" },
              color: Colours.Crema,
              textDecoration: "none",
            }}
          >
            El Encuentro
          </Typography>
        </Box>

        <Stack
          display="flex"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
          alignItems="center"
        >
          {actions.map((action) => {
            return (
              <Tooltip
                key={`FooterMedia${action.name}`}
                title={action.name}
                placement="top"
              >
                <IconButton
                  color="inherit"
                  key={action.name}
                  sx={{
                    opacity: 0.5,
                    borderBottom: "0px solid transparent",
                    transition: "opacity 0.3s ease-in",
                    "&:hover": {
                      opacity: 1,

                      transitionDelay: "0.05s",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleLink(action.linkto)}
                >
                  {action.icon}
                </IconButton>
              </Tooltip>
            );
          })}
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          bgcolor: Colours.Gris,
        }}
      >
        <Typography
          gutterBottom
          variant="caption"
          sx={{
            opacity: 0.3,
            transition: "opacity 0.2s ease-in",
            "&:hover": {
              opacity: 0.8,
              cursor: "pointer",
            },

            fontFamily: "Lovelo, sans-serif",

            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontSize: { md: "calc(1.5vh)" },
            color: Colours.Negro,
          }}
          onClick={() => handleLink("https://frivero.com.ar/")}
        >
          ©2024 Developed by FREDI
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
