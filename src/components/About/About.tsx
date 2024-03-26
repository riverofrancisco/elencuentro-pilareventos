import { Box, Grid, TextField, Typography, Paper } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../../hooks/hooksRedux";
import { Colours } from "../../Theme/theme";

export default function About() {
  const currentLanguage = useAppSelector((state) => state.global.language);
  const [id, setId] = React.useState("Sobre Nosotros");

  React.useEffect(() => {
    if (currentLanguage === "en") {
      setId("About us");
    } else if (currentLanguage === "es") {
      setId("Sobre Nosotros");
    }
  }, [currentLanguage]);

  return (
    <Grid
      container
      id={id}
      borderBottom={0.5}
      sx={{
        px: { xs: "10%", sm: "15%" },
        py: 3,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "CALIBRI",
            fontWeight: 900,
            letterSpacing: ".2rem",
          }}
        >
          {id}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pr: { xs: "none", lg: 2 },
          pb: { xs: 2, lg: 0 },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            borderRadius: "3%",
            height: "100%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "3%",
              objectFit: "cover",
            }}
            src="https://firebasestorage.googleapis.com/v0/b/elencuentro-pilareventos.appspot.com/o/Images%2FLandingBack.png?alt=media&token=9be08f8e-94a2-4b6b-bc97-02ac91229832"
            alt="main picture"
          />
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 3,
          border: 0.5,
          borderColor: "grey",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: Colours.Crema,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            borderRadius: "3%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              p: 8,
            }}
          >
            <Typography variant="subtitle1">
              En Quinta el Tata, contamos con la colaboración de ARPILAR.
              Empresa líder en organización y coordinación de eventos
              corporativos y sociales. Buscamos satisfacer las necesidades de
              los clientes, acompañándolos desde el primer momento y
              ofreciéndoles las mejores alternativas, propuestas y servicios. La
              clave de nuestro éxito es el trabajo en equipo y escuchar al
              cliente con la atención necesaria, para transformar sus ideas en
              eventos únicos.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
