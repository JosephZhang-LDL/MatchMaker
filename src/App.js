import React from "react";
import "./App.scss";
import Navbar from "./components/general/Navbar";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";
import MyCrushes from "./components/MyCrushes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar />
      </div>
      <MyCrushes />
    </ChakraProvider>
  );
}

export default App;
