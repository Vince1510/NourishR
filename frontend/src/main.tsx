import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import './index.css';
import { StyledEngineProvider } from "@mui/material/styles";
import { LanguageProvider } from './context/LanguageContext.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StyledEngineProvider>
  </BrowserRouter>,
);
