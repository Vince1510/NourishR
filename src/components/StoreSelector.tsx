import {
  Paper,
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function StoreSelector({
  // props die we nodig hebben om de supermarkt te kunnen selecteren en weer te geven
  stores,
  selectedStore,
  onStoreChange,
}) {
  return (
    <Paper elevation={1} className="p-4 mb-6 rounded-xl border border-gray-100">
      <Box className="flex items-center gap-2 mb-3">
        <StorefrontIcon color="primary" />
        <Typography variant="h6" className="font-semibold">
          1. Kies een supermarkt
        </Typography>
      </Box>
      <ToggleButtonGroup
        value={selectedStore}
        exclusive
        onChange={onStoreChange}
        fullWidth
        color="primary"
      >
        {stores.map((store: string) => (
          <ToggleButton
            key={store}
            value={store}
            className="py-2.5 font-medium"
          >
            {store}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Paper>
  );
}
