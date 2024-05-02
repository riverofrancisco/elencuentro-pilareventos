import { Button, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { LanguageSwitcher } from "../../redux/elencuentro/actions";

const LanguageButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.global.language);
  const [isEnglish, setIsEnglish] = useState(false);

  const handleLanguage = () => {
    dispatch(LanguageSwitcher());
    //console.log(currentLanguage);
    setIsEnglish(!isEnglish);

    // Lógica para cambiar el idioma aquí
  };

  return (
    <IconButton
      color="inherit"
      onClick={handleLanguage}
      size="small"
      sx={{ p: 1, my: 1 }}
    >
      <Typography sx={{ fontFamily: "Space Mono, monospace",}}> {currentLanguage}</Typography>
    </IconButton>
  );
};

export default LanguageButton;
