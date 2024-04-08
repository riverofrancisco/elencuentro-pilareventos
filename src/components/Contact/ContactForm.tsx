import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Fade,
  Typography,
  Paper,
  TextField,
  Grid,
  Box,
  Autocomplete,
} from "@mui/material";

//ICONS
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";

//FUNCTIONALITY
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import { emptyFormContent } from "../../interfaces/interfaces";
import { Colours } from "../../Theme/theme";
import { current } from "@reduxjs/toolkit";

const { REACT_APP_publicKey, REACT_APP_serviceID, REACT_APP_templateID } =
  process.env;

export interface Contacts {
  name: string;
  lastName: string;
  mail: string;
  message: string;
}
interface Props {
  currentLanguage: string;
}

export default function ContactForm({ currentLanguage }: Props) {
  const defaultType = {
    options: ["Alquiler espacio"],
    getOptionLabel: (option: any) => option,
  };

  //// INPUTS
  const [currentData, setCurrentData] = useState(emptyFormContent);

  const handleTypeChange = (
    event: React.ChangeEvent<{}>,
    value: string | null
  ) => {
    setCurrentData({
      ...currentData,
      type: value as
        | "Propuesta integral"
        | "Alquiler espacio"
        | "Alquiler espacio y ambientación",
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [parentProperty, childProperty] = name.split(".");
      setCurrentData((currentData: any) => ({
        ...currentData,
        [parentProperty]: {
          ...currentData[parentProperty],
          [childProperty]: value,
        },
      }));
    } else {
      setCurrentData({
        ...currentData,
        [name]: value,
      });
    }
  };

  /// VALIDATIONS
  //GUESTS
  const [validNumber, setValidNumber] = useState(true);
  function validateNumber() {
    if (1 < currentData.guests && currentData.guests < 500) {
      setValidNumber(true);
    } else {
      setValidNumber(false);
    }
  }

  // EMAIL
  const [validEmail, setValidEmail] = useState(true);
  const regexWhite = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  function validateEmail() {
    if (regexWhite.test(currentData.host.email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  //DATE
  const isDateEnabled = (date: string) => {
    const disabledDates = ["2024-05-01", "2024-12-25"];
    return !disabledDates.includes(date);
  };

  //BUTTON
  const [submiteable, setSubmiteable] = useState(false);

  function isSubmiteable() {
    // Lista de campos requeridos y su estado de validez
    const requiredFields = [
      { name: "type", valid: !!currentData.type },
      { name: "guests", valid: currentData.guests > 1 },
      { name: "host.name", valid: !!currentData.host.name },
      { name: "host.lastName", valid: !!currentData.host.lastName },
      { name: "host.email", valid: !!currentData.host.email && validEmail },
      { name: "host.phone", valid: !!currentData.host.phone },
      // Agrega más campos aquí según sea necesario
    ];

    // Verifica si todos los campos requeridos están llenos y válidos
    const allFieldsFilled = requiredFields.every((field) => field.valid);

    // Actualiza el estado de submiteable
    setSubmiteable(allFieldsFilled);
  }

  useEffect(() => {
    isSubmiteable();
    setCurrentData({
      ...currentData,
    });
  }, [currentData]);

  ////ALERT
  const [showAlert, setShowAlert] = useState(false);

  ////SUBMIT
  emailjs.init(`${REACT_APP_publicKey}`);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(currentData);
    event.preventDefault();

    emailjs
      .send(`${REACT_APP_serviceID}`, `${REACT_APP_templateID}`, {
        message: `${currentData.comments}`,
        client_name: `${currentData.host.name}`,
        event_type: `${currentData.type}`,
        event_date: `${currentData.date}`,
        event_guests: `${currentData.guests}`,
        client_lastname: `${currentData.host.lastName}`,
        client_email: `${currentData.host.email}`,
        client_phone: `${currentData.host.phone}`,
      })
      .then(
        (response: EmailJSResponseStatus) => {
          alert(
            `${
              currentLanguage === "es"
                ? "¡Mensaje enviado correctamente!"
                : "Message sent successfully!"
            }`
          );
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
          setCurrentData(emptyFormContent);
        },
        (error: EmailJSResponseStatus) => {
          alert(
            `${
              currentLanguage === "es"
                ? "Error al enviar el mensaje."
                : "Error sending the message."
            }`
          );
          console.log(`Error sending form: ${error}`);
        }
      );
  };

  return (
    <Grid
      container
      id="contact-form"
      key="contact-form"
      sx={{
        mx: { xs: "2%", sm: "11%" },
        p: { xs: "2.5%", md: "2%" },
        borderRadius: 3,
        bgcolor: Colours.Gris,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 5,
            mb: { xs: 2, md: "none" },
            mx: { xs: "none", md: 1 },
            bgcolor: Colours.Crema,
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Typography variant="h6">
            {currentLanguage === "es" ? "Sobre el Evento" : "Event Info"}
          </Typography>
          <Box
            sx={{
              my: 1.5,
              width: "100%",
            }}
          >
            <Autocomplete
              {...defaultType}
              openOnFocus
              options={defaultType.options}
              value={currentData.type}
              onChange={handleTypeChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={
                    currentLanguage === "es" ? "Tipo de Evento" : "Event Type"
                  }
                  name="type"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              )}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center" },
              justifyContent: { xs: "center", sm: "space-between" },
              width: "100%",
              my: 1.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: { xs: "100%", sm: "45%" },
                justifyContent: { xs: "center", sm: "left" },
                mb: { xs: 1.5, sm: 0 },
              }}
            >
              <TextField
                label={
                  currentLanguage === "es"
                    ? "Cantidad de Invitados"
                    : "Amount of Guests"
                }
                type="number"
                name="guests"
                value={currentData.guests}
                onChange={handleChange}
                variant="outlined"
                sx={{ width: "97%" }}
                size="small"
                InputProps={{
                  inputProps: {
                    min: 2,
                    max: 501,
                  },
                }}
                onBlur={validateNumber}
                error={!validNumber}
                helperText={
                  !validNumber &&
                  `${
                    currentLanguage === "es"
                      ? "Selecciona un numero entre 2 y 500"
                      : "Please choose a number between 2 and 500."
                  }`
                }
                required
              />{" "}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "right" },
                width: "100%",
              }}
            >
              <TextField
                type="date"
                name="date"
                value={currentData.date}
                onChange={handleChange}
                variant="outlined"
                sx={{ width: "97%" }}
                size="small"
                InputProps={{
                  inputProps: {
                    min: new Date().toISOString().split("T")[0],
                    max: "2025-12-31",
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />{" "}
            </Box>
          </Box>
          <Box my={1.5} sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              label={currentLanguage === "es" ? "Comentarios" : "Comments"}
              type="text"
              multiline
              name="comments"
              value={currentData.comments}
              onChange={handleChange}
              variant="filled"
              sx={{ width: "100%" }}
              size="small"
              rows={5}
              required
            />{" "}
          </Box>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alingItems: "center",
            justifyContent: "center",
            p: 5,
            mx: { xs: "none", md: 1 },
            borderRadius: 5,
            width: "100%",
            bgcolor: Colours.Crema,
          }}
        >
          <Typography variant="h6">
            {currentLanguage === "es"
              ? "Información de Contacto"
              : "Contact Info"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <AccountCircle sx={{ color: "action.active", m: 1 }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                width: "100%",
                justifyContent: { sm: "space-between" },
                my: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "100%", sm: "45%" },
                }}
              >
                <TextField
                  label={currentLanguage === "es" ? "Nombre" : "Name"}
                  type="text"
                  name="host.name"
                  value={currentData.host.name}
                  onChange={handleChange}
                  variant="filled"
                  sx={{ width: "100%" }}
                  size="small"
                  required
                />{" "}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "100%", sm: "45%" },
                }}
              >
                <TextField
                  label={currentLanguage === "es" ? "Apellido" : "Last Name"}
                  type="text"
                  name="host.lastName"
                  value={currentData.host.lastName}
                  onChange={handleChange}
                  variant="filled"
                  sx={{ width: "100%" }}
                  size="small"
                  required
                />{" "}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              my: 1,
            }}
          >
            <EmailIcon
              sx={{
                color: "action.active",
                m: 1,
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", width: "91%" }}>
              <TextField
                name="host.email"
                error={!validEmail}
                helperText={
                  !validEmail &&
                  `${
                    currentLanguage === "es"
                      ? "Por favor ingresa una dirección de email válida"
                      : "Please enter a valid email"
                  }`
                }
                onBlur={validateEmail}
                required
                label={
                  currentLanguage === "es" ? "Correo Electrónico" : "Email"
                }
                variant="filled"
                value={currentData.host.email}
                sx={{ width: "100%" }}
                onChange={handleChange}
                size="small"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              my: 1,
            }}
          >
            <PhoneIcon sx={{ color: "action.active", m: 1 }} />
            <Box
              my={1}
              sx={{ display: "flex", alignItems: "center", width: "91%" }}
            >
              <TextField
                label={currentLanguage === "es" ? "Teléfono" : "Phone"}
                type="text"
                multiline
                name="host.phone"
                value={currentData.host.phone}
                onChange={handleChange}
                variant="filled"
                sx={{ width: "100%" }}
                size="small"
                required
              />{" "}
            </Box>
          </Box>
        </Paper>
        <Button
          onClick={handleSubmit}
          disabled={!submiteable}
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          sx={{
            my: 1,
            width: "100%",
            alignSelf: "center",
            borderRadius: 2,
          }}
        >
          {currentLanguage === "es" ? "Enviar Mensaje" : "Sent Message"}
        </Button>
        <Fade in={showAlert}>
          <Alert
            severity="success"
            sx={{
              my: 1,
              width: "100%",
              alignSelf: "center",
              borderRadius: 4,
            }}
          >{`${
            currentLanguage === "es"
              ? "¡Mensaje enviado correctamente!"
              : "Message sent successfully!"
          }`}</Alert>
        </Fade>
      </Grid>
    </Grid>
  );
}
