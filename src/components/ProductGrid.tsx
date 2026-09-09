import { Grid, Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  // als er geen beschikbare producten zijn
  if (products.length === 0) {
    return (
      <Box className="text-center py-10 bg-gray-50 rounded-xl">
        <Typography color="textSecondary">
          Geen producten gevonden die aan alle geselecteerde filters voldoen.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={{ xs: 1.5, sm: 3 }}>
      {products.map((product) => (
        <Grid size={{ xs: 6, sm: 6, md: 4 }} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
