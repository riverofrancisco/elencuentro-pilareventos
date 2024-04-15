import { Box, Grid, TextField, Typography } from "@mui/material";
import * as React from "react";
import { useAppSelector } from "../../hooks/hooksRedux";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapLocation from "./Maps";

export default function ContactPage() {
  const currentLanguage = useAppSelector((state) => state.global.language);
  const sections = useAppSelector((state) => state.global.sections);
  const sectionData =
    sections && sections.filter((section: any) => section.en == "Contact");

  return (
    <Grid
      container
      borderBottom={0.5}
      id={sectionData[0] ? sectionData[0][currentLanguage] : "Contacto"}
    >
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
            fontFamily: "Lovelo, sans-serif",
            fontWeight: 600,
            letterSpacing: ".1rem",
            fontSize: { xs: "calc(9vw)", sm: "calc(4vw)" },
          }}
        >
          {sectionData[0] ? sectionData[0][currentLanguage] : "Contacto"}
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
