import { Box, Grid, TextField, Typography, Paper } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../../hooks/hooksRedux";
import { Colours } from "../../Theme/theme";

export default function About() {
  const currentLanguage = useAppSelector((state) => state.global.language);
  const sections = useAppSelector((state) => state.global.sections);
  const sectionData =
    sections && sections.filter((section: any) => section.en == "About Us");

  return (
    <Grid
      container
      id={sectionData[0] ? sectionData[0][currentLanguage] : "Sobre Nosotros"}
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
            fontFamily: "Lovelo, sans-serif",
            fontWeight: 600,
            letterSpacing: ".1rem",
            fontSize:  {xs:"calc(9vw)", sm: "calc(4vw)"},
          }}
        >
          {sectionData[0] ? sectionData[0][currentLanguage] : "Sobre Nosotros"}
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
            borderRadius: "2%",
            height: "100%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "2%",
              objectFit: "cover",
            }}
            src={
              sectionData[0]
                ? sectionData[0].picture
                : "https://firebasestorage.googleapis.com/v0/b/elencuentro-pilareventos.appspot.com/o/Images%2FFOTO%20SOBRE%20NOSOTROS.jpeg?alt=media&token=1289f122-3d97-45a9-8b4f-4b06bd7ff18b"
            }
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
          borderRadius: "2%",
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
            borderRadius: "2%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              p: { xs: 2, md: 4, lg: 7 },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "justify",
              }}
            >
              {sectionData[0]
                ? sectionData[0].description[currentLanguage].split('|').map((parr: any)=>{return <p>{parr}</p>})
                : <div><p>Somos un espacio de eventos en crecimiento, con trayectoria tanto en eventos sociales como empresariales, y masivos. Nuestra mayor motivación es crear eventos únicos, y nuestro objetivo principal es brindarles la mejor atención y el servicio posible, en un contexto de paz y naturaleza.</p><p> Contamos con un espacio de 16.000 m2 disponible para crear el evento de tus sueños, con la versatilidad necesaria para realizarlo a la medida de tus deseos. El amplio espacio verde invita a crear escenas magníficas debajo de los árboles o armar las puestas con carpas a lo largo del predio. Incluso se pueden realizar ceremonias únicas entre los árboles, con los colores del atardecer.</p></div>}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
