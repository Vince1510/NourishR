import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useLocation } from "react-router";

export default function Footer() {
  // react hook die kijkt welke pagina active is
  const location = useLocation();

  return (
    <BottomNavigation
      //showLabels
      value={location.pathname}
      className="fixed bottom-0 left-0 right-0 h-16 w-full z-50 border-t border-gray-200"
    >
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<HomeIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Discover"
        value="/discover"
        icon={<ExploreIcon />}
        component={Link}
        to="/discover"
      />
      <BottomNavigationAction
        label="Favourites"
        value="/favourites"
        icon={<FavoriteIcon />}
        component={Link}
        to="/favourites"
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<PersonIcon />}
        component={Link}
        to="/profile"
      />
    </BottomNavigation>
  );
}
