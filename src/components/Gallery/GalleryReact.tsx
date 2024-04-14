import * as React from "react";
import { Box, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { galleryPictures } from "../../draftData/data";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

interface Props {
  selectedItem: any;
  openPicture: boolean;
  setOpen: any;
  pictures: any
}

export default function InteractiveGallery({
  selectedItem,
  openPicture,
  setOpen,
  pictures
}: Props) {

 

  return (
    <Box
      sx={{
        display: openPicture ? "flex" : "none",
        flexDirection: { xs: "column", md: "row" },
        position: "fixed",
        justifyContent: "center",
        alignContent: "center",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo oscuro semi-transparente
        zIndex: 999,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          id:"closeButton",
          top: "3%",
          left: "1%",
          zIndex: 1000,
          backgroundColor: "rgba(100, 100, 100, 0.7)",
          borderRadius: 1.5,
        }}
      >
        <Button onClick={() => setOpen(false)}>
          <CloseIcon />
        </Button>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          zIndex: -2,
        }}
      >
        <Button sx={{ m: 2 }} onClick={() => setOpen(false)}>
          <CloseIcon />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <ImageGallery
          items={pictures}
          showBullets
          thumbnailPosition="right"
          startIndex={selectedItem}
        />{" "}
      </Box>
    </Box>
  );
}
