import {
  Container,
  Typography,
  Paper,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

export default function Profile() {
  const [preferences] = useState<string[]>([
    "Vezelrijk",
    "Minder vetten",
    "Zonder Suiker",
  ]);
  const [selected, setSelected] = useState<string[]>([]);

  const togglePreference = (pref: string) => {
    if (selected.includes(pref)) {
      setSelected(selected.filter((item) => item !== pref));
    } else {
      setSelected([...selected, pref]);
    }
  };
  return (
    <Container maxWidth="xs" className="pt-6 pb-24">
      {/* profile header */}
      <Paper className="p-4 mb-4 text-center rounded-xl border border-gray-100">
        <Avatar
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
          className="w-16 h-16 mx-auto mb-2"
        />
        <Typography variant="h6" className="font-bold">
          Sanne de Vries
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          sanne@example.com
        </Typography>
      </Paper>

      <Paper
        elevation={1}
        className="p-5 mb-6 rounded-xl border border-gray-100"
      >
        <Typography variant="h6" className="font-semibold mb-1 text-gray-800">
          Mijn Standaard Voorkeuren
        </Typography>
        <Typography variant="body2" className="text-gray-500 mb-3">
          Klik op een label om je voorkeur aan te passen.
        </Typography>

        <Box className="flex gap-2 flex-wrap">
          {preferences.map((pref) => {
            const isSelected = selected.includes(pref);
            return (
              <Chip
                key={pref}
                label={pref}
                clickable
                color={isSelected ? "primary" : "default"}
                onClick={() => togglePreference(pref)}
              />
            );
          })}
        </Box>
      </Paper>

      {/* Menu opties */}
      <Paper className="rounded-xl border border-gray-100">
        <List disablePadding>
          <ListItem>
            <ListItemIcon>
              <FavoriteIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Mijn Favorieten" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SettingsIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="Instellingen" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LogoutIcon color="action" />
            </ListItemIcon>
            <ListItemText primary="Uitloggen" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}
