import { Box, Typography } from "@mui/material";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../locales/translations";

export function Home() {
    const {language, setLanguage} = useLanguage();
    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'nl' : 'en');
    };

  return (
    <>
      <Box sx={{ pt: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          {t.home.title}<span style={{ color: "#22c55e" }}>R</span>!
        </Typography>
        <Typography variant="h4" align="center" sx={{ color: "gray" }}>
          <span style={{ color: "#22c55e" }}>Health</span> can be{" "}
          <button onClick={toggleLanguage}>
            Switch to {language === 'en' ? 'Dutch' : 'English'}
          </button>
          <span style={{ color: "#22c55e" }}>Affordable</span>!
        </Typography>
      </Box>
    </>
  );
}
