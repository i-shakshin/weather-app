import { createTheme, GlobalStyles, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#8e96a1" },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
