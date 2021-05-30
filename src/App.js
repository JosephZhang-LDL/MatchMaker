import React from "react";
import "./App.scss";
import Navbar from "./components/general/Navbar";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MyCrushes from "./components/MyCrushes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar />
      </div>
      <Router>
        <Switch>
          <Route path="/my-crushes" exact render={() => <MyCrushes />} />
          <Route
            path="/"
            exact
            render={(props) => {
              return <Redirect to="/my-crushes" />;
            }}
          />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
