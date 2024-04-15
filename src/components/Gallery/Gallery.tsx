import * as React from "react";
import { useAppSelector } from "../../hooks/hooksRedux";

import ImageCard from "./ImageCard";

import {
  IconButton,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material/";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InteractiveGallery from "./GalleryReact";
import { galleryPictures } from "../../draftData/data";
import { Colours } from "../../Theme/theme";

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  const currentLanguage = useAppSelector((state) => state.global.language);
  const sections = useAppSelector((state) => state.global.sections);
  const sectionData =
    sections && sections.filter((section: any) => section.en == "Gallery");

  const galleryPics = useAppSelector((state: any) => state.global.pictures);

  const [selectedItem, setSelected] = React.useState(0);
  const [openPicture, setOpenPicture] = React.useState(false);

  const handleOpenPicture = (index: number) => {
    setSelected(index);
    console.log(`Selected item: ${selectedItem}`);
    console.log(index);
    setOpenPicture(true);
  };

  React.useEffect(() => {
    console.log(galleryPics);
    console.log(sectionData[0]);
  }, [currentLanguage]);

  return (
    <Box
      id={sectionData[0] ? sectionData[0][currentLanguage] : "Galería"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        py: 4,
        zIndex: 0,
      }}
    >
      <Typography
        variant="h3"
        component="div"
        color="inherit"
        sx={{
          fontFamily: "Lovelo, sans-serif",
          fontWeight: 600,
          letterSpacing: ".1rem",
          py: 3,
        }}
      >
        {" "}
        {sectionData[0] ? sectionData[0][currentLanguage] : "Galería"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          bgcolor: Colours.Beige2,
          justifyContent: "center",
          width: { xs: "90%", sm: "80%", md: "75%" },
          flexWrap: "wrap",
          boxShadow: 15,
          py: 0.5,
          borderRadius: 3,
        }}
      >
        {galleryPics &&
          galleryPics.map((pic: any, index: number) => {
            return (
              <ImageCard
                key={pic.original}
                pic={pic}
                refresh={pic.originalTitle.en}
                item={index}
                handleOpenPicture={handleOpenPicture}
              />
            );
          })}
      </Box>

      <InteractiveGallery
        selectedItem={selectedItem}
        openPicture={openPicture}
        setOpen={setOpenPicture}
        pictures={galleryPics}
      />
    </Box>
  );
}
