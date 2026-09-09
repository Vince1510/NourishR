import { Routes, Route } from "react-router";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import { Home } from "./pages";
import Discover from "./pages/Discover";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";

const theme = createTheme({
  palette: {
    primary: {
      main: "#468567",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  return (
    // 2. Omhul de applicatie met de ThemeProvider
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
