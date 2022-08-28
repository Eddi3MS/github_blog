import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorModalContextProvider } from "./context/ErrorFeedbackContext";
import { GlobalStyle } from "./styles/Global";
import moment from "moment";
import "moment/dist/locale/pt-br";
import { LoadingContextProvider } from "./context/LoadingContext";

moment.locale("pt-br");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <LoadingContextProvider>
      <ErrorModalContextProvider>
        <App />
      </ErrorModalContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);
