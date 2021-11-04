import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ResetStyles } from "./styles/ResetStyles";
import { GlobalStyles } from "./styles/GlobalStyles";
import { primaryTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={primaryTheme}>
            <App />

            <ResetStyles />
            <GlobalStyles />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
