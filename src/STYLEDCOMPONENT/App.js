import React from "react";

import "./base.css";
import { AppContainer } from "./app.styles";
import Header from "./header/header.component";
import HomePage from "./pages/home/home.component";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <HomePage />
    </AppContainer>
  );
};

export default App;
