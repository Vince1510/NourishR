import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Appbar is de container */}
      <AppBar position="static">
        {/*Toolbar is de layout voor de content in de appbar*/}
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NourishR
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
