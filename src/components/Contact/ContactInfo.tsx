import * as React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { Stack, Tooltip, IconButton,  } from "@mui/material";

//import { RiTwitterXFill } from "react-icons/ri";





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
    /*  {
        icon: <RiTwitterXFill />,
        name: "X",
        linkto: "https://twitter.com/RiveroFran_IT",
        }, */
  
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


  const ContactInfo = () => {

    const handleLink = (link: string) => {
        if (link) window.open(link, "_blank");
      };


    return ( 
        <Stack display="flex" flexDirection="row" alignItems="center">
    {actions.map((action) => {
      return (
        <Tooltip key={`FooterMedia${action.name}`} title={action.name} placement="top">
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
  </Stack>)
  }

export default ContactInfo