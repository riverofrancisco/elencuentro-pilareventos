import { Box, Grid, TextField, Typography } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../../hooks/hooksRedux";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapLocation from "./Maps";

export default function ContactPage() {
  const currentLanguage = useAppSelector((state) => state.global.language);
  const [id, setId] = React.useState("Contacto");

  React.useEffect(() => {
    if (currentLanguage === "en") {
      setId("Contact");
    } else if (currentLanguage === "es") {
      setId("Contacto");
    }
  }, [currentLanguage]);

  return (
    <Grid container borderBottom={0.5} id={id}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 2,
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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <ContactForm currentLanguage={currentLanguage} />
      </Grid>
    </Grid>
  );
}
