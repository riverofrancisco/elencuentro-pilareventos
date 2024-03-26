import * as React from "react";
import { Box, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
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
}

export default function InteractiveGallery({
  selectedItem,
  openPicture,
  setOpen,
}: Props) {
  console.log(selectedItem);

  return (
    <Box
      sx={{
        display: openPicture ? "flex" : "none",
        flexDirection: { xs: "column", lg: "row" },
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo oscuro semi-transparente
        transform: "translate(-50%, -50%)",
        zIndex: openPicture ? 999 : -1,
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          justifyContent: "center",
          alignItems: "center",
          zIndex: -2,
        }}
      >
        <Button sx={{ m: 2 }} onClick={() => setOpen(false)}>
          <CloseIcon />
        </Button>
      </Box>
      <ImageGallery
        items={galleryPictures}
        showBullets
        thumbnailPosition="right"
        startIndex={selectedItem}
      />
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          position: "relative",
          height: "100%",
          zIndex: -2,
        }}
      >
        <Button
          sx={{ position: "absolute", m: 1, top: 0, left: 0 }}
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </Button>
      </Box>
    </Box>
  );
}
