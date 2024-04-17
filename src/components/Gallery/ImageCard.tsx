import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Typography, Badge, IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
//import SkillForm from "../Forms/Skills/SkillForm";
//import { emptySkill } from "../../interfaces/interfaces";
//import { deleteSkill } from "../../middlewares/skills/delete";
import DeleteIcon from "@mui/icons-material/Delete";
import { Colours } from "../../Theme/theme";
//import { skillsUpdater } from "../../redux/portfolio/actions";
//import { MenuOptionsSkill } from "../Actions/MenuOptions";

interface Props {
  pic: any;
  refresh: any;
  handleOpenPicture: any;
  item: number;
}

const ImageCard = ({ pic, refresh, handleOpenPicture, item }: Props) => {
  const dispatch = useAppDispatch();
  //const mode = useAppSelector((state) => state.global.mode);
  const currentLanguage = useAppSelector((state) => state.global.language);
  //const isAuth = useAppSelector((state)=> state.global.isAuth);

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        width: { xs: "49%", sm: "33%" },
      p:0.5,
        bgcolor: Colours.Crema,
        opacity: 1,
        transition: "opacity 0.3s ease-in-out",
        "&:hover": {
          transitionDelay: "0.05s",
          cursor: "pointer",
        },
      }}
      onClick={() => handleOpenPicture(item)}
    >
      {/* <Badge  anchorOrigin={{ vertical: 'top', horizontal: 'right' }} badgeContent={ isAuth && <MenuOptionsSkill key={skill.id} id={skill.id} updateform={<SkillForm skill={skill} refresh={refresh} currentLanguage={currentLanguage} isEditing={true}/>}/>}> */}

      <Tooltip
        title={pic.originalTitle
        }
        placement="bottom"
        onClose={handleTooltipClose}
        onOpen={handleTooltipOpen}
        open={open}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "3%",
            objectFit: "cover",
          }}
          src={pic.original}
          alt={pic.originalTitle[currentLanguage]}
        />
      </Tooltip>

      {/*       </Badge> */}
    </Box>
  );
};

export default ImageCard;
