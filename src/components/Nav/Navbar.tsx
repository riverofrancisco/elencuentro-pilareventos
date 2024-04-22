import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { ModeSwitcher } from "../../redux/elencuentro/actions";
import LoginForm from "../Auth/Login";
import LogoutButton from "../Auth/Logout";

import {
  AppBar,
  Box,
  IconButton,
  CssBaseline,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  SwipeableDrawer,
  List,
  LinearProgress,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

//import Searcher from "./Searcher";
import { styled } from "@mui/material/styles";
import { itemsNav } from "../../draftData/data";
import { getSections } from "../../middlewares/sections/crud";
//import { navItems as ItemsEN } from "../../data/dataEN";
import LanguageButton from "./LanguageButton";
import { SectionsSetter } from "../../redux/elencuentro/actions";
import ElevationScroll from "./NavbarEffect";
import { Colours } from "../../Theme/theme";
import LOGOLIGHT from "../../draftData/Images/LogoELEN Light.png";
import LOGO from "../../draftData/Images/LogoELEN.png";
import { idText } from "typescript";

//// PROGRESS BAR
const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  height: 4,
  zIndex: theme.zIndex.drawer - 1,
}));

export default function NavBar() {
  //AUTH
  const isAuth = useAppSelector((state) => state.global.isAuth);

  const [scrolling, setScrolling] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const handleScroll = () => {
    const scrollMax =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    const progress = (scrollTop / scrollMax) * 100;
    setScrollProgress(progress);
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  //// LANGUAGE INFO
  const currentLanguage = useAppSelector((state) => state.global.language);
  let navItems = useAppSelector((state) => state.global.sections);
  const [Items, setItems] = React.useState(itemsNav[currentLanguage]);

  /* const getData = async () => {
    const data = await getSections();
    const itemsToDispatch = []
    const items = data.map((item)=> {
        itemsToDispatch.push({
            en: item.en,
            es: item.es
        })
    })
    dispatch(SectionsSetter(data));
  };
 */
  const handleItems = () => {
    setItems(itemsNav[currentLanguage]);
  };

  ///

  //// REDUX DARK/LIGHTMODE
  const dispatch = useAppDispatch();
  const currentMode = useAppSelector((state) => state.global.mode);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [section, setSection] = React.useState("");
  ////DARK MODE
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [colorNav, setColorNav] = React.useState(Colours.Beige);

  const handleColor = (mode: boolean) => {
    if (mode) {
      setColorNav(Colours.Negro);
    } else {
      setColorNav(Colours.Beige);
    }
  };

  const handleToggleDarkMode = () => {
    dispatch(ModeSwitcher());
    console.log(currentMode);
    handleColor(isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  ////SCROLLING WITH CLICK
  function scrollToTextField(id: string) {
    console.log(id);
    console.log(typeof id);
    if (mobileOpen) setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = -60; // ajuste de posición para la barra de navegación
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setSection(id);
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  ////RESPONSIVE MENU
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMobileOpen(open);
    };

  React.useEffect(() => {
    handleItems();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentLanguage]);

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <StyledLinearProgress
        variant="determinate"
        value={scrollProgress}
        color="info"
      />
      <SwipeableDrawer
        anchor="top"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems && navItems.map((it: any) => {
              return (
                <ListItem key={it.id} disablePadding>
                  <ListItemButton onClick={() => scrollToTextField(it)}>
                    {it[currentLanguage]}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </SwipeableDrawer>
      <Box sx={{ display: "flex", zIndex: 1, }}>
        <CssBaseline />
        <React.Fragment>
          <CssBaseline />
          <ElevationScroll>
            <AppBar
              component="nav"
              sx={{
                px: "10%",
                transition: "background-color 0.4s ease",
                bgcolor: !scrolling ? "transparent" : colorNav,
                py: { xs: 0.5, md: 0.5 },
              }}
            >
              <Toolbar
                sx={{
                  px: { md: 5 },
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  ml={0.5}
                  sx={{
                    display: { xs: "flex", sm: "flex", md: "none" },
                    opacity: 0.8,
                    transition: "0.3s ease", // Transición suave para el efecto de borde
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                      transitionDelay: "0.02s",
                    },
                  }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer(true)}
                    sx={{
                      mr: 2,
                      display: { xs: "flex", sm: "flex", md: "none" },
                      flexGrow: 0,
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  {isAuth ? (
                    <Box py={1}>
                      <LogoutButton />
                    </Box>
                  ) : (
                    <Box py={1}>
                      <LoginForm />
                    </Box>
                  )}
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    opacity: 1,
                
                  }}
                >
                  <Box
                    mr={0.5}
                    sx={{
                      display: "flex",
                    }}
                  >
                    <img
                      width={60}
                      src={`https://firebasestorage.googleapis.com/v0/b/elencuentro-pilareventos.appspot.com/o/Images%2FLogoELEN.png?alt=media&token=041870e7-33b9-4ccf-aae8-59fb9a821188`}
                      alt="logo"
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    component="div"
                    color="inherit"
                    sx={{ fontFamily: "Lovelo, sans-serif" }}
                  >
                    El Encuentro
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {navItems && navItems.map((item: any) => (
                  <Box key={item.id}>
                      {" "}
                      <Box
                        sx={{
                          py: 0.5,
                          px: 1,
                          color: "inherit",
                          opacity: 0.7,
                          borderBottom: "0px solid transparent",
                          transition:
                            "opacity 0.3s ease-in, border-bottom 0.3s ease-out", // Transición suave para el efecto de borde
                          "&:hover": {
                            opacity: 1,
                            borderBottom: "1px solid",
                            transitionDelay: "0.05s",
                            cursor: "pointer",
                          },
                        }}
                      onClick={() => scrollToTextField(item[currentLanguage])}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ fontFamily: "Space Mono, monospace" }}
                        >
                          {item[currentLanguage]}
                        </Typography>
                      </Box>{" "}
                    </Box>
                  ))}
                </Box>
                <Box display="flex">
            
                  <LanguageButton />
                  {isAuth ? (
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                      <LogoutButton />
                    </Box>
                  ) : (
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                      <LoginForm />
                    </Box>
                  )}
                </Box>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </React.Fragment>
      </Box>
    </Box>
  );
}
