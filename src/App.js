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
import Account from "./components/Account";
import { Login, Register } from "./components/LoginRegister";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/register" exact render={() => <Register />} />
          <div>
            <div>
              <Navbar />
            </div>
            <Route path="/my-crushes" exact render={() => <MyCrushes />} />
            <Route path="/account" exact render={() => <Account />} />
            <Route
              path="/*"
              render={(props) => {
                return <Redirect to="/my-crushes" />;
              }}
            />
          </div>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
