import React from "react";
import {
  Typography,
  Link,
  Button,
  ListItemIcon,
  Tooltip,
} from "@mui/material/";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Colours } from "../../Theme/theme";
import LOGOLIGHT from "../../draftData/Images/LogoELEN Light.png";
import LOGO from "../../draftData/Images/LogoELEN.png";

const actions = [
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    linkto: "https://www.linkedin.com/in/rivero-francisco/",
  },
  {
    icon: <GitHubIcon />,
    name: "GitHub",
    linkto: "https://github.com/riverofrancisco",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    linkto: "mailto:franciscojose.rivero.ar@gmail.com",
  },
  {
    icon: <CloudDownloadIcon />,
    name: "Resume",
    linkto:
      "https://drive.google.com/file/d/1x4dvUctPtHYo1LjbYf54GE-swLD_xBXu/view?usp=sharing",
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
        <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }} justifySelf="center" alignItems="center">
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
              mr: {xs: "none", sm: 2},
              display: { xs: "flex" },
              fontWeight: { xs: 200, sm: 700 },
              letterSpacing: { sm: ".2rem" },
              color: "inherit",
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
                    transition: "opacity 0.3s ease-in", // Transición suave para el efecto de borde
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
    </footer>
  );
};

export default Footer;
