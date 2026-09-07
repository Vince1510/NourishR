import { useState } from "react";
import { Link as RouterLink } from "react-router";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Discover", path: "/discover" },
    { text: "About", path: "/about" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Appbar is de container */}
      <AppBar position="static">
        {/*Toolbar is de layout voor de content in de appbar*/}
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NourishR
          </Typography>
          {/* De icon knop */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            // Opent de toggle drawer
            onClick={toggleDrawer(true)}
          >
            {/* Icon vanuit MUI */}
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* De Sidebar */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {/* Map van alle items in de sideNav */}
            {menuItems.map((item) => (
              <ListItem key={item.text}>
                <ListItemButton component={RouterLink} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
