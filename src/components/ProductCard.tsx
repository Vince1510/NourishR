import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Chip,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Card className="h-full flex flex-col rounded-xl shadow-sm hover:shadow-md transition-shadow">
      {/* Container met relative positie voor de afbeelding en het hartje */}
      <Box className="relative w-full aspect-square">
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Hartje om toe te voegen aan favorieten */}
        <IconButton
          onClick={toggleFavorite}
          aria-label="toevoegen aan favorieten"
          className="!absolute top-2 right-2 bg-white "
          size="small"
        >
          {isFavorite ? (
            <FavoriteIcon className="text-red-500" fontSize="small" />
          ) : (
            <FavoriteBorderIcon className="text-gray-600" fontSize="small" />
          )}
        </IconButton>
      </Box>

      <CardContent className="flex-grow flex flex-col justify-between p-3">
        <Typography
          variant="subtitle1"
          className="font-bold mb-2 text-sm sm:text-base leading-tight"
        >
          {product.name}
        </Typography>
        <Stack direction="row" spacing={0.5} useFlexGap>
          {product.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              className="text-xs mb-1"
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
