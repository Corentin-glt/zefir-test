import React from "react";

import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import client from "./apolloClient";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
