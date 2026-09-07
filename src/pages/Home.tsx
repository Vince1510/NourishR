import { Box, Typography } from "@mui/material";

export function Home() {
  return (
    <>
      <Box sx={{ pt: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to Nourish<span style={{ color: "#22c55e" }}>R</span>!
        </Typography>
        <Typography variant="h4" align="center" sx={{ color: "gray" }}>
          <span style={{ color: "#22c55e" }}>Health</span> can be{" "}
          <span style={{ color: "#22c55e" }}>Affordable</span>!
        </Typography>
      </Box>
    </>
  );
}
