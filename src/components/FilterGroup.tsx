import { Paper, Box, Typography, Stack, Chip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function FilterGroup({
  // props die nodig zijn om te filteren
  filters,
  selectedFilters,
  onFilterToggle,
}) {
  return (
    <Paper elevation={1} className="p-4 mb-6 rounded-xl border border-gray-100">
      <Box className="flex items-center gap-2 mb-3">
        <FilterListIcon color="primary" />
        <Typography variant="h6" className="font-semibold">
          2. Filter op eigenschappen
        </Typography>
      </Box>
      <Stack direction="row" spacing={1} useFlexGap>
        {filters.map((filter: string) => {
          const isSelected = selectedFilters.includes(filter);
          return (
            <Chip
              key={filter}
              label={filter}
              clickable
              color={isSelected ? "primary" : "default"}
              onClick={() => onFilterToggle(filter)}
              className="text-sm font-medium py-1"
            />
          );
        })}
      </Stack>
    </Paper>
  );
}
