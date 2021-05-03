import React from "react";
import "./App.scss";
import Navbar from "./components/general/Navbar";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Navbar />
      </div>
    </ChakraProvider>
  );
}

export default App;
