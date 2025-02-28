import React from "react";
import { ThemeProvider } from "styled-components";
import { Store } from "./store";
import AppRoutes from "./routes/Routes";
import { GlobalStyles, theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Store>
        <AppRoutes />
      </Store>
    </ThemeProvider>
  );
}

export default App;
