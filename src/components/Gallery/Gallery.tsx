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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

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
  const [id, setId] = React.useState("Galeria");
  const [selectedItem, setSelected] = React.useState(0);
  const [openPicture, setOpenPicture] = React.useState(false);

  const handleOpenPicture = (index: number) => {
    setSelected(index);
    console.log(`Selected item: ${selectedItem}`);
    console.log(index);
    setOpenPicture(true);
  };

  React.useEffect(() => {
    if (currentLanguage === "en") {
      setId("Gallery");
    } else if (currentLanguage === "es") {
      setId("Galeria");
    }
  }, [currentLanguage]);

  return (
    <Box
      id={id}
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
          fontFamily: "CALIBRI",
          fontWeight: 900,
          letterSpacing: ".2rem",
          py: 3,
        }}
      >
        {" "}
        {id}
      </Typography>
      <Box
        sx={{
          display: "flex",
          bgcolor: "black",
          justifyContent: "center",
          width: { xs: "90%", sm: "80%", md: "75%" },
          flexWrap: "wrap",
          boxShadow: 15,
          py: 0.5,
          borderRadius: 3,
        }}
      >
        {galleryPictures.map((pic: any, index: number) => {
          return (
            <ImageCard
              key={pic.original}
              pic={pic}
              refresh={pic.originalTitle}
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
      />
    </Box>
  );
}
